import { Review } from "@/types";

interface ReviewsSummaryProps {
  reviews: Review[];
  variant: "inline" | "section";
}

export const ReviewsSummary = ({ reviews, variant }: ReviewsSummaryProps) => {
  const count = reviews.length;
  const average =
    count > 0 ? (reviews.reduce((sum, review) => sum + review.rating, 0) / count).toFixed(1) : null;

  if (variant === "inline") {
    return (
      <p className="text-sm text-[#222222]">
        {average ? (
          <>
            ★ <span className="font-semibold">{average}</span> · {count} reseñas
          </>
        ) : (
          "Sin reseñas todavía"
        )}
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold text-[#222222]">
        {average ? `★ ${average} · ${count} reseñas` : "Sin reseñas todavía"}
      </h2>
    </div>
  );
};
