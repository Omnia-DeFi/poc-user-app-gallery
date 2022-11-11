import { prisma } from "../../../prisma/prisma";

const _ = require("lodash");

export default async function handler(req, res) {
    try {
        const asset = await prisma.Asset.findUnique({
            where: {
                id: req.body.id,
            },
            select: {
                id: true,
                images: true,
            },
        });

        if (asset && asset.id) {
            if (req.body.images) {
                if (asset.images && asset.images.length) {
                    asset.images.push(req.body.images);
                    req.body.images = asset.images;
                } else {
                    req.body.images = [req.body.images];
                }
            }
            const updatedAssets = await prisma.Asset.update({
                where: {
                    id: req.body.id,
                },
                data: _.pick(req.body, [
                    "images",
                    "AVM",
                    "surveyProof",
                    "landRegistry",
                ]),
            });
            res.status(200).json({
                message: "Assets created",
                updatedAssets,
            });
        } else {
            res.status(500).json({ message: "Invalid assets" });
        }
    } catch (error) {
        console.log("Error while updating assets: ", error);
        res.status(500).json({ message: "Unable to update assets" });
    }
}
