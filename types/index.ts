export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface Service {
  id: string;
  label: string;
  icon: string;
}

export interface Host {
  id: string;
  name: string;
  yearsHosting: number;
  isSuperhost: boolean;
}

export interface Review {
  id: string;
  propertyId: string;
  authorName: string;
  date: string;
  rating: number;
  comment: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  description: string;
  pricePerNight: number;
  photos: string[];
  additionalPhotos: string[];
  host: Host;
  serviceIds: string[];
  categoryIds: string[];
}

export type SortOrder = "default" | "price-asc" | "price-desc";
