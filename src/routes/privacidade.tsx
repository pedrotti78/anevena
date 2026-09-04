import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/anevena/Layout";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Anevena" },
      {
        name: "description",
        content: "Como a Anevena trata os dados enviados em consultas comerciais.",
      },
      { property: "og:title", content: "Política de Privacidade | Anevena" },
      { property: "og:description", content: "Tratamento de dados em consultas comerciais." },
      { property: "og:url", content: "/privacidade" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: Privacidade,
});

function Privacidade() {
  const { t } = useI18n();

  return (
    <Layout>
      <PageHeader eyebrow={t.privacidade.eyebrow} title={t.privacidade.title} />
      <div className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-sm text-muted-foreground lg:px-8 lg:py-24">
        <p>{t.privacidade.p1}</p>
        <p>{t.privacidade.p2}</p>
        <p>{t.privacidade.p3}</p>
      </div>
    </Layout>
  );
}
