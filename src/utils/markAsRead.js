import axios from "axios";

export const markAsRead = async (id) => {
    try {
        const { data } = await axios.get(`/api/notification/markAsRead/${id}`);
        return data;
    } catch (error) {
        return { data: error };
    }
};
