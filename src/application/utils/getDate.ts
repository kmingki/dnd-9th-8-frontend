// 캘린더 range에 사용
export const getMonthandDate = (date: any) => {
  if (!date) {
    return "";
  }
  const newDateValue = new Date(date);
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  const newMonth =
    newDateValue.getMonth() + 1 < 10
      ? 0 + String(newDateValue.getMonth() + 1)
      : String(newDateValue.getMonth() + 1);
  const newDate =
    newDateValue.getDate() < 10
      ? 0 + String(newDateValue.getDate())
      : String(newDateValue.getDate());
  const newDay = weeks[newDateValue.getDay()];

  return `${newMonth}월 ${newDate}일 (${newDay})`;
};

export const toLocalISOString = (date: Date) => {
  let tzo = -date.getTimezoneOffset(),
    dif = tzo >= 0 ? "+" : "-",
    pad = function (num: number) {
      var norm = Math.floor(Math.abs(num));
      return (norm < 10 ? "0" : "") + norm;
    };

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds())
  );
};

// 여행 정보에서 기간 나타낼 때 사용
export const getTripDetailRange = (date: any) => {
  if (!date) {
    return "";
  }
  const newDateValue = new Date(date);
  const newMonth = String(newDateValue.getMonth() + 1);
  const newDate = String(newDateValue.getDate());

  return `${newMonth}월 ${newDate}일`;
};

//캘린더 디폴트값 설정할때 기본값 넣어주는 포맷
export const getMonthandDateList = (date: any) => {
  if (!date) {
    return [];
  }
  const newDateValue = new Date(date);
  const NewYear = newDateValue.getFullYear();
  const newMonth = String(newDateValue.getMonth());
  const newDate = String(newDateValue.getDate());
  return [NewYear, Number(newMonth), Number(newDate)];
};