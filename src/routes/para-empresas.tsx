import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/anevena/Layout";
import { VMark } from "@/components/anevena/Logo";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/para-empresas")({
  head: () => ({
    meta: [
      { title: "Para viveiros, garden centers e projetos ambientais | Anevena" },
      {
        name: "description",
        content:
          "Fornecimento de mudas para viveiristas, garden centers, paisagistas e projetos de restauração ambiental, com volume e prazo definidos.",
      },
      { property: "og:title", content: "Para empresas | Anevena" },
      {
        property: "og:description",
        content: "Abastecimento profissional para quem compra plantas em volume.",
      },
      { property: "og:url", content: "/para-empresas" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/para-empresas" }],
  }),
  component: ParaEmpresas,
});

function ParaEmpresas() {
  const { t } = useI18n();

  return (
    <Layout>
      <PageHeader
        eyebrow={t.paraEmpresas.eyebrow}
        title={t.paraEmpresas.title}
        description={t.paraEmpresas.description}
      />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {t.paraEmpresas.publicos.map((p) => (
            <div
              key={p.titulo}
              className="group bg-card p-8 transition-transform hover:-translate-y-1 lg:p-10"
            >
              <VMark className="h-4 w-4 text-lime" />
              <h2 className="mt-6 text-xl font-semibold tracking-tight uppercase">{p.titulo}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.texto}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.valoriza.map((v) => (
                  <li
                    key={v}
                    className="border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border border-border bg-navy p-8 text-navy-foreground lg:p-10">
          <p className="max-w-md text-lg">{t.paraEmpresas.ctaTexto}</p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-lime px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-lime-foreground uppercase"
          >
            <VMark className="h-3 w-3" />
            {t.common.consultarDisponibilidade}
          </Link>
        </div>
      </div>
    </Layout>
  );
}
