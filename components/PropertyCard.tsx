"use client";

import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "@/components/FavoriteButton";
import { PhotoControls } from "@/components/PhotoControls";
import { usePhotoNavigation } from "@/hooks/usePhotoNavigation";
import type { Property } from "@/types";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const { id, title, location, pricePerNight, photos } = property;
  const { index, goPrevious, goNext } = usePhotoNavigation(photos.length);

  return (
    <article className="flex flex-col gap-3">
      <div className="relative aspect-square overflow-hidden rounded-card">
        <Image
          src={photos[index]}
          alt={title}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
        <div className="absolute right-3 top-3">
          <FavoriteButton propertyId={id} />
        </div>
        <PhotoControls
          total={photos.length}
          current={index}
          onPrevious={goPrevious}
          onNext={goNext}
        />
      </div>

      <Link href={`/property/${id}`} className="flex flex-col gap-1">
        <h3 className="text-[15px] font-medium leading-tight text-ink">
          {title}
        </h3>
        <p className="text-sm text-ink-muted">{location}</p>
        <p className="mt-1 text-[15px] text-ink">
          <span className="font-semibold">{pricePerNight} €</span>{" "}
          <span>noche</span>
        </p>
      </Link>
    </article>
  );
};

