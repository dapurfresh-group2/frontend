import axios from "axios";

const searchProduct = async (name) => {
  try {
    console.log(name);
    const res = await axios.get(`http://108.137.148.110/api/v1/products/${name}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default searchProduct;
