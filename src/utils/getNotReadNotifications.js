import axios from "axios";

export const getNotifications = async (email) => {
    try {
        if (email !== "") {
            const { data } = await axios.get(`/api/user/getUserId/${email}`);
            const res = await axios.get(
                `api/notification/getNotReadNotifications/${data.userId}`
            );
            return res.data.notifications;
        }
        return [];
    } catch (error) {
        const userId = { notifications: [] };
        return userId;
    }
};
