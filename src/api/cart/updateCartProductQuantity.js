import axios from "axios";

const updateCartProductQuantity = async (id, quantity) => {
  try {
    const res = await axios.post(
      `http://108.137.148.110/api/v1/cart/post-product/${id}`,
      quantity,
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

export default updateCartProductQuantity;
