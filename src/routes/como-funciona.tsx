import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/anevena/Layout";
import { VMark } from "@/components/anevena/Logo";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Como funciona o fornecimento | Anevena" },
      {
        name: "description",
        content:
          "Consulte, planeje, confirme, acompanhe e receba: as cinco etapas do fornecimento de mudas em escala com prazo combinado.",
      },
      { property: "og:title", content: "Como funciona o fornecimento | Anevena" },
      {
        property: "og:description",
        content: "Cinco etapas para transformar abastecimento de plantas em operação previsível.",
      },
      { property: "og:url", content: "/como-funciona" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/como-funciona" }],
  }),
  component: ComoFunciona,
});

function ComoFunciona() {
  const { t } = useI18n();
  const etapas = t.comoFunciona.etapas;

  return (
    <Layout>
      <PageHeader
        eyebrow={t.comoFunciona.eyebrow}
        title={t.comoFunciona.title}
        description={t.comoFunciona.description}
      />

      <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-24">
        <ol>
          {etapas.map((e, i) => (
            <li key={e.titulo}>
              <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-6 border border-border bg-card p-6 transition-transform hover:-translate-y-0.5 lg:p-8">
                <span className="tabular text-3xl font-semibold text-lime-foreground/25">
                  0{i + 1}
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-semibold tracking-tight uppercase">{e.titulo}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{e.texto}</p>
                </div>
              </div>
              {i < etapas.length - 1 && (
                <div className="flex justify-center py-3">
                  <VMark className="h-4 w-4 text-lime" />
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-14 border border-border bg-secondary p-8 text-center">
          <p className="text-base font-medium">{t.comoFunciona.ctaTexto}</p>
          <Link
            to="/contato"
            className="mt-6 inline-flex items-center gap-2 bg-lime px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-lime-foreground uppercase"
          >
            <VMark className="h-3 w-3" />
            {t.common.consultarDisponibilidade}
          </Link>
        </div>
      </div>
    </Layout>
  );
}
