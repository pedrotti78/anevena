import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/anevena/Layout";
import { ConsultaForm } from "@/components/anevena/ConsultaForm";
import { VMark } from "@/components/anevena/Logo";
import { whatsappLink } from "@/lib/catalog";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Consultar disponibilidade de mudas | Anevena" },
      {
        name: "description",
        content:
          "Informe espécie, quantidade e prazo desejado. A equipe comercial da Anevena verifica a melhor programação de abastecimento.",
      },
      { property: "og:title", content: "Consultar disponibilidade | Anevena" },
      {
        property: "og:description",
        content: "Espécie, quantidade e prazo: verificamos a melhor programação de abastecimento.",
      },
      { property: "og:url", content: "/contato" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  const { t } = useI18n();

  return (
    <Layout>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <p className="eyebrow text-lime">{t.contato.eyebrow}</p>
              <h1 className="mt-5 text-3xl font-semibold sm:text-5xl">{t.contato.title}</h1>
              <p className="mt-6 max-w-md text-base text-navy-foreground/65">{t.contato.texto}</p>

              <a
                href={whatsappLink(t.whatsapp.padrao)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 border border-navy-foreground/25 px-6 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:border-lime hover:text-lime"
              >
                <VMark className="h-3 w-3 text-lime" />
                {t.common.falarComAnevena}
              </a>
            </div>

            <ConsultaForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
