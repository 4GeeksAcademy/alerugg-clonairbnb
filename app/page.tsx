import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { HomeListing } from "@/components/HomeListing";
import { Navbar } from "@/components/Navbar";
import { categories } from "@/data/categories";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "WorldBooking | Alojamientos",
  description: "Encuentra alojamientos y explora categorías en Clonairbnb.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeListing categories={categories} properties={properties} />
      <Footer />
    </>
  );
}
