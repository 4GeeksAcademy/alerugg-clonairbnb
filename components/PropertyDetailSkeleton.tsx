const Block = ({ className }: { className: string }) => (
  <div className={`animate-pulse rounded-xl bg-[#EBEBEB] ${className}`} />
);

export const PropertyDetailSkeleton = () => (
  <div className="flex flex-col gap-8" aria-busy="true" aria-label="Cargando alojamiento">
    <Block className="h-[360px] w-full sm:h-[480px]" />
    <div className="grid gap-8 md:grid-cols-[1fr_360px]">
      <div className="flex flex-col gap-6">
        <Block className="h-8 w-2/3" />
        <Block className="h-4 w-1/3" />
        <Block className="h-48 w-full" />
        <Block className="h-64 w-full" />
      </div>
      <Block className="h-80 w-full" />
    </div>
  </div>
);
