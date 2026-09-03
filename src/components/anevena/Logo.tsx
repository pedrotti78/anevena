import logoColor from "@/assets/anevena-logo-transparent.png";
import logoWhite from "@/assets/anevena-logo-white.png";

export function Logo({
  className = "h-7",
  variant = "color",
}: {
  className?: string;
  variant?: "color" | "white";
}) {
  return (
    <img
      src={variant === "white" ? logoWhite : logoColor}
      alt="Anevena — planta certa, volume certo, prazo combinado"
      className={className}
      width={1625}
      height={326}
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
