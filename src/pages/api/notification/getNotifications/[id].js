import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
    // const userId = "62f15db19f6c88f82ee4900d";
    const { id } = req.query;

    try {
        const users = await prisma.NotificationsBearer.findMany({
            where: {
                bearerId: id,
            },
            select: {
                notifications: true,
            },
        });
        res.status(200).json({ users });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}
