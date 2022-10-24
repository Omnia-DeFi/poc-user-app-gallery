import { Prisma } from "@prisma/client";
import { prisma } from "../../../../prisma/prisma";

export default async function handler(req, res) {
    const { id } = req.query;
    try {
        const notificationData = await prisma.notifications.updateMany({
            where: {
                bearerId: id,
            },
            data: {
                read: true,
            },
        });
        prisma.$disconnect();
        res.status(200).json({ message: "markedAsAllRead" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
}
