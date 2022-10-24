import axios from "axios";

export const getUserIdByEmail = async (email) => {
    try {
        if (email !== "") {
            const { data } = await axios.get(`/api/user/getUserId/${email}`);
            return data.userId;
        }
        return 0;
    } catch (error) {
        const userId = { userId: "0" };
        return userId;
    }
};
