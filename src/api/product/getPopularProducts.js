import axios from "axios";

const getPopularProducts = async () => {
  try {
    const res = await axios.get("http://108.137.148.110/api/v1/products/best-products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default getPopularProducts;
