export type Dates = {
  id: string;
  date: number;
  isDateInSelectedMonth: boolean;
  month: number;
};

export function getLastDaysInPrevMonth(year: number, month: number) {
  let currentMonthFirstDay = new Date(year, month, 1).getDay(); // 0 = sunday
  currentMonthFirstDay =
    currentMonthFirstDay - 1 < 0 ? 6 : currentMonthFirstDay - 1;

  const previousMonthLastDate = new Date(year, month, 0);
  const daysInPrevMonth = previousMonthLastDate.getDate();

  const datesInPrevMonth: Dates[] = [];

  for (let i = currentMonthFirstDay - 1; i >= 0; i--) {
    datesInPrevMonth.push({
      id: daysInPrevMonth - i + "false",
      date: daysInPrevMonth - i,
      isDateInSelectedMonth: false,
      month: previousMonthLastDate.getMonth(),
    });
  }
  return datesInPrevMonth;
}

export function getFirstDaysInNextMonth(year: number, month: number) {
  const currentMonthLastDate = new Date(
    month + 1 > 11 ? year + 1 : year,
    (month + 1) % 12,
    0
  );

  const currentMonthLastDay = currentMonthLastDate.getDay();
  const daysInWeekDiff = 7 - currentMonthLastDay;

  const datesInNextMonth: Dates[] = [];

  for (let i = 1; i <= daysInWeekDiff; i++) {
    datesInNextMonth.push({
      id: i + "false",
      date: i,
      isDateInSelectedMonth: false,
      month: currentMonthLastDate.getMonth() + 1,
    });
  }

  return datesInNextMonth;
}

export function getCurrentMonthDays(year: number, month: number) {
  const currentMonthDate = new Date(year, (month + 1) % 12, 0);

  const daysInCurrentMonth = currentMonthDate.getDate();

  const datesInCurrentMonth: Dates[] = [];

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    datesInCurrentMonth.push({
      id: i + "true",
      date: i,
      isDateInSelectedMonth: true,
      month: currentMonthDate.getMonth(),
    });
  }
  return datesInCurrentMonth;
}
