"use client";

import type { SortOrder } from "@/types";

interface SortSelectProps {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

export const SortSelect = ({ value, onChange }: SortSelectProps) => (
  <select
    aria-label="Ordenar alojamientos"
    value={value}
    onChange={(event) => onChange(event.target.value as SortOrder)}
    className="rounded-full border border-[#EBEBEB] bg-white px-4 py-2 text-sm text-[#222222] focus:border-[#222222] focus:outline-none"
  >
    <option value="default">Recomendados</option>
    <option value="price-asc">Precio: de menor a mayor</option>
    <option value="price-desc">Precio: de mayor a menor</option>
  </select>
);
