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
        res.status(200).json(createdUser, { message: "User Created" });
    } catch (error) {
        prisma.$disconnect();
        console.log(error);
        res.status(400).json({ message: "User creation failure" });
    }
}
