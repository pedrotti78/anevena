import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/anevena/Layout";
import { VMark } from "@/components/anevena/Logo";
import { ConsultaForm } from "@/components/anevena/ConsultaForm";
import greenhouse from "@/assets/greenhouse.jpg";
import logistics from "@/assets/logistics.jpg";
import invitro from "@/assets/invitro.jpg";
import aclimatada from "@/assets/aclimatada.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anevena — Fornecimento profissional de plantas e plântulas" },
      {
        name: "description",
        content:
          "Fornecedor de mudas e plântulas in vitro em escala para viveiros, garden centers, paisagismo e projetos ambientais. Planta certa, volume certo, prazo combinado.",
      },
      { property: "og:title", content: "Anevena — Previsibilidade de abastecimento" },
      {
        property: "og:description",
        content:
          "Plantas e plântulas profissionais, no volume certo e no prazo combinado. Consulte disponibilidade.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <Hero />
      <Promessa />
      <Conceito />
      <Catalogo />
      <Formatos />
      <Escala />
      <ComoFuncionaResumo />
      <CtaComercial />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <img
        src={greenhouse}
        alt="Estufa comercial com lotes uniformes de plântulas em bandejas"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-32">
        <div className="flex items-center gap-3">
          <span className="converge-in-left h-px w-16 bg-lime lg:w-28" />
          <VMark className="h-5 w-5 text-lime" />
          <span className="converge-in-right h-px w-16 bg-lime lg:w-28" />
          <span className="eyebrow ml-2 text-navy-foreground/50">Dois fluxos. Um compromisso.</span>
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl lg:text-7xl">
          Previsibilidade que se planta.
          <span className="block text-lime">Confiança que se colhe.</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg text-navy-foreground/70">
          Plantas e plântulas profissionais, no volume certo e no prazo combinado.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contato"
            className="group inline-flex items-center justify-center gap-2 bg-lime px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-lime-foreground uppercase transition-colors hover:bg-lime/85"
          >
            <VMark className="h-3 w-3 -translate-x-1 transition-transform group-hover:translate-x-0" />
            Consultar disponibilidade
          </Link>
          <Link
            to="/produtos"
            className="inline-flex items-center justify-center border border-navy-foreground/25 px-6 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:border-lime hover:text-lime"
          >
            Conhecer o catálogo
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 text-[11px] font-semibold tracking-[0.18em] text-navy-foreground/60 uppercase lg:px-8">
          <span>Planta certa.</span>
          <span className="text-lime">•</span>
          <span>Volume certo.</span>
          <span className="text-lime">•</span>
          <span>Prazo combinado.</span>
        </div>
      </div>
    </section>
  );
}

const promessas = [
  {
    titulo: "Planta certa",
    texto: "Espécie, padrão e condição adequados ao pedido.",
  },
  {
    titulo: "Volume certo",
    texto: "Disponibilidade e capacidade compatíveis com sua demanda.",
  },
  {
    titulo: "Prazo combinado",
    texto: "Planejamento e logística tratados como compromisso.",
  },
];

function Promessa() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
          Abastecimento não deveria ser uma incerteza.
        </h2>
        <div className="space-y-4 text-base text-muted-foreground">
          <p>
            Quem depende de plantas para produzir, revender ou executar um projeto não pode
            descobrir na última hora que o lote não está disponível.
          </p>
          <p>A Anevena organiza o abastecimento para reduzir essa incerteza.</p>
        </div>
      </div>

      <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
        {promessas.map((p, i) => (
          <div
            key={p.titulo}
            className="group bg-card p-8 transition-transform hover:-translate-y-1 lg:p-10"
          >
            <span className="tabular eyebrow text-lime-foreground/40">0{i + 1}</span>
            <h3 className="mt-6 text-xl font-semibold tracking-tight uppercase">{p.titulo}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.texto}</p>
            <VMark className="mt-8 h-4 w-4 text-lime opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 border border-border bg-secondary px-6 py-5">
        <VMark className="h-4 w-4 shrink-0 text-lime" />
        <p className="text-sm font-semibold tracking-[0.14em] uppercase">Chegar viva</p>
        <p className="text-sm text-muted-foreground">
          A qualidade da entrega também faz parte do produto.
        </p>
      </div>
    </section>
  );
}

function Conceito() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-lime">Conceito Anevena</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
              Dois fluxos.
              <span className="block text-lime">Um compromisso.</span>
            </h2>
            <div className="mt-7 max-w-lg space-y-4 text-base text-navy-foreground/65">
              <p>
                A Anevena existe no ponto onde capacidade de produção encontra necessidade de
                mercado.
              </p>
              <p>
                É nesse encontro que disponibilidade, volume e prazo precisam convergir. O V central
                da nossa marca representa exatamente esse compromisso.
              </p>
            </div>
          </div>

          <div className="border border-navy-foreground/12 bg-navy-deep p-8 lg:p-12">
            <div className="flex items-center justify-center gap-2 text-3xl font-semibold tracking-[0.1em] sm:text-4xl">
              <span>ANE</span>
              <VMark className="h-8 w-8 text-lime sm:h-10 sm:w-10" />
              <span>ENA</span>
            </div>

            <div className="mt-10 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
              <div className="text-right">
                <p className="eyebrow text-navy-foreground/45">Produção</p>
                <div className="relative mt-3 h-px overflow-hidden bg-navy-foreground/15">
                  <span className="flow-line-right absolute inset-y-0 left-0 w-1/3 bg-lime" />
                </div>
              </div>
              <VMark className="h-6 w-6 shrink-0 text-lime" />
              <div>
                <p className="eyebrow text-navy-foreground/45">Cliente</p>
                <div className="relative mt-3 h-px overflow-hidden bg-navy-foreground/15">
                  <span className="flow-line-left absolute inset-y-0 right-0 w-1/3 bg-lime" />
                </div>
              </div>
            </div>

            <p className="mt-10 text-center text-[11px] font-semibold tracking-[0.18em] text-navy-foreground/45 uppercase">
              Produção → V ← Cliente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const categoriasHome = [
  {
    nome: "Ornamentais",
    para: "Garden centers, paisagistas, viveiristas e revendedores.",
    cta: "Ver ornamentais",
  },
  {
    nome: "Frutíferas",
    para: "Produtores, viveiristas e projetos comerciais.",
    cta: "Ver frutíferas",
  },
  {
    nome: "Nativas",
    para: "Restauração florestal, compensação ambiental, paisagismo e projetos ambientais.",
    cta: "Ver nativas",
  },
];

function Catalogo() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <h2 className="text-3xl font-semibold sm:text-4xl">O que você precisa plantar?</h2>

      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
        {categoriasHome.map((c) => (
          <Link
            key={c.nome}
            to="/produtos"
            search={{ categoria: c.nome }}
            className="group bg-card p-8 transition-transform hover:-translate-y-1 lg:p-10"
          >
            <h3 className="text-2xl font-semibold tracking-tight uppercase">{c.nome}</h3>
            <p className="mt-4 text-sm text-muted-foreground">{c.para}</p>
            <span className="mt-10 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase">
              <VMark className="h-3 w-3 text-lime transition-transform group-hover:translate-y-0.5" />
              {c.cta}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Formatos() {
  const itens = [
    {
      img: invitro,
      titulo: "Plântula in vitro",
      texto: "Para clientes que realizam sua própria aclimatação.",
      publico: ["Viveiristas", "Produtores", "Operações profissionais"],
    },
    {
      img: aclimatada,
      titulo: "Planta aclimatada",
      texto: "Produto preparado para continuidade do cultivo ou revenda.",
      publico: ["Garden centers", "Paisagistas", "Revendedores", "Projetos"],
    },
  ];

  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow text-muted-foreground">Formatos de entrega</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {itens.map((i) => (
            <article key={i.titulo} className="border border-border bg-card">
              <img
                src={i.img}
                alt={i.titulo}
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-7">
                <h3 className="text-xl font-semibold tracking-tight uppercase">{i.titulo}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{i.texto}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {i.publico.map((p) => (
                    <li
                      key={p}
                      className="border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const indicadores = [
  { valor: "—", unidade: "mil", label: "plantas em programação" },
  { valor: "—", unidade: "", label: "espécies disponíveis" },
  { valor: "—", unidade: "", label: "lotes ativos" },
  { valor: "—", unidade: "dias", label: "prazo médio" },
];

function Escala() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-end">
        <h2 className="text-3xl font-semibold sm:text-4xl">Operação em escala.</h2>
        <p className="text-sm text-muted-foreground">
          Indicadores operacionais em consolidação. Os dados abaixo são atualizados conforme a
          programação de abastecimento vigente.
        </p>
      </div>

      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {indicadores.map((i) => (
          <div key={i.label} className="bg-card p-8">
            <p className="tabular text-5xl font-semibold text-navy">
              {i.valor}
              {i.unidade && (
                <span className="ml-2 text-lg font-medium text-muted-foreground">{i.unidade}</span>
              )}
            </p>
            <p className="mt-4 text-xs tracking-[0.12em] text-muted-foreground uppercase">
              {i.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ComoFuncionaResumo() {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <img
        src={logistics}
        alt="Expedição de lotes de plantas em doca de carregamento"
        loading="lazy"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative bg-navy/88">
        <div className="mx-auto max-w-7xl px-5 py-20 text-navy-foreground lg:px-8 lg:py-28">
          <p className="eyebrow text-lime">Como funciona</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Do pedido à expedição, um processo com etapas visíveis.
          </h2>
          <Link
            to="/como-funciona"
            className="mt-10 inline-flex items-center gap-2 border border-navy-foreground/25 px-6 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:border-lime hover:text-lime"
          >
            <VMark className="h-3 w-3 text-lime" />
            Ver as cinco etapas
          </Link>
        </div>
      </div>
    </section>
  );
}

function CtaComercial() {
  return (
    <section id="consulta" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <h2 className="text-3xl font-semibold sm:text-5xl">Qual é a sua próxima necessidade?</h2>
            <p className="mt-6 max-w-md text-base text-navy-foreground/65">
              Informe espécie, quantidade e prazo. Nós verificamos a melhor programação de
              abastecimento.
            </p>
          </div>
          <ConsultaForm />
        </div>
      </div>
    </section>
  );
}
