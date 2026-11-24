import type { Metadata } from "next";
import { CatalogListing } from "@/components/CatalogListing";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Clonairbnb | Catálogo",
  description: "Explora el catálogo completo de alojamientos en Clonairbnb.",
};

export default function CatalogPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-6 py-6 md:px-10">
        <CatalogListing properties={properties} />
      </main>
      <Footer />
    </>
  );
}
