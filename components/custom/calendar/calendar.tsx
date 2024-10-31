import React from "react";
import { DayPicker } from "react-day-picker";

interface CalendarProps {
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onSelect }) => {
  return (
    <div>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={(date) => onSelect(date || undefined)}
      />
    </div>
  );
};

export default Calendar;
