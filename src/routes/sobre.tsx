import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/anevena/Layout";
import { VMark } from "@/components/anevena/Logo";
import logistics from "@/assets/logistics.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Anevena — abastecimento previsível de plantas" },
      {
        name: "description",
        content:
          "A Anevena conecta capacidade produtiva, disponibilidade e demanda para tornar o fornecimento profissional de plantas uma operação previsível.",
      },
      { property: "og:title", content: "Sobre a Anevena" },
      {
        property: "og:description",
        content: "A planta certa, no volume certo, no prazo combinado.",
      },
      { property: "og:url", content: "/sobre" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <Layout>
      <PageHeader eyebrow="Sobre" title="Abastecimento precisa funcionar." />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl space-y-5 text-base text-muted-foreground">
            <p>
              A Anevena nasceu para organizar uma relação que ainda depende demais de improviso: o
              abastecimento profissional de plantas.
            </p>
            <p>
              Conectamos capacidade produtiva, disponibilidade e demanda para entregar uma
              experiência comercial mais previsível.
            </p>
            <p className="text-foreground">
              Nossa função é simples de explicar e difícil de executar:
            </p>
            <ul className="space-y-2 border-l-2 border-lime pl-5 text-foreground">
              <li>a planta certa,</li>
              <li>no volume certo,</li>
              <li>no prazo combinado.</li>
            </ul>
            <div className="flex items-center gap-3 pt-4 text-sm tracking-[0.14em] text-foreground uppercase">
              <VMark className="h-4 w-4 text-lime" />
              Dois fluxos. Um compromisso.
            </div>
          </div>

          <img
            src={logistics}
            alt="Equipe carregando lotes uniformes de plantas para expedição"
            loading="lazy"
            width={1600}
            height={1008}
            className="aspect-[4/3] w-full border border-border object-cover"
          />
        </div>
      </div>
    </Layout>
  );
}
