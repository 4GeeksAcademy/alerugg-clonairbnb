import { useState } from "react";

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const useAvailabilityCalendar = () => {
  const [today] = useState(() => startOfDay(new Date()));
  const [viewMonth, setViewMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);

  const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const canGoPrevious = viewMonth > currentMonth;

  const goToPreviousMonth = () => {
    if (canGoPrevious) setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));
  };

  const selectDate = (date: Date) => {
    if (date < today) return;
    if (start === null || end !== null || date < start) {
      setStart(date);
      setEnd(null);
      return;
    }
    setEnd(date);
  };

  return {
    today,
    viewMonth,
    start,
    end,
    canGoPrevious,
    goToPreviousMonth,
    goToNextMonth,
    selectDate,
  };
};
