import type { Status } from "@/lib/catalog";

const map: Record<Status, string> = {
  Disponível: "border-lime bg-lime/15 text-graphite",
  "Sob consulta": "border-border bg-secondary text-muted-foreground",
  "Programação futura": "border-navy/20 bg-transparent text-navy/70",
};

export function StatusTag({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center border px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase ${map[status]}`}
    >
      {status}
    </span>
  );
}
