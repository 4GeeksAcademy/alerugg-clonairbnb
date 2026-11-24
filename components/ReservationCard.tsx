"use client";

import { useState } from "react";

interface ReservationCardProps {
  pricePerNight: number;
}

const MIN_GUESTS = 1;
const MAX_GUESTS = 8;

export const ReservationCard = ({ pricePerNight }: ReservationCardProps) => {
  const [guests, setGuests] = useState(MIN_GUESTS);

  const counterButtonClass =
    "flex h-8 w-8 items-center justify-center rounded-full border border-line text-lg text-ink transition-colors hover:border-ink disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-line bg-white p-6 shadow-float">
      <p className="text-ink">
        <span className="text-2xl font-semibold">{pricePerNight} €</span>{" "}
        <span className="text-sm text-ink-muted">noche</span>
      </p>

      <div className="flex items-center justify-between rounded-lg border border-line p-4">
        <span className="text-sm font-medium text-ink">Huéspedes</span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Quitar huésped"
            disabled={guests <= MIN_GUESTS}
            onClick={() => setGuests((g) => g - 1)}
            className={counterButtonClass}
          >
            −
          </button>

          <span className="w-4 text-center text-sm text-ink" aria-live="polite">
            {guests}
          </span>

          <button
            type="button"
            aria-label="Añadir huésped"
            disabled={guests >= MAX_GUESTS}
            onClick={() => setGuests((g) => g + 1)}
            className={counterButtonClass}
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-lg bg-brand py-3 text-base font-semibold text-white transition-colors hover:bg-brand-hover"
      >
        Reservar
      </button>
    </div>
  );
};
