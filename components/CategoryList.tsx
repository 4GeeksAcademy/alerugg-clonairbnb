"use client";

import { CategoryItem } from "@/components/CategoryItem";
import type { Category } from "@/types";

interface CategoryListProps {
  categories: Category[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export const CategoryList = ({
  categories,
  selectedId,
  onSelect,
}: CategoryListProps) => (
  <nav
    aria-label="Categorías"
    className="-mx-6 overflow-x-auto px-6 md:mx-0 md:overflow-visible md:px-0"
  >
    <ul className="flex w-max min-w-full items-stretch justify-center gap-6">
      {categories.map((category) => (
        <li key={category.id} className="shrink-0">
          <CategoryItem
            category={category}
            isSelected={category.id === selectedId}
            onSelect={onSelect}
          />
        </li>
      ))}
    </ul>
  </nav>
);



