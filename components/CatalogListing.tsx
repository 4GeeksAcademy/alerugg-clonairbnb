"use client";

import { useMemo, useState } from "react";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { PropertyGrid } from "@/components/PropertyGrid";
import { ResultsCount } from "@/components/ResultsCount";
import { SearchBar } from "@/components/SearchBar";
import { SortSelect } from "@/components/SortSelect";
import { useSimulatedLoading } from "@/hooks/useSimulatedLoading";
import type { Property, SortOrder } from "@/types";

interface CatalogListingProps {
  properties: Property[];
}

export const CatalogListing = ({ properties }: CatalogListingProps) => {
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");
  const isLoading = useSimulatedLoading(1000);

  const visibleProperties = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = properties.filter((property) =>
      `${property.title} ${property.location}`.toLowerCase().includes(normalizedQuery),
    );
    if (sortOrder === "default") return filtered;

    const direction = sortOrder === "price-asc" ? 1 : -1;
    return [...filtered].sort((a, b) => direction * (a.pricePerNight - b.pricePerNight));
  }, [properties, query, sortOrder]);

  return (
    <>
      <SearchBar value={query} onChange={setQuery} />
      <div className="flex items-center justify-between gap-4">
        <ResultsCount count={visibleProperties.length} />
        <SortSelect value={sortOrder} onChange={setSortOrder} />
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
        <div className="w-full md:w-1/2">
          <PropertyGrid properties={visibleProperties} isLoading={isLoading} layout="list" />
        </div>
        <div className="w-full md:sticky md:top-24 md:w-1/2">
          <MapPlaceholder location="Mapa de alojamientos" />
        </div>
      </div>
    </>
  );
};
