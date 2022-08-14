import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
    const { email } = req.query;

    try {
        let userId = await prisma.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
            },
        });
        if (userId == null) {
            userId = "0";
        } else {
            userId = userId.id;
        }
        res.status(200).json({ userId });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}
