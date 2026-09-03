import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/anevena/Layout";

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
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Termos de Uso" />
      <div className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-sm text-muted-foreground lg:px-8 lg:py-24">
        <p>
          As informações de disponibilidade, volume e prazo apresentadas neste site são
          indicativas e estão sujeitas a confirmação comercial.
        </p>
        <p>
          O envio de uma consulta não constitui pedido, reserva de lote ou compromisso de
          fornecimento. Condições comerciais são formalizadas em proposta específica.
        </p>
        <p>
          Conteúdo, marca e materiais deste site pertencem à Anevena e não podem ser reproduzidos
          sem autorização.
        </p>
      </div>
    </Layout>
  );
}
