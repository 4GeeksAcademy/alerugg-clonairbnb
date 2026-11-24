"use client";

import { useEffect, useState } from "react";

interface ShareButtonProps {
  title: string;
}

const FEEDBACK_DURATION_MS = 2000;

export const ShareButton = ({ title }: ShareButtonProps) => {
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    if (feedback === null) return;
    const timeoutId = setTimeout(() => setFeedback(null), FEEDBACK_DURATION_MS);
    return () => clearTimeout(timeoutId);
  }, [feedback]);

  const handleShare = async () => {
    const url = window.location.href;

    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, url });
      } catch {
        // El usuario ha cancelado la acción de compartir.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setFeedback("Enlace copiado");
    } catch {
      setFeedback("No se pudo copiar el enlace");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={handleShare}
        className="rounded-full border border-[#EBEBEB] px-4 py-2 text-sm font-medium text-[#222222] transition-colors hover:bg-[#F7F7F7]"
      >
        Compartir
      </button>
      {feedback && (
        <span className="text-sm text-[#717171]" role="status">
          {feedback}
        </span>
      )}
    </div>
  );
};
