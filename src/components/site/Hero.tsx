import { motion } from "motion/react";
import { ArrowDown, MessageCircle } from "lucide-react";
import { img, WHATSAPP } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.img
        src={img.home}
        alt="Group of riders with Arabian horses at the stable"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="hero-veil absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,var(--background),transparent)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-24 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t.hero.titleA} <span className="text-gold-gradient">{t.hero.titleB}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg"
        >
          {t.hero.copy}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-11 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#experiences"
            className="group inline-flex items-center justify-center gap-3 bg-[image:var(--gradient-gold)] px-9 py-4 text-[0.75rem] uppercase tracking-[0.24em] text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
          >
            {t.hero.ctaPackages}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-gold/60 px-9 py-4 text-[0.75rem] uppercase tracking-[0.24em] text-gold transition-all hover:bg-gold/10 hover:shadow-[var(--shadow-gold)]"
          >
            <MessageCircle className="h-4 w-4" />
            {t.hero.ctaWhatsapp}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
