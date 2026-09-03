import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "@/components/anevena/Layout";

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
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Política de Privacidade" />
      <div className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-sm text-muted-foreground lg:px-8 lg:py-24">
        <p>
          Os dados informados no formulário de consulta são utilizados exclusivamente para
          atendimento comercial: verificação de disponibilidade, elaboração de proposta e contato.
        </p>
        <p>
          Não comercializamos dados de contato. As informações são mantidas apenas pelo tempo
          necessário ao relacionamento comercial.
        </p>
        <p>
          Para solicitar correção ou exclusão dos seus dados, escreva para
          comercial@anevena.com.br.
        </p>
      </div>
    </Layout>
  );
}
