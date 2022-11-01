import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
    const { email, name, dateOfBirth, gender, type } = req.body;

    try {
        const userDetails = await prisma.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
            },
        });

        if (userDetails && userDetails.id) {
            await prisma.Kyc.create({
                data: {
                    userId: userDetails.id,
                    requestedAt: new Date(),
                    approvedAt: new Date(
                        new Date().setTime(new Date().getTime() + 15 * 1000)
                    ),
                    type: "AML",
                    status: "verified",
                    supportiveData: {
                        dateOfBirth: new Date(dateOfBirth),
                        name,
                        gender,
                    },
                },
            }).catch((err) => {
                console.log("Unable to save AML data", err);
            });

            const createdKyc = await prisma.Kyc.create({
                data: {
                    userId: userDetails.id,
                    requestedAt: new Date(),
                    approvedAt: new Date(
                        new Date().setTime(new Date().getTime() + 15 * 1000)
                    ),
                    type,
                    status: "verified",
                    supportiveData: {
                        dateOfBirth: new Date(dateOfBirth),
                        name,
                        gender,
                    },
                },
            })
                .catch()
                .finally(() => prisma.$disconnect());
            res.status(200).json({ message: "Kyc created", createdKyc });
        } else {
            res.status(500).json({ message: "User not registered yet" });
        }
    } catch (error) {
        console.log("Error while updating KYC: ", error);
        res.status(500).json({ message: "Unable to complete KYC" });
    }
}
