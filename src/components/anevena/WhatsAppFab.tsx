import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/catalog";
import { useI18n } from "@/lib/i18n";

export function WhatsAppFab() {
  const { t } = useI18n();

  return (
    <a
      href={whatsappLink(t.whatsapp.padrao)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 bg-lime px-4 py-3 text-[11px] font-semibold tracking-[0.14em] text-lime-foreground uppercase shadow-sm transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-4 w-4" />
      {t.common.falarComAnevena}
    </a>
  );
}
