
export const PropertyCardSkeleton = () => (
  <div className="flex flex-col gap-3" aria-hidden="true">
    <div className="aspect-square animate-pulse rounded-card bg-surface" />
    <div className="mt-1 h-4 w-3/4 animate-pulse rounded bg-surface" />
    <div className="h-3 w-1/2 animate-pulse rounded bg-surface" />
    <div className="mt-1 h-4 w-1/3 animate-pulse rounded bg-surface" />
  </div>
);

