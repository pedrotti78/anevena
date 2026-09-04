import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/anevena/Layout";
import { VMark } from "@/components/anevena/Logo";
import { ConsultaForm } from "@/components/anevena/ConsultaForm";
import { categorias } from "@/lib/catalog";
import { useI18n } from "@/lib/i18n";
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
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <img
        src={greenhouse}
        alt={t.home.heroAlt}
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-32">
        <div className="flex items-center gap-3">
          <span className="converge-in-left h-px w-16 bg-lime lg:w-28" />
          <VMark className="h-5 w-5 text-lime" />
          <span className="converge-in-right h-px w-16 bg-lime lg:w-28" />
          <span className="eyebrow ml-2 text-navy-foreground/50">{t.common.doisFluxos}</span>
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl lg:text-7xl">
          {t.home.heroTitle1}
          <span className="block text-lime">{t.home.heroTitle2}</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg text-navy-foreground/70">{t.home.heroSub}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contato"
            className="group inline-flex items-center justify-center gap-2 bg-lime px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-lime-foreground uppercase transition-colors hover:bg-lime/85"
          >
            <VMark className="h-3 w-3 -translate-x-1 transition-transform group-hover:translate-x-0" />
            {t.common.consultarDisponibilidade}
          </Link>
          <Link
            to="/produtos"
            search={{ categoria: undefined }}
            className="inline-flex items-center justify-center border border-navy-foreground/25 px-6 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:border-lime hover:text-lime"
          >
            {t.home.heroCta2}
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 text-[11px] font-semibold tracking-[0.18em] text-navy-foreground/60 uppercase lg:px-8">
          <span>{t.home.tick1}</span>
          <span className="text-lime">•</span>
          <span>{t.home.tick2}</span>
          <span className="text-lime">•</span>
          <span>{t.home.tick3}</span>
        </div>
      </div>
    </section>
  );
}

function Promessa() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <h2 className="text-3xl font-semibold text-balance sm:text-4xl">{t.home.promessaTitle}</h2>
        <div className="space-y-4 text-base text-muted-foreground">
          <p>{t.home.promessaP1}</p>
          <p>{t.home.promessaP2}</p>
        </div>
      </div>

      <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
        {t.home.promessas.map((p, i) => (
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
        <p className="text-sm font-semibold tracking-[0.14em] uppercase">{t.home.chegarViva}</p>
        <p className="text-sm text-muted-foreground">{t.home.chegarVivaTexto}</p>
      </div>
    </section>
  );
}

function Conceito() {
  const { t } = useI18n();

  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-lime">{t.home.conceitoEyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
              {t.home.conceitoTitle1}
              <span className="block text-lime">{t.home.conceitoTitle2}</span>
            </h2>
            <div className="mt-7 max-w-lg space-y-4 text-base text-navy-foreground/65">
              <p>{t.home.conceitoP1}</p>
              <p>{t.home.conceitoP2}</p>
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
                <p className="eyebrow text-navy-foreground/45">{t.home.producao}</p>
                <div className="relative mt-3 h-px overflow-hidden bg-navy-foreground/15">
                  <span className="flow-line-right absolute inset-y-0 left-0 w-1/3 bg-lime" />
                </div>
              </div>
              <VMark className="h-6 w-6 shrink-0 text-lime" />
              <div>
                <p className="eyebrow text-navy-foreground/45">{t.home.cliente}</p>
                <div className="relative mt-3 h-px overflow-hidden bg-navy-foreground/15">
                  <span className="flow-line-left absolute inset-y-0 right-0 w-1/3 bg-lime" />
                </div>
              </div>
            </div>

            <p className="mt-10 text-center text-[11px] font-semibold tracking-[0.18em] text-navy-foreground/45 uppercase">
              {t.home.fluxo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Catalogo() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <h2 className="text-3xl font-semibold sm:text-4xl">{t.home.catalogoTitle}</h2>

      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
        {categorias.map((c, i) => {
          const card = t.home.catalogoCards[i]!;
          return (
            <Link
              key={c}
              to="/produtos"
              search={{ categoria: c }}
              className="group bg-card p-8 transition-transform hover:-translate-y-1 lg:p-10"
            >
              <h3 className="text-2xl font-semibold tracking-tight uppercase">{t.categorias[c]}</h3>
              <p className="mt-4 text-sm text-muted-foreground">{card.para}</p>
              <span className="mt-10 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase">
                <VMark className="h-3 w-3 text-lime transition-transform group-hover:translate-y-0.5" />
                {card.cta}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Formatos() {
  const { t } = useI18n();
  const imgs = [invitro, aclimatada];
  const titulos = [t.formatos["Plântula in vitro"], t.formatos["Planta aclimatada"]];

  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow text-muted-foreground">{t.home.formatosEyebrow}</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {t.home.formatosItens.map((item, i) => (
            <article key={titulos[i]} className="border border-border bg-card">
              <img
                src={imgs[i]}
                alt={titulos[i]}
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-7">
                <h3 className="text-xl font-semibold tracking-tight uppercase">{titulos[i]}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.texto}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.publico.map((p) => (
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

function Escala() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-end">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t.home.escalaTitle}</h2>
        <p className="text-sm text-muted-foreground">{t.home.escalaTexto}</p>
      </div>

      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {t.home.indicadores.map((i) => (
          <div key={i.label} className="bg-card p-8">
            <p className="tabular text-5xl font-semibold text-navy">
              —
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
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden border-y border-border">
      <img
        src={logistics}
        alt={t.home.logisticaAlt}
        loading="lazy"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative bg-navy/88">
        <div className="mx-auto max-w-7xl px-5 py-20 text-navy-foreground lg:px-8 lg:py-28">
          <p className="eyebrow text-lime">{t.home.comoFuncionaEyebrow}</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
            {t.home.comoFuncionaTitle}
          </h2>
          <Link
            to="/como-funciona"
            className="mt-10 inline-flex items-center gap-2 border border-navy-foreground/25 px-6 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors hover:border-lime hover:text-lime"
          >
            <VMark className="h-3 w-3 text-lime" />
            {t.home.comoFuncionaCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

function CtaComercial() {
  const { t } = useI18n();

  return (
    <section id="consulta" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <h2 className="text-3xl font-semibold sm:text-5xl">{t.home.ctaTitle}</h2>
            <p className="mt-6 max-w-md text-base text-navy-foreground/65">{t.home.ctaTexto}</p>
          </div>
          <ConsultaForm />
        </div>
      </div>
    </section>
  );
}
