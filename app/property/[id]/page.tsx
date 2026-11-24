import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackToCatalogButton } from "@/components/BackToCatalogButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PropertyDetailContainer } from "@/components/PropertyDetailContainer";
import { properties } from "@/data/properties";
import { reviews } from "@/data/reviews";
import { services } from "@/data/services";

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export const instant = false;

export const generateStaticParams = () => properties.map((property) => ({ id: property.id }));

export const generateMetadata = async ({ params }: PropertyPageProps): Promise<Metadata> => {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);

  if (!property) return { title: "Alojamiento no encontrado | Clonairbnb" };

  return {
    title: `${property.title} | Clonairbnb`,
    description: property.description,
  };
};

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);

  if (!property) notFound();

  const propertyReviews = reviews.filter((review) => review.propertyId === property.id);
  const propertyServices = services.filter((service) => property.serviceIds.includes(service.id));

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-6 md:px-10">
        <div className="mb-4">
          <BackToCatalogButton />
        </div>
        <PropertyDetailContainer
          key={property.id}
          property={property}
          reviews={propertyReviews}
          services={propertyServices}
        />
      </main>
      <Footer />
    </div>
  );
}
