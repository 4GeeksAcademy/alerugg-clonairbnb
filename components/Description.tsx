interface DescriptionProps {
  text: string;
}

export const Description = ({ text }: DescriptionProps) => (
  <div className="flex flex-col gap-3">
    <h2 className="text-xl font-semibold text-[#222222]">Descripción</h2>
    <p className="whitespace-pre-line leading-relaxed text-[#222222]">{text}</p>
  </div>
);
