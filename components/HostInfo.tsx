import { Host } from "@/types";

interface HostInfoProps {
  host: Host;
}

export const HostInfo = ({ host }: HostInfoProps) => (
  <div className="flex items-center gap-4 border-y border-[#EBEBEB] py-6">
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EBEBEB] text-xl font-semibold text-[#222222]">
      {host.name.charAt(0)}
    </span>
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold text-[#222222]">Anfitrión: {host.name}</h2>
      <p className="text-sm text-[#717171]">
        {host.yearsHosting} {host.yearsHosting === 1 ? "año" : "años"} alojando
        {host.isSuperhost && " · Superanfitrión"}
      </p>
    </div>
  </div>
);
