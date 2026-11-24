
"use client";

import { useMemo, useState } from "react";
import { CategoryList } from "@/components/CategoryList";
import { PropertyGrid } from "@/components/PropertyGrid";
import { SearchBar } from "@/components/SearchBar";
import { useSimulatedLoading } from "@/hooks/useSimulatedLoading";
import type { Category, Property } from "@/types";

interface HomeListingProps {
  categories: Category[];
  properties: Property[];
}

export const HomeListing = ({ categories, properties }: HomeListingProps) => {
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const isLoading = useSimulatedLoading(1000);

  const visibleProperties = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return properties.filter((property) => {
      const text = `${property.title} ${property.location}`.toLowerCase();
      const matchesText = text.includes(normalizedQuery);
      const matchesCategory =
        categoryId === null || property.categoryIds.includes(categoryId);

      return matchesText && matchesCategory;
    });
  }, [properties, query, categoryId]);

  const handleCategorySelect = (id: string) => {
    setCategoryId((current) => (current === id ? null : id));
  };

  return (
    <main className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
      <section className="mx-auto max-w-2xl py-6 md:py-8">
        <SearchBar value={query} onChange={setQuery} />
      </section>

      <section className="border-b border-line-subtle">
        <CategoryList
          categories={categories}
          selectedId={categoryId}
          onSelect={handleCategorySelect}
        />
      </section>

      <section className="py-6 md:py-8">
        <PropertyGrid
          properties={visibleProperties}
          isLoading={isLoading}
        />
      </section>
    </main>
  );
};
