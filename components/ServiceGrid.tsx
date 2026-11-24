import { Service } from "@/types";

interface ServiceGridProps {
  services: Service[];
}

export const ServiceGrid = ({ services }: ServiceGridProps) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-xl font-semibold text-[#222222]">Qué ofrece este alojamiento</h2>
    <ul className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => (
        <li key={service.id} className="flex items-center gap-3 text-[#222222]">
          <span className="text-2xl" aria-hidden="true">
            {service.icon}
          </span>
          <span>{service.label}</span>
        </li>
      ))}
    </ul>
  </div>
);
