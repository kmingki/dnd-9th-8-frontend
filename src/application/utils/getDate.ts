export const getMonthandDate = (date: Date) => {
  const newMonth =
    date.getMonth() + 1 < 10
      ? 0 + String(date.getMonth() + 1)
      : String(date.getMonth() + 1);
  const newDate =
    date.getDate() < 10 ? 0 + String(date.getDate()) : String(date.getDate());
  return `${newMonth}/${newDate}`;
};
