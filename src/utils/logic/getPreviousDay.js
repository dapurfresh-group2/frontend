const getPreviousDay = (quantity, date = new Date()) => {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - quantity);

  return previous;
};

export default getPreviousDay;
