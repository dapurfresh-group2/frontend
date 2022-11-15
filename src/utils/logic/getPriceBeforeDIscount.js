const getPriceBeforeDiscount = (price, discount) => {
  if (discount > 100) {
    throw new Error("Discount cannot be greater than 100");
  } else {
    const priceBeforeDiscount = (price * 100) / (100 - discount);
    return priceBeforeDiscount;
  }
};

export default getPriceBeforeDiscount;
