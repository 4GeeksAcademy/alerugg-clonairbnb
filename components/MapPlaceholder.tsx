interface MapPlaceholderProps {
  location?: string;
}

export const MapPlaceholder = ({ location }: MapPlaceholderProps) => {
  const query = location?.trim();

  if (!query) {
    return (
      <div className="flex h-64 w-full items-center justify-center rounded-[16px] bg-[#EBEBEB] px-6 text-center text-sm text-[#717171]">
        Mapa de ubicación
      </div>
    );
  }

  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className="h-[320px] w-full overflow-hidden rounded-[16px] md:h-[400px]">
      <iframe
        src={src}
        title={`Mapa de ${query}`}
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
