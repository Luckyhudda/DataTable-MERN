export const formatDate = (inputDateString) => {
  const date = new Date(inputDateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Pad day and month with leading zeros if needed
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  // Formatted date string
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  return formattedDate;
};
