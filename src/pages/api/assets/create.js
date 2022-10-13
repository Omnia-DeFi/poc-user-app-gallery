import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
    const {
        email,
        images,
        productName,
        description,
        price,
        size,
        properties,
        royalty,
        PutOnSale,
        InstantSalePrice,
        UnlockPurchased,
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
            const createdAssets = await prisma.Assets.create({
                data: {
                    userId: userDetails.id,
                    images,
                    productName,
                    description,
                    price,
                    size,
                    properties,
                    royalty,
                    PutOnSale,
                    InstantSalePrice,
                    UnlockPurchased,
                },
            })
                .catch(console.error)
                .finally(() => prisma.$disconnect());
            res.status(200).json({ message: "Assets created", createdAssets });
        } else {
            res.status(500).json({ message: "User not registered yet" });
        }
    } catch (error) {
        console.log("Error while creating assets: ", error);
        res.status(500).json({ message: "Unable to create assets" });
    }
}
