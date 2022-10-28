import axios from "axios";

const getAllCategories = async () => {
  try {
    const res = await axios.get("https://108.137.148.110/api/v1/categories", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default getAllCategories;
