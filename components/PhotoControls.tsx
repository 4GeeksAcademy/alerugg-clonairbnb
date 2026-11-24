import { PhotoIndicator } from "@/components/PhotoIndicator";

interface PhotoControlsProps {
  total: number;
  current: number;
  onPrevious: () => void;
  onNext: () => void;
}

const arrowClass =
  "absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-[#222222] shadow";

export const PhotoControls = ({ total, current, onPrevious, onNext }: PhotoControlsProps) => {
  if (total <= 1) return null;

  return (
    <>
      <button type="button" onClick={onPrevious} aria-label="Foto anterior" className={`${arrowClass} left-2`}>
        ‹
      </button>
      <button type="button" onClick={onNext} aria-label="Foto siguiente" className={`${arrowClass} right-2`}>
        ›
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <PhotoIndicator total={total} current={current} />
      </div>
    </>
  );
};
