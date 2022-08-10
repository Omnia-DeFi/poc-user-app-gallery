import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
    const { id } = req.query;

    try {
        const notificationData = await prisma.NotificationsBearer.findUnique({
            where: {
                bearerId: id,
            },
            select: {
                notifications: true,
            },
        });
        const { notifications } = notificationData;
        res.status(200).json({ notifications });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}
