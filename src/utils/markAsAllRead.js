import axios from "axios";

export const markAsAllRead = async (id) => {
    try {
        const { data } = await axios.get(
            `/api/notification/markAsAllRead/${id}`
        );
        return data;
    } catch (error) {
        return { data: error };
    }
};
