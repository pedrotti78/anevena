import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/anevena/Layout";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Anevena" },
      { name: "description", content: "Condições de uso do site institucional da Anevena." },
      { property: "og:title", content: "Termos de Uso | Anevena" },
      { property: "og:description", content: "Condições de uso do site da Anevena." },
      { property: "og:url", content: "/termos" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: Termos,
});

function Termos() {
  const { t } = useI18n();

  return (
    <Layout>
      <PageHeader eyebrow={t.termos.eyebrow} title={t.termos.title} />
      <div className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-sm text-muted-foreground lg:px-8 lg:py-24">
        <p>{t.termos.p1}</p>
        <p>{t.termos.p2}</p>
        <p>{t.termos.p3}</p>
      </div>
    </Layout>
  );
}
