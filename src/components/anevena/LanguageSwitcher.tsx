import { LANGS, useI18n } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={`inline-flex items-center border border-navy/15 ${className}`}
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          title={l.label}
          className={`px-2.5 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors ${
            lang === l.code ? "bg-navy text-navy-foreground" : "text-navy/60 hover:text-navy"
          }`}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}
