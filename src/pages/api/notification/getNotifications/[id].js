import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
    const { id } = req.query;

    try {
        let notificationData = await prisma.NotificationsBearer.findUnique({
            where: {
                bearerId: id,
            },
            select: {
                notifications: true,
            },
        });
        if (notificationData == null) {
            notificationData = { notifications: [{}] };
        }
        const { notifications } = notificationData;
        res.status(200).json({ notifications });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
}
