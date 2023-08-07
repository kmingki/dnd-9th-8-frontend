export const getMonthandDate = (date: Date) => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  const newMonth =
    date.getMonth() + 1 < 10
      ? 0 + String(date.getMonth() + 1)
      : String(date.getMonth() + 1);
  const newDate =
    date.getDate() < 10 ? 0 + String(date.getDate()) : String(date.getDate());
  const newDay = weeks[date.getDay()];

  return `${newMonth}월 ${newDate}일 (${newDay})`;
};
