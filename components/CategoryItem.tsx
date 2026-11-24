
"use client";

import type { Category } from "@/types";

interface CategoryItemProps {
  category: Category;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const CategoryItem = ({
  category,
  isSelected,
  onSelect,
}: CategoryItemProps) => (
  <button
    type="button"
    aria-pressed={isSelected}
    onClick={() => onSelect(category.id)}
    className={`group flex min-w-[64px] shrink-0 flex-col items-center gap-2 border-b-2 px-2 pb-3 pt-2 transition-colors ${
      isSelected
        ? "border-ink text-ink"
        : "border-transparent text-ink-muted hover:border-line hover:text-ink"
    }`}
  >
    <span
      className={`text-[26px] transition-transform duration-200 group-hover:-translate-y-0.5 ${
        isSelected ? "opacity-100" : "opacity-75"
      }`}
      aria-hidden="true"
    >
      {category.icon}
    </span>

    <span className="whitespace-nowrap text-xs font-semibold">
      {category.label}
    </span>
  </button>
);

