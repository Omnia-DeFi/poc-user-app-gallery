import axios from "axios";

export const getUserIdByEmail = async (email) => {
    try {
        const { data } = await axios.get(`/api/user/getUserId/${email}`);
        return data.userId;
    } catch (error) {
        const userId = { userId: "" };
        return userId;
    }
};
