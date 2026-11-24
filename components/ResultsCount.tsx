"use client";

interface ResultsCountProps {
  count: number;
}

export const ResultsCount = ({ count }: ResultsCountProps) => (
  <p className="text-sm text-[#222222]" aria-live="polite">
    <span className="font-semibold">{count}</span> {count === 1 ? "alojamiento" : "alojamientos"}
  </p>
);
