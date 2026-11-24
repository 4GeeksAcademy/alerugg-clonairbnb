import { AvailabilityCalendar } from "@/components/AvailabilityCalendar";
import { Description } from "@/components/Description";
import { FavoriteButton } from "@/components/FavoriteButton";
import { Gallery } from "@/components/Gallery";
import { HostInfo } from "@/components/HostInfo";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { ReservationCard } from "@/components/ReservationCard";
import { ReviewList } from "@/components/ReviewList";
import { ReviewsSummary } from "@/components/ReviewsSummary";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ShareButton } from "@/components/ShareButton";
import { Property, Review, Service } from "@/types";

interface PropertyDetailProps {
  property: Property;
  reviews: Review[];
  services: Service[];
}

export const PropertyDetail = ({ property, reviews, services }: PropertyDetailProps) => (
  <div className="flex flex-col gap-8">
    {property.photos.length > 0 && <Gallery photos={property.photos} alt={property.title} />}
    <div className="grid gap-8 md:grid-cols-[1fr_360px]">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-[#222222] sm:text-3xl">{property.title}</h1>
          <p className="text-[#717171] underline">{property.location}</p>
          <ReviewsSummary reviews={reviews} variant="inline" />
          <div className="flex flex-wrap gap-2">
            <ShareButton title={property.title} />
            <FavoriteButton propertyId={property.id} />
          </div>
        </header>
        <HostInfo host={property.host} />
        <Description text={property.description} />
        <ServiceGrid services={services} />
        {property.additionalPhotos.length > 0 && (
          <Gallery photos={property.additionalPhotos} alt={`${property.title} - más fotos`} />
        )}
        <section className="flex flex-col gap-6">
          <ReviewsSummary reviews={reviews} variant="section" />
          <ReviewList reviews={reviews} />
        </section>
        <MapPlaceholder location={property.location} />
        <AvailabilityCalendar />
      </div>
      <aside className="md:sticky md:top-24 md:self-start">
        <ReservationCard pricePerNight={property.pricePerNight} />
      </aside>
    </div>
  </div>
);
