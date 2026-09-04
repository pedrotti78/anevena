import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/anevena/Layout";
import { CatalogBrowser } from "@/components/anevena/CatalogBrowser";
import type { Categoria } from "@/lib/catalog";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/produtos")({
  validateSearch: (search: Record<string, unknown>) => ({
    categoria: (search["categoria"] as Categoria | undefined) ?? undefined,
  }),
  head: () => ({
    meta: [
      { title: "Catálogo de mudas e plântulas | Anevena" },
      {
        name: "description",
        content:
          "Mudas nativas, frutíferas e plantas ornamentais em atacado. Plântulas in vitro e plantas aclimatadas com disponibilidade e prazo por lote.",
      },
      { property: "og:title", content: "Catálogo de mudas e plântulas | Anevena" },
      {
        property: "og:description",
        content: "Ornamentais, frutíferas e nativas com disponibilidade e prazo por lote.",
      },
      { property: "og:url", content: "/produtos" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/produtos" }],
  }),
  component: Produtos,
});

function Produtos() {
  const { categoria } = Route.useSearch();
  const { t } = useI18n();

  return (
    <Layout>
      <PageHeader
        eyebrow={t.produtos.eyebrow}
        title={t.produtos.title}
        description={t.produtos.description}
      />
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <CatalogBrowser mode="cards" initialCategoria={categoria ?? null} />
      </div>
    </Layout>
  );
}
