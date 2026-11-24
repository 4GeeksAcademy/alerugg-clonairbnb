interface CalendarMonthProps {
  month: Date;
  today: Date;
  start: Date | null;
  end: Date | null;
  onSelect: (date: Date) => void;
}

const WEEKDAYS = ["L", "M", "X", "J", "V", "S", "D"];

const buildCells = (month: Date): (Date | null)[] => {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const leadingBlanks = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
  const days = Array.from({ length: daysInMonth }, (_, i) => new Date(year, monthIndex, i + 1));
  return [...Array.from({ length: leadingBlanks }, () => null), ...days];
};

const isSameDay = (a: Date | null, b: Date) => a !== null && a.getTime() === b.getTime();

export const CalendarMonth = ({ month, today, start, end, onSelect }: CalendarMonthProps) => (
  <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
    {WEEKDAYS.map((day) => (
      <span key={day} className="py-1 text-xs text-[#717171]">
        {day}
      </span>
    ))}
    {buildCells(month).map((date, i) => {
      if (date === null) return <span key={`blank-${i}`} />;

      const isPast = date < today;
      const isEdge = isSameDay(start, date) || isSameDay(end, date);
      const isInRange = start !== null && end !== null && date > start && date < end;

      const stateClass = isPast
        ? "cursor-not-allowed text-[#DDDDDD] line-through"
        : isEdge
          ? "bg-[#222222] font-semibold text-white"
          : isInRange
            ? "bg-[#F7F7F7] text-[#222222]"
            : "text-[#222222] hover:border hover:border-[#222222]";

      return (
        <button
          key={date.getTime()}
          type="button"
          disabled={isPast}
          aria-pressed={isEdge}
          onClick={() => onSelect(date)}
          className={`h-9 rounded-full transition-colors ${stateClass}`}
        >
          {date.getDate()}
        </button>
      );
    })}
  </div>
);
