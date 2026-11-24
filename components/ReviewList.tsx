import { Review } from "@/types";

interface ReviewListProps {
  reviews: Review[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => (
  <ul className="grid gap-6 sm:grid-cols-2">
    {reviews.map((review) => (
      <li key={review.id} className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EBEBEB] font-semibold text-[#222222]">
            {review.authorName.charAt(0)}
          </span>
          <div>
            <p className="font-semibold text-[#222222]">{review.authorName}</p>
            <p className="text-sm text-[#717171]">{review.date}</p>
          </div>
        </div>
        <p className="text-sm text-[#222222]">★ {review.rating.toFixed(1)}</p>
        <p className="text-sm leading-relaxed text-[#222222]">{review.comment}</p>
      </li>
    ))}
  </ul>
);
