"use client";

import Image from "next/image";
import { PhotoControls } from "@/components/PhotoControls";
import { usePhotoNavigation } from "@/hooks/usePhotoNavigation";

interface GalleryProps {
  photos: string[];
  alt: string;
}

export const Gallery = ({ photos, alt }: GalleryProps) => {
  const { index, goPrevious, goNext } = usePhotoNavigation(photos.length);

  const visiblePhotos = Array.from(
    { length: Math.min(5, photos.length) },
    (_, i) => photos[(index + i) % photos.length]
  );

  if (!photos.length) return null;

  return (
    <div className="relative grid grid-cols-1 gap-2 overflow-hidden rounded-2xl md:grid-cols-2">
      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
        <Image
          src={visiblePhotos[0]}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="hidden grid-cols-2 grid-rows-2 gap-2 md:grid">
        {visiblePhotos.slice(1).map((photo, i) => (
          <div key={`${photo}-${i}`} className="relative min-h-[196px]">
            <Image
              src={photo}
              alt={`${alt} (foto ${i + 2})`}
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <PhotoControls
        total={photos.length}
        current={index}
        onPrevious={goPrevious}
        onNext={goNext}
      />
    </div>
  );
};
