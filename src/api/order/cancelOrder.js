import axios from "axios";

const cancelOrder = async (orderId) => {
  try {
    const res = await axios.get(`http://108.137.148.110/api/v1/order/cancel-order/${orderId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export default cancelOrder;
