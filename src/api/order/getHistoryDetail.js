import axios from "axios";

const GetHistoryDetail = async (id) => {
    try {
        const res = await axios.get("http://108.137.148.110/api/v1/order/history/" + id, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res;
    } catch (error) {
        return error;
    }
};

export default GetHistoryDetail;
