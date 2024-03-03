import { useState } from "react";
import BodyCalendar from "./BodyCalendar.tsx";
import HeadCalendar from "./HeadCalendar.tsx";

const Calendar = () => {
  const [currentDateInCalendar, setCurrentDateInCalendar] = useState(
    new Date()
  );
  return (
    <div style={{ width: "500px" }}>
      <HeadCalendar
        currentDateInCalendar={currentDateInCalendar}
        setCurrentDateInCalendar={setCurrentDateInCalendar}
      />
      <BodyCalendar selectedDateInCalendar={currentDateInCalendar} />
    </div>
  );
};
export default Calendar;
