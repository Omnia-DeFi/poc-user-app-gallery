import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
    const { id } = req.query;
    console.log("hae");
    try {
        const notificationData = await prisma.notifications.update({
            where: {
                id,
            },
            data: {
                read: true,
            },
        });
        prisma.$disconnect();
        res.status(200).json({ message: "markedAsRead" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
}
