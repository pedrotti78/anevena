import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/anevena/Layout";
import { CatalogBrowser } from "@/components/anevena/CatalogBrowser";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/disponibilidade")({
  head: () => ({
    meta: [
      { title: "Disponibilidade de mudas em escala | Anevena" },
      {
        name: "description",
        content:
          "Consulte o que está disponível agora: espécie, formato, volume e prazo estimado de fornecimento de mudas e plântulas.",
      },
      { property: "og:title", content: "O que está disponível agora | Anevena" },
      {
        property: "og:description",
        content: "Espécie, categoria, formato, disponibilidade e prazo em uma única tabela.",
      },
      { property: "og:url", content: "/disponibilidade" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/disponibilidade" }],
  }),
  component: Disponibilidade,
});

function Disponibilidade() {
  const { t } = useI18n();

  return (
    <Layout>
      <PageHeader
        eyebrow={t.disponibilidade.eyebrow}
        title={t.disponibilidade.title}
        description={t.disponibilidade.description}
      />
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <CatalogBrowser mode="tabela" />
      </div>
    </Layout>
  );
}
