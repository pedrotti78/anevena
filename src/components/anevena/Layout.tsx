import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-20">{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-24">
        <p className="eyebrow text-lime">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold text-balance sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-navy-foreground/65">{description}</p>
        )}
      </div>
    </section>
  );
}
