import axios from "axios";

const apiPutProfile = async (name, phone, address) => {
    try {
        const res = await axios.put("http://108.137.148.110/api/v1/profile/edit", {
            name: name,
            phone: phone,
            address: address,
            image: null
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return res;
    } catch (error) {
        return error;
    }
};

export default apiPutProfile;
