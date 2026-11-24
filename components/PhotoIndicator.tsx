interface PhotoIndicatorProps {
  total: number;
  current: number;
}

export const PhotoIndicator = ({ total, current }: PhotoIndicatorProps) => (
  <div className="flex gap-1.5">
    {Array.from({ length: total }, (_, i) => (
      <span
        key={i}
        className={`h-1.5 w-1.5 rounded-full ${i === current ? "bg-white" : "bg-white/50"}`}
      />
    ))}
    <span className="sr-only">
      Foto {current + 1} de {total}
    </span>
  </div>
);
