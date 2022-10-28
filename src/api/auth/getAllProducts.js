import axios from "axios";

const getAllProducts = async () => {
  try {
    const res = await axios.get("https://108.137.148.110/api/v1/products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default getAllProducts;
