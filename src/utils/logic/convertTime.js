const convertDate = (UTCTime) => {
  const monthArray = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let dateTime = new Date(UTCTime).toLocaleString();
  const [date, time] = dateTime.split(",");

  // Date format
  const [month, day, year] = date.split("/");
  const convertedMonth = monthArray[month - 1];
  const convertedDate = `${day} ${convertedMonth} ${year}, `;

  // Time format
  const [hour, minute, second] = time.split(":");
  // timeIndocator is AM or PM
  const timeIndocator = second.slice(2);
  const convertedTime = `${hour}:${minute}${timeIndocator}`;

  return `${convertedDate}${convertedTime}`;
};

export default convertDate;
