import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
    const {
        email,
        name,
        registrationNumber,
        incorporationDate,
        jurisdiction,
        type,
    } = req.body;

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
            // (new Date()).setTime((new Date()).getTime() + (15 * 1000));
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
                        registrationNumber,
                        name,
                        incorporationDate,
                        jurisdiction,
                    },
                },
            })
                .catch(console.error)
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
