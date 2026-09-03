import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/anevena/Layout";
import { CatalogBrowser } from "@/components/anevena/CatalogBrowser";

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
  return (
    <Layout>
      <PageHeader
        eyebrow="Programação vigente"
        title="O que está disponível agora."
        description="Volumes e prazos indicativos por lote. A confirmação é feita por consulta comercial."
      />
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <CatalogBrowser mode="tabela" />
      </div>
    </Layout>
  );
}
