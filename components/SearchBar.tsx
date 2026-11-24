"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="w-full">
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Buscar por título o ubicación"
      aria-label="Buscar alojamientos"
      className="w-full rounded-full border border-line px-5 py-3 text-sm text-ink shadow-search placeholder:text-ink-muted transition-shadow hover:shadow-float focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
    />
  </div>
);
