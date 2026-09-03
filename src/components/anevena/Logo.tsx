import logo from "@/assets/anevena-logo.png.asset.json";

export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Anevena — planta certa, volume certo, prazo combinado"
      className={className}
      width={480}
      height={120}
    />
  );
}

export function VMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 6 L12 18 L21 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  );
}
