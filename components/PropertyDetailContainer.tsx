"use client";

import { PropertyDetail } from "@/components/PropertyDetail";
import { PropertyDetailSkeleton } from "@/components/PropertyDetailSkeleton";
import { useSimulatedLoading } from "@/hooks/useSimulatedLoading";
import { Property, Review, Service } from "@/types";

interface PropertyDetailContainerProps {
  property: Property;
  reviews: Review[];
  services: Service[];
}

export const PropertyDetailContainer = (props: PropertyDetailContainerProps) => {
  const isLoading = useSimulatedLoading(1000);

  if (isLoading) return <PropertyDetailSkeleton />;

  return <PropertyDetail {...props} />;
};
