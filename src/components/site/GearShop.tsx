import { MessageCircle } from "lucide-react";
import { gear, waLink } from "@/lib/site";
import { useI18n, usePrice } from "@/lib/i18n";
import { Reveal, SectionHeading } from "./Reveal";

export function GearShop() {
  const { t, lang } = useI18n();
  const s = t.shopSection;
  const price = usePrice();

  return (
    <section id="shop" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} copy={s.copy} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gear.map((g, i) => {
            const title = g[lang];
            const priceLabel = price(g.price);
            return (
              <Reveal key={g.id} delay={(i % 4) * 0.08}>
                <article className="luxe-card flex h-full flex-col overflow-hidden">
                  <img src={g.image} alt={title} loading="lazy" className="h-56 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-7">
                  <h3 className=" text-lg leading-snug">{title}</h3>
                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-2xl text-gold">{priceLabel}</span>
                      {g.oldPrice ? (
                        <span className="text-sm text-muted-foreground line-through decoration-burgundy/80">
                          {price(g.oldPrice)}
                        </span>
                      ) : null}
                    </div>
                    <a
                      href={waLink(s.waMessage(title, priceLabel))}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-gold/60 px-5 py-3 text-[0.66rem] uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-gold)]"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      {s.order}
                    </a>
                  </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
