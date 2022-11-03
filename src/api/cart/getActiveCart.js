import axios from "axios";

const getActiveCart = async () => {
  try {
    const res = await axios.get("http://108.137.148.110/api/v1/cart", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default getActiveCart;
