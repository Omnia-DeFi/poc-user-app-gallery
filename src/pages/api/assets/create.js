import { prisma } from "../../../prisma/prisma";

export default async function handler(req, res) {
    const {
        email,
        name,
        description,
        avm,
        surveyAnalysis,
        landRegistry,
        floorArea,
        hasOutdoorSpace,
        bedrooms,
        bathrooms,
        otherRooms,
        floorPrice,
        saleTimeframe,
        // assetFolderLink,
        // mintAddress,
        // saleStatus,
        // verificationState,
        // outdoorSpaceSize,
        extraConditionsLabels,
        extraConditionsDescriptions,
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
            const createdAssets = await prisma.Asset.create({
                data: {
                    userId: userDetails.id,
                    name,
                    description,
                    avm,
                    surveyAnalysis,
                    landRegistry,
                    floorArea,
                    hasOutdoorSpace,
                    bedrooms,
                    bathrooms,
                    otherRooms,
                    floorPrice,
                    saleTimeframe,
                    // assetFolderLink: assetFolderLink,
                    // mintAddress: mintAddress,
                    // saleStatus: saleStatus,
                    // verificationState: verificationState,
                    // outdoorSpaceSize: outdoorSpaceSize,
                    extraConditionsLabels,
                    extraConditionsDescriptions,
                },
            })
                .catch(console.error)
                .finally(() => {
                    prisma.$disconnect();
                });
            if (!createdAssets) {
                res.status(500).json({
                    message: "Error while creating assets",
                });
            }
            res.status(200).json({ message: "Assets created", createdAssets });
        } else {
            res.status(500).json({ message: "User not registered yet" });
        }
    } catch (error) {
        console.log("Error while creating assets: ", error);
        res.status(500).json({ message: "Unable to create assets" });
    }
}
