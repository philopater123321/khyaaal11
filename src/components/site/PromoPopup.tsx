import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useI18n } from "@/lib/i18n";

export function PromoPopup() {
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(id);
  }, []);
  const ar = lang === "ar";
  const offers = ar
    ? [["تدريب الفروسية", "2800 جنيه", "3000 جنيه"], ["الرايد اليومي بالإسطبل", "350 جنيه", "500 جنيه"]]
    : [["Equestrian Training", "2,800 EGP", "3,000 EGP"], ["Daily Stable Ride", "350 EGP", "500 EGP"]];
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md border-gold/50 bg-background text-center">
        <p className="eyebrow">{ar ? "عروض خاصة" : "Special Offers"}</p>
        <DialogTitle className="text-gold-gradient text-3xl">{ar ? "عروض الإسطبل" : "Stable Offers"}</DialogTitle>
        <div className="mt-4 space-y-4">
          {offers.map(([t, p, o]) => (
            <div key={t} className="border border-gold/30 p-4">
              <p className="text-lg">{t}</p>
              <p className="mt-1">
                <span className="text-2xl text-gold">{p}</span>{" "}
                <span className="text-sm text-muted-foreground line-through">{o}</span>
              </p>
            </div>
          ))}
        </div>
        <a href="#experiences" onClick={() => setOpen(false)} className="mt-4 inline-flex justify-center bg-[image:var(--gradient-gold)] px-8 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground">
          {ar ? "احجز الآن" : "Book Now"}
        </a>
      </DialogContent>
    </Dialog>
  );
}
