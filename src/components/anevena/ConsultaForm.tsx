import { useState } from "react";
import { z } from "zod";
import { VMark } from "./Logo";

const schema = z.object({
  especie: z.string().trim().min(2, "Informe a espécie").max(120),
  quantidade: z.string().trim().min(1, "Informe a quantidade").max(20),
  prazo: z.string().trim().max(60).optional().or(z.literal("")),
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(30),
  email: z.string().trim().email("E-mail inválido").max(255),
});

type Values = z.infer<typeof schema>;

const initial: Values = {
  especie: "",
  quantidade: "",
  prazo: "",
  nome: "",
  empresa: "",
  telefone: "",
  email: "",
};

const fields: { name: keyof Values; label: string; type?: string; full?: boolean }[] = [
  { name: "especie", label: "Espécie" },
  { name: "quantidade", label: "Quantidade" },
  { name: "prazo", label: "Prazo desejado" },
  { name: "nome", label: "Nome" },
  { name: "empresa", label: "Empresa" },
  { name: "telefone", label: "Telefone / WhatsApp" },
  { name: "email", label: "E-mail", type: "email", full: true },
];

export function ConsultaForm({ defaultEspecie = "" }: { defaultEspecie?: string }) {
  const [values, setValues] = useState<Values>({ ...initial, especie: defaultEspecie });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<keyof Values, string>> = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as keyof Values] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    // Estrutura pronta para integração futura com CRM/API.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-lime/40 bg-navy-deep p-10 text-center">
        <div className="mx-auto flex w-24 items-center justify-center gap-1 text-lime">
          <span className="converge-in-left h-px flex-1 bg-lime" />
          <VMark className="h-6 w-6" />
          <span className="converge-in-right h-px flex-1 bg-lime" />
        </div>
        <p className="mt-6 text-lg font-medium text-navy-foreground">
          Recebemos sua necessidade.
        </p>
        <p className="mt-2 text-sm text-navy-foreground/60">
          Nossa equipe comercial entrará em contato.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={f.full ? "sm:col-span-2" : undefined}>
          <label
            htmlFor={f.name}
            className="eyebrow block text-navy-foreground/55"
          >
            {f.label}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type ?? "text"}
            value={values[f.name]}
            onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
            className="mt-2 w-full border-b border-navy-foreground/25 bg-transparent pb-2.5 text-base text-navy-foreground outline-none transition-colors focus:border-lime"
          />
          {errors[f.name] && (
            <p className="mt-1.5 text-xs text-lime">{errors[f.name]}</p>
          )}
        </div>
      ))}

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 bg-lime px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-lime-foreground uppercase transition-colors hover:bg-lime/85 sm:w-auto"
        >
          <VMark className="h-3 w-3 -translate-x-1 transition-transform group-hover:translate-x-0" />
          Consultar disponibilidade
        </button>
      </div>
    </form>
  );
}
