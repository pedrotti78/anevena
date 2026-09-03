import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo, VMark } from "./Logo";

const nav = [
  { to: "/produtos", label: "Produtos" },
  { to: "/disponibilidade", label: "Disponibilidade" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/para-empresas", label: "Para empresas" },
  { to: "/sobre", label: "Sobre" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/15 bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <Logo variant="white" className="h-6 w-auto sm:h-7" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-navy-foreground/75 transition-colors hover:text-lime"
              activeProps={{ className: "text-lime" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="group inline-flex items-center gap-2 bg-lime px-4 py-2.5 text-[11px] font-semibold tracking-[0.14em] text-lime-foreground uppercase transition-colors hover:bg-lime/85"
          >
            <VMark className="h-3 w-3 -translate-x-1 transition-transform group-hover:translate-x-0" />
            Consultar disponibilidade
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 p-1 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy-foreground/10 px-5 pt-2 pb-5 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block border-b border-navy-foreground/10 py-3.5 text-sm text-navy-foreground/85"
              activeProps={{ className: "text-lime" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="mt-5 block bg-lime px-4 py-3.5 text-center text-[11px] font-semibold tracking-[0.14em] text-lime-foreground uppercase"
          >
            Consultar disponibilidade
          </Link>
        </nav>
      )}
    </header>
  );
}
