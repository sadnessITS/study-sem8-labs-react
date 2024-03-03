import { useState } from "react";
import {
  Dates,
  getCurrentMonthDays,
  getFirstDaysInNextMonth,
  getLastDaysInPrevMonth,
} from "./dateUtils.ts";

function BodyCalendar({
  selectedDateInCalendar,
}: {
  selectedDateInCalendar: Date;
}) {
  const selectedYear = selectedDateInCalendar.getFullYear(),
    selectedMonth = selectedDateInCalendar.getMonth();

  const days = [
    getLastDaysInPrevMonth(selectedYear, selectedMonth),
    getCurrentMonthDays(selectedYear, selectedMonth),
    getFirstDaysInNextMonth(selectedYear, selectedMonth),
  ].flat();

  const chunkedDays: Dates[][] = [];
  const weekSize = 7;
  for (let i = 0; i < days.length; i += weekSize) {
    const chunk = days.slice(i, i + weekSize);
    chunkedDays.push(chunk);
  }

  const today = new Date();
  const [selected, setSelected] = useState(new Set<Dates["id"]>());
  return (
    <div
      style={{
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <table>
        <thead>
          <tr>
            <td>ПН</td>
            <td>ВТ</td>
            <td>СР</td>
            <td>ЧТ</td>
            <td>ПТ</td>
            <td>СБ</td>
            <td>ВС</td>
          </tr>
        </thead>
        <tbody>
          {chunkedDays.map((week, index) => (
            <tr key={index}>
              {week.map((day) => (
                <td
                  onClick={() => {
                    setSelected((prev) => {
                      const newState = new Set(prev);
                      newState.has(day.id)
                        ? newState.delete(day.id)
                        : newState.add(day.id);
                      return newState;
                    });
                  }}
                  key={day.id}
                  style={{
                    color: day?.isDateInSelectedMonth ? "black" : "darkgray",
                    background:
                      today.getDate() === day.date &&
                      today.getMonth() === day.month
                        ? "green"
                        : undefined,
                    fontWeight: selected.has(day.id) ? "bold" : undefined,
                  }}
                >
                  {day.date}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BodyCalendar;
