import axios from "axios";

const getProductsByCategory = async (categoryId) => {
  try {
    const res = await axios.get(
      `http://108.137.148.110/api/v1/products?categoryId=${categoryId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export default getProductsByCategory;
