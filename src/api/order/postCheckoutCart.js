import axios from "axios";

const postCheckoutCart = async (cartId, payload) => {
  try {
    const res = await axios.post(
      `http://108.137.148.110/api/v1/order/checkout/${cartId}`,
      payload,
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

export default postCheckoutCart;
