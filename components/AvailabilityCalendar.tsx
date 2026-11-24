"use client";

import { CalendarMonth } from "@/components/CalendarMonth";
import { useAvailabilityCalendar } from "@/hooks/useAvailabilityCalendar";

const formatDate = (date: Date) =>
  date.toLocaleDateString("es-ES", { day: "numeric", month: "short" });

export const AvailabilityCalendar = () => {
  const {
    today,
    viewMonth,
    start,
    end,
    canGoPrevious,
    goToPreviousMonth,
    goToNextMonth,
    selectDate,
  } = useAvailabilityCalendar();

  const monthLabel = viewMonth.toLocaleDateString("es-ES", { month: "long", year: "numeric" });
  const summary =
    start && end
      ? `Entrada: ${formatDate(start)} · Salida: ${formatDate(end)}`
      : start
        ? `Entrada: ${formatDate(start)} · Selecciona la salida`
        : "Selecciona la fecha de entrada";

  const navButtonClass =
    "flex h-8 w-8 items-center justify-center rounded-full border border-[#EBEBEB] text-lg text-[#222222] disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-[#222222]">Calendario de disponibilidad</h2>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={goToPreviousMonth}
          disabled={!canGoPrevious}
          aria-label="Mes anterior"
          className={navButtonClass}
        >
          ‹
        </button>
        <p className="font-medium capitalize text-[#222222]">{monthLabel}</p>
        <button type="button" onClick={goToNextMonth} aria-label="Mes siguiente" className={navButtonClass}>
          ›
        </button>
      </div>
      <CalendarMonth
        month={viewMonth}
        today={today}
        start={start}
        end={end}
        onSelect={selectDate}
      />
      <p className="text-sm text-[#717171]">{summary}</p>
    </section>
  );
};
