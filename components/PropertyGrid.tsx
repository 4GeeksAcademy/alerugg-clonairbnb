import { PropertyCard } from "@/components/PropertyCard";
import { PropertyCardSkeleton } from "@/components/PropertyCardSkeleton";
import type { Property } from "@/types";

interface PropertyGridProps {
  properties: Property[];
  isLoading: boolean;
  layout?: "grid" | "list";
}

const SKELETON_COUNT = 6;
const GRID_CLASS = "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
const LIST_CLASS = "flex flex-col gap-8";

export const PropertyGrid = ({ properties, isLoading, layout = "grid" }: PropertyGridProps) => {
  const containerClass = layout === "list" ? LIST_CLASS : GRID_CLASS;

  if (isLoading) {
    return (
      <div className={containerClass}>
        {Array.from({ length: SKELETON_COUNT }, (_, i) => (
          <PropertyCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return <p className="py-12 text-center text-sm text-[#717171]">No hay alojamientos que coincidan con la búsqueda.</p>;
  }

  return (
    <div className={containerClass}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};
