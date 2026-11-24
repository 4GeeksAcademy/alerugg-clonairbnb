import Link from "next/link";

export const BackToCatalogButton = () => (
  <Link
    href="/catalog"
    className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[#222222] transition-colors hover:bg-[#F7F7F7]"
  >
    ← Volver al catálogo
  </Link>
);
