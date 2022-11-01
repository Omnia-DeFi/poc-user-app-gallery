import { prisma } from "../../../prisma/prisma";
/**
 * Description: This function is used to get the asset details from the database with pagination
 * @param {*} req - Request object
 * @param {*} res - Response object
 * @query {number} page - Page number
 * @query {number} pageSize - Limit of the number of assets to be fetched
 * @returns - Returns the asset details
 */
export default async function handler(req, res) {
    try {
        const page = req.query.page ? parseInt(req.query.page, 10) : 0;
        const pageSize = req.query.pageSize
            ? parseInt(req.query.pageSize, 10)
            : 25;

        const results = await prisma.Asset.findMany({
            skip: page * pageSize,
            take: pageSize,
            select: {
                id: true,
                title: true,
                images: true,
                floorPrice: true,
            },
        });
        res.status(200).json(results);
    } catch (error) {
        console.log("Error while fetching assets: ", error);
        res.status(500).json({ message: "Unable to get assets" });
    }
}
