import { useEffect, useId, useState } from "react";
import { MessageCircle } from "lucide-react";
import { catalog, locations, waLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function BookingForm({ initialRide = "" }: { initialRide?: string }) {
  const { t, lang } = useI18n();
  const b = t.booking;
  const formId = useId();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    location: "giza" as "giza" | "saqqara",
    riders: "2",
    units: "1",
    rideType: initialRide,
    ...(catalog.find((r) => r.id === initialRide)?.branches[0] === "saqqara" ? { location: "saqqara" as const } : {}),
    experience: "",
    arrival: "",
  });

  useEffect(() => {
    // keep the selected stable consistent when the language changes
    setForm((f) => ({ ...f }));
  }, [lang]);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedRide = catalog.find((ride) => ride.id === form.rideType);
    if (!selectedRide) return;
    const quantity = selectedRide.unitType ? Number(form.units || 0) : Number(form.riders || 0);
    const total = selectedRide.price * quantity;
    const directions = locations.find((location) => location.id === form.location)?.maps ?? "";
    const message = b.message({
      name: form.name,
      phone: form.phone,
      date: form.date,
      location: form.location === "giza" ? b.giza : b.saqqara,
      riders: form.riders,
      units: selectedRide.unitType ? form.units : "1",
      time: form.time,
      rideType: selectedRide[lang].title,
      total: `${total.toLocaleString(lang === "ar" ? "ar-EG" : "en-US")} ${t.currency}`,
      experience: form.experience,
      arrival: form.arrival,
      directions,
    });
    window.open(waLink(message), "_blank", "noopener");
  };

  const field =
    "w-full border border-input bg-background/60 px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";
  const label = "block text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground";

  const current = catalog.find((r) => r.id === form.rideType);
  const totalQuantity = current?.unitType ? Number(form.units || 0) : Number(form.riders || 0);
  const riderMaximum = current?.capacityPerUnit
    ? current.capacityPerUnit * Number(form.units || 1)
    : current?.maxRiders ?? 30;
  const unitLabel = current?.unitType === "cart"
    ? b.cartUnits
    : current?.unitType === "buggy"
      ? b.buggyUnits
      : current?.unitType === "camel"
        ? b.camelUnits
        : b.units;

  return (

          <form
            onSubmit={submit}
            className="luxe-card space-y-5 p-6 sm:p-10"
          >
            <div>
               <label className={label} htmlFor={`${formId}-name`}>
                {b.name}
              </label>
              <input
                 id={`${formId}-name`}
                required
                maxLength={100}
                value={form.name}
                onChange={set("name")}
                placeholder={b.namePlaceholder}
                className={`mt-2 ${field}`}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                 <label className={label} htmlFor={`${formId}-phone`}>
                  {b.phone}
                </label>
                <input
                   id={`${formId}-phone`}
                  required
                  maxLength={30}
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder={b.phonePlaceholder}
                  className={`mt-2 ${field}`}
                />
              </div>
              <div>
                 <label className={label} htmlFor={`${formId}-date`}>
                  {b.date}
                </label>
                <input
                   id={`${formId}-date`}
                  type="date"
                  required
                  value={form.date}
                  onChange={set("date")}
                  className={`mt-2 ${field}`}
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                 <label className={label} htmlFor={`${formId}-time`}>
                  {b.time}
                </label>
                {current?.slots ? (
                   <select id={`${formId}-time`} required value={form.time} onChange={set("time")} className={`mt-2 ${field}`}>
                    <option value="" disabled>{lang === "ar" ? "اختر ميعاد الرايد" : "Choose a slot"}</option>
                    {current.slots.map((sl, i) => (
                      <option key={sl} value={sl}>
                        {(lang === "ar" ? ["الرايد الأول 6:00 ص", "الرايد الثاني 8:00 ص", "الرايد الثالث 3:00 م", "الرايد الرابع 4:30 م"] : ["1st ride 6:00 AM", "2nd ride 8:00 AM", "3rd ride 3:00 PM", "4th ride 4:30 PM"])[i]}
                      </option>
                    ))}
                  </select>
                ) : (
                   <input id={`${formId}-time`} type="time" required value={form.time} onChange={set("time")} className={`mt-2 ${field}`} />
                )}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                 <label className={label} htmlFor={`${formId}-location`}>
                  {b.location}
                </label>
                <select
                   id={`${formId}-location`}
                  value={form.location}
                  onChange={(e) => {
                    const loc = e.target.value as "giza" | "saqqara";
                     setForm((f) => ({ ...f, location: loc, units: "1", ...(catalog.find((r) => r.id === f.rideType)?.branches.includes(loc) ? {} : { rideType: "", time: "" }) }));
                  }}
                  className={`mt-2 ${field}`}
                >
                  <option value="giza">{b.giza}</option>
                  <option value="saqqara">{b.saqqara}</option>
                </select>
              </div>
              <div>
                 <label className={label} htmlFor={`${formId}-riders`}>
                  {b.riders}
                </label>
                <input
                   id={`${formId}-riders`}
                  type="number"
                  min="1"
                   max={riderMaximum}
                  value={form.riders}
                  onChange={set("riders")}
                  className={`mt-2 ${field}`}
                />
              </div>
            </div>
             {current?.unitType ? (
               <div>
                 <label className={label} htmlFor={`${formId}-units`}>{unitLabel}</label>
                 <input
                   id={`${formId}-units`}
                   type="number"
                   min="1"
                   max="20"
                   required
                   value={form.units}
                   onChange={(e) => {
                     const units = e.target.value;
                     const max = (current.capacityPerUnit ?? 1) * Number(units || 1);
                     setForm((f) => ({ ...f, units, riders: String(Math.min(Number(f.riders || 1), max)) }));
                   }}
                   className={`mt-2 ${field}`}
                 />
               </div>
             ) : null}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                 <label className={label} htmlFor={`${formId}-rideType`}>
                  {b.rideType}
                </label>
                <select
                   id={`${formId}-rideType`}
                  required
                  value={form.rideType}
                   onChange={(e) => setForm((f) => ({ ...f, rideType: e.target.value, time: "", units: "1", riders: "1" }))}
                  className={`mt-2 ${field}`}
                >
                  <option value="" disabled>{b.selectRide}</option>
                  {catalog.filter((ride) => ride.branches.includes(form.location)).map((ride) => (
                    <option key={ride.id} value={ride.id}>{ride[lang].title}</option>
                  ))}
                </select>
              </div>
              <div>
                 <label className={label} htmlFor={`${formId}-total`}>{b.total}</label>
                <input
                   id={`${formId}-total`}
                  readOnly
                   value={form.rideType ? `${current?.priceMax ? (lang === "ar" ? "من " : "From ") : ""}${(current?.price ?? 0) * totalQuantity} ${t.currency}` : ""}
                  className={`mt-2 ${field}`}
                />
              </div>
            </div>
             <div>
               <label className={label} htmlFor={`${formId}-arrival`}>{b.arrival}</label>
               <select id={`${formId}-arrival`} required value={form.arrival} onChange={set("arrival")} className={`mt-2 ${field}`}>
                 <option value="" disabled>{b.selectArrival}</option>
                 <option value={b.publicTransport}>{b.publicTransport}</option>
                 <option value={b.uber}>{b.uber}</option>
                 <option value={b.privateCar}>{b.privateCar}</option>
               </select>
             </div>
            <div>
               <label className={label} htmlFor={`${formId}-experience`}>{b.experience}</label>
              <textarea
                 id={`${formId}-experience`}
                required
                maxLength={600}
                rows={4}
                value={form.experience}
                onChange={set("experience")}
                placeholder={b.experiencePlaceholder}
                className={`mt-2 resize-y ${field}`}
              />
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center gap-3 bg-[image:var(--gradient-gold)] px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              {b.submit}
            </button>
          </form>
  );
}

export function Booking() {
  const { t } = useI18n();
  const b = t.booking;
  return (
    <section id="contact" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">{b.eyebrow}</p>
          <h2 className="mt-4 text-center text-3xl leading-tight sm:text-4xl md:text-5xl">
            {b.titleA} <span className="text-gold-gradient">{b.titleHighlight}</span>
          </h2>
          <div className="mt-10"><BookingForm /></div>
        </Reveal>
      </div>
    </section>
  );
}
