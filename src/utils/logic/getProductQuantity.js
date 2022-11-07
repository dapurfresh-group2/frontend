const getProductQuantity = (id, cart) => {
  if (cart.cart_items) {
    const filteredProduct = cart.cart_items
      ? cart.cart_items.filter((product) => product.productId === id)
      : [];
    return filteredProduct.length > 0 ? filteredProduct[0].quantity : 0;
  } else {
    return 0;
  }
};

export default getProductQuantity;
