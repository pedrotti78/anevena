import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  categorias,
  formatos,
  produtos,
  statusList,
  whatsappLink,
  type Categoria,
  type Formato,
  type Status,
} from "@/lib/catalog";
import { StatusTag } from "./StatusTag";
import { VMark } from "./Logo";
import { useI18n } from "@/lib/i18n";

type Mode = "cards" | "tabela";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-3 py-2 text-xs transition-colors ${
        active
          ? "border-navy bg-navy text-navy-foreground"
          : "border-border bg-card text-muted-foreground hover:border-navy/40"
      }`}
    >
      {children}
    </button>
  );
}

export function CatalogBrowser({
  mode = "cards",
  initialCategoria = null,
}: {
  mode?: Mode;
  initialCategoria?: Categoria | null;
}) {
  const { t, qtd, prazo, nomeProduto } = useI18n();
  const [busca, setBusca] = useState("");
  const [cat, setCat] = useState<Categoria | null>(initialCategoria);
  const [fmt, setFmt] = useState<Formato | null>(null);
  const [st, setSt] = useState<Status | null>(null);
  const [minQtd, setMinQtd] = useState("");
  const [maxPrazo, setMaxPrazo] = useState("");

  const lista = useMemo(() => {
    const q = busca.trim().toLowerCase();
    const min = Number(minQtd) || 0;
    const prazoMax = Number(maxPrazo) || Infinity;
    return produtos.filter((p) => {
      if (
        q &&
        !`${p.nome} ${nomeProduto(p.slug, p.nome)} ${p.cientifico}`.toLowerCase().includes(q)
      )
        return false;
      if (cat && p.categoria !== cat) return false;
      if (fmt && p.formato !== fmt) return false;
      if (st && p.status !== st) return false;
      if (min && (p.disponibilidade ?? 0) < min) return false;
      if (prazoMax !== Infinity && (p.prazoDias ?? Infinity) > prazoMax) return false;
      return true;
    });
  }, [busca, cat, fmt, st, minQtd, maxPrazo, nomeProduto]);

  return (
    <div>
      <div className="border border-border bg-card p-5 lg:p-6">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder={t.catalogo.buscaPlaceholder}
            aria-label={t.catalogo.buscaLabel}
            className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex flex-wrap gap-2">
            <Chip
              active={!cat && !fmt && !st}
              onClick={() => {
                setCat(null);
                setFmt(null);
                setSt(null);
              }}
            >
              {t.catalogo.todos}
            </Chip>
            {categorias.map((c) => (
              <Chip key={c} active={cat === c} onClick={() => setCat(cat === c ? null : c)}>
                {t.categorias[c]}
              </Chip>
            ))}
            {formatos.map((f) => (
              <Chip key={f} active={fmt === f} onClick={() => setFmt(fmt === f ? null : f)}>
                {t.formatos[f]}
              </Chip>
            ))}
            {statusList.map((s) => (
              <Chip key={s} active={st === s} onClick={() => setSt(st === s ? null : s)}>
                {t.status[s]}
              </Chip>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2 border border-border px-3 py-2 text-xs text-muted-foreground">
              {t.catalogo.qtdMinima}
              <input
                inputMode="numeric"
                value={minQtd}
                onChange={(e) => setMinQtd(e.target.value.replace(/\D/g, ""))}
                placeholder="0"
                className="tabular w-20 bg-transparent text-right text-foreground outline-none"
              />
            </label>
            <label className="flex items-center gap-2 border border-border px-3 py-2 text-xs text-muted-foreground">
              {t.catalogo.prazoAte}
              <input
                inputMode="numeric"
                value={maxPrazo}
                onChange={(e) => setMaxPrazo(e.target.value.replace(/\D/g, ""))}
                placeholder={t.catalogo.dias}
                className="tabular w-16 bg-transparent text-right text-foreground outline-none"
              />
            </label>
          </div>
        </div>
      </div>

      <p className="tabular mt-5 text-xs tracking-[0.12em] text-muted-foreground uppercase">
        {lista.length} {lista.length === 1 ? t.catalogo.resultado : t.catalogo.resultados}
      </p>

      {mode === "tabela" ? (
        <div className="mt-4">
          {/* Desktop: tabela técnica */}
          <table className="hidden w-full border-collapse border border-border bg-card text-left lg:table">
            <thead>
              <tr className="border-b border-border bg-secondary">
                {[
                  t.catalogo.thEspecie,
                  t.catalogo.thCategoria,
                  t.catalogo.thFormato,
                  t.catalogo.thDisponibilidade,
                  t.catalogo.thPrazo,
                  t.catalogo.thAcao,
                ].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3.5 text-[10px] font-semibold tracking-[0.14em] text-muted-foreground uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lista.map((p) => (
                <tr
                  key={p.slug}
                  className="border-b border-border last:border-0 hover:bg-secondary/60"
                >
                  <td className="px-5 py-4">
                    <span className="font-medium">{nomeProduto(p.slug, p.nome)}</span>
                    <span className="block text-xs text-muted-foreground italic">
                      {p.cientifico}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    {t.categorias[p.categoria]}
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">{t.formatos[p.formato]}</td>
                  <td className="tabular px-5 py-4 text-sm font-medium">
                    {qtd(p.disponibilidade)}
                  </td>
                  <td className="tabular px-5 py-4 text-sm">{prazo(p.prazoDias)}</td>
                  <td className="px-5 py-4">
                    <a
                      href={whatsappLink(
                        t.whatsapp.produto(
                          nomeProduto(p.slug, p.nome),
                          p.disponibilidade ?? 1000,
                        ),
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] text-navy uppercase hover:text-lime-foreground"
                    >
                      <VMark className="h-3 w-3 text-lime" />
                      {t.catalogo.consultar}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile: cards */}
          <div className="grid gap-3 lg:hidden">
            {lista.map((p) => (
              <ProdutoCard key={p.slug} slug={p.slug} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lista.map((p) => (
            <ProdutoCard key={p.slug} slug={p.slug} />
          ))}
        </div>
      )}

      {lista.length === 0 && <p className="mt-8 text-sm text-muted-foreground">{t.catalogo.vazio}</p>}
    </div>
  );
}

export function ProdutoCard({ slug }: { slug: string }) {
  const { t, qtd, prazo, nomeProduto } = useI18n();
  const p = produtos.find((x) => x.slug === slug)!;
  const nome = nomeProduto(p.slug, p.nome);

  return (
    <article className="group border border-border bg-card p-5 transition-transform hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold">{nome}</h3>
          <p className="truncate text-xs text-muted-foreground italic">{p.cientifico}</p>
        </div>
        <StatusTag status={p.status} />
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-px border border-border bg-border">
        <Cell label={t.catalogo.thCategoria} value={t.categorias[p.categoria]} />
        <Cell label={t.catalogo.thFormato} value={t.formatos[p.formato]} />
        <Cell label={t.catalogo.thDisponibilidade} value={qtd(p.disponibilidade)} strong />
        <Cell label={t.catalogo.prazoEstimado} value={prazo(p.prazoDias)} strong />
      </dl>

      <a
        href={whatsappLink(t.whatsapp.produto(nome, p.disponibilidade ?? 1000))}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-navy px-4 py-3 text-[11px] font-semibold tracking-[0.14em] text-navy uppercase transition-colors hover:bg-navy hover:text-navy-foreground"
      >
        <VMark className="h-3 w-3 text-lime" />
        {t.catalogo.solicitarLote}
      </a>
    </article>
  );
}

function Cell({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="bg-card px-3.5 py-3">
      <dt className="eyebrow text-muted-foreground">{label}</dt>
      <dd className={`tabular mt-1 text-sm ${strong ? "font-semibold" : "text-graphite"}`}>
        {value}
      </dd>
    </div>
  );
}
