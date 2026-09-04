import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo, VMark } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const nav = [
    { to: "/produtos", label: t.nav.produtos },
    { to: "/disponibilidade", label: t.nav.disponibilidade },
    { to: "/como-funciona", label: t.nav.comoFunciona },
    { to: "/para-empresas", label: t.nav.paraEmpresas },
    { to: "/sobre", label: t.nav.sobre },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white text-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <Logo variant="color" className="h-6 w-auto sm:h-7" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              {...(n.to === "/produtos" ? { search: { categoria: undefined } } : {})}
              className="text-sm text-navy/70 transition-colors hover:text-navy"
              activeProps={{ className: "text-lime" }}
            >
              {n.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            to="/contato"
            className="group inline-flex items-center gap-2 bg-lime px-4 py-2.5 text-[11px] font-semibold tracking-[0.14em] text-lime-foreground uppercase transition-colors hover:bg-lime/85"
          >
            <VMark className="h-3 w-3 -translate-x-1 transition-transform group-hover:translate-x-0" />
            {t.nav.cta}
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 p-1 text-navy"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-navy/10 bg-white px-5 pt-2 pb-5 lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              {...(n.to === "/produtos" ? { search: { categoria: undefined } } : {})}
              onClick={() => setOpen(false)}
              className="block border-b border-navy/10 py-3.5 text-sm text-navy/85"
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
            {t.nav.cta}
          </Link>
        </nav>
      )}
    </header>
  );
}
