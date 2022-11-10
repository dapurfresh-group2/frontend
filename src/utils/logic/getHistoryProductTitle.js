const getHistoryProductTitle = (cartItems) => {
  try {
    let historyProducts = [];
    cartItems.forEach((item) => {
      historyProducts.push(item.product.name);
    });
    return historyProducts.join(", ");
  } catch (e) {
    console.log(e);
    return "History";
  }
};

export default getHistoryProductTitle;
