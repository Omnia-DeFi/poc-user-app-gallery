import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
    const { issuer, email, phoneNumber, publicAddress } = req.body;

    try {
        const createdUser = await prisma.user
            .upsert({
                where: {
                    email,
                },
                update: {},
                create: {
                    issuer,
                    email,
                    phone_number: +phoneNumber,
                    public_address: publicAddress,
                },
            })
            .finally(() => prisma.$disconnect());

        let kycInfo = await prisma.Kyc.findMany({
            distinct: ["type"],
            where: {
                userId: createdUser.id,
            },
            select: {
                status: true,
                type: true,
            },
            orderBy: [
                {
                    requestedAt: "desc",
                },
            ],
        });
        kycInfo = kycInfo.reduce(
            (acc, curr) => {
                switch (curr.type) {
                    case "KYC":
                        acc.kycState = curr.status;
                        break;
                    case "KYB":
                        acc.kybState = curr.status;
                        break;
                    case "aml":
                        acc.amlState = curr.status;
                        break;
                }
                return acc;
            },
            {
                kycState: "unverified",
                kybState: "unverified",
                amlState: "unverified",
            }
        );

        res.status(200).json(
            { ...createdUser, ...kycInfo },
            { message: "User Created" }
        );
    } catch (error) {
        prisma.$disconnect();
        console.log(error);
        res.status(400).json({ message: "User creation failure" });
    }
}
