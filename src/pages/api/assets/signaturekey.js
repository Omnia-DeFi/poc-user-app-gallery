const cloudinary = require("cloudinary").v2;

export default async function handler(req, res) {
    try {
        const configData = {
            cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
            api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
            secure: true,
        };
        const cloudinaryConfig = cloudinary.config(configData);
        const timestamp = Math.round(new Date().getTime() / 1000);
        const signature = cloudinary.utils.api_sign_request(
            {
                timestamp,
            },
            cloudinaryConfig.api_secret
        );
        res.status(200).json({
            message: "Signature key successfully generated",
            data: { timestamp, signature },
        });
    } catch (error) {
        console.log("Error while fetching signatured key: ", error);
        res.status(500).json({ message: "Unable to fetch signature key" });
    }
}
