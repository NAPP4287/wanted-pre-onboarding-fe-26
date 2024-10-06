// 날짜 포맷 뽑아주기 (YYYY-MM-DD)
export const handleDateFormat = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// 숫자 3자리씩 ,
export const handleCountTil = (val: string | number) => {
  if (val !== undefined)
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const handleTimeFormat = (time: string) => {
  const currentDate: Date = new Date();
  const givenDate: Date = new Date(time);

  const differenceInMilliseconds: number =
    currentDate.getTime() - givenDate.getTime();

  // 몇 초 전인지
  const millisecondsInOneMinute: number = 1000 * 60;
  const differenceInMinutes: number =
    differenceInMilliseconds / millisecondsInOneMinute;

  // 몇 시간 전인지
  const millisecondsInOneHour: number = 1000 * 60 * 60;
  const differenceInHours: number = Math.floor(
    differenceInMilliseconds / millisecondsInOneHour
  );

  // 몇 일 전인지
  const millisecondsInOneDay: number = 1000 * 60 * 60 * 24;
  const differenceInDays: number = Math.floor(
    differenceInMilliseconds / millisecondsInOneDay
  );

  // 방금 전
  if (differenceInMinutes === 0) {
    return "방금 전";
  } else if (differenceInMinutes >= 1 && Math.floor(differenceInMinutes) < 60) {
    // ㅇㅇ분 전
    return `${Math.floor(differenceInMinutes)}분 전`;
  } else if (differenceInHours <= 23) {
    // ㅇㅇ시간 전
    return `${differenceInHours}시간 전`;
  } else if (differenceInHours >= 24 && differenceInDays < 7) {
    // ㅇㅇ일 전
    return `${differenceInDays}일 전`;
  } else {
    // ㅇ월ㅇ일
    return handleDateFormat(givenDate);
  }
};
