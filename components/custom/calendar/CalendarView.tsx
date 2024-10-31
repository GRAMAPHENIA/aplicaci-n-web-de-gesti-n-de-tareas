// CalendarView.tsx
import { CalendarViewProps } from "@/types/CalendarViewProps";
import React from "react";

const CalendarView: React.FC<CalendarViewProps> = ({
  days,
  selectedDate,
  onDateChange,
}) => {
  return (
    <div className="calendar-view grid-cols-7">
      {days.map((day) => (
        <div key={day.date.toString()} className="">
          <div
            className={`day ${
              day.hasTasks ? "bg-teal-300 border p-4 col-span-1" : "border p-4"
            } ${
              selectedDate?.toDateString() === day.date.toDateString()
                ? "bg-blue-300"
                : ""
            }`}
            onClick={() => onDateChange(day.date)}
          >
            <span>{day.date.toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarView;
