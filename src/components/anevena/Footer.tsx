import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { WHATSAPP_DEFAULT_MSG, whatsappLink } from "@/lib/catalog";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_auto_auto]">
          <div>
            <Logo className="h-7 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-xs text-sm text-navy-foreground/60">
              Planta certa. Volume certo. Prazo combinado.
            </p>
          </div>

          <div>
            <p className="eyebrow text-lime">Navegação</p>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
              <li>
                <Link to="/produtos" search={{ categoria: undefined }} className="hover:text-lime">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/disponibilidade" className="hover:text-lime">
                  Disponibilidade
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="hover:text-lime">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-lime">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-lime">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-lime">Contato comercial</p>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
              <li>
                <a href={whatsappLink(WHATSAPP_DEFAULT_MSG)} className="hover:text-lime">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:comercial@anevena.com.br" className="hover:text-lime">
                  comercial@anevena.com.br
                </a>
              </li>
              <li className="text-navy-foreground/45">Instagram — em breve</li>
              <li className="text-navy-foreground/45">LinkedIn — em breve</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/45">
          <p>© {new Date().getFullYear()} Anevena</p>
          <div className="flex gap-6">
            <Link to="/termos" className="hover:text-lime">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="hover:text-lime">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
