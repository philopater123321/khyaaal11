import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Packages } from "@/components/site/Packages";
import { GearShop } from "@/components/site/GearShop";
import { Locations } from "@/components/site/Locations";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { PromoPopup } from "@/components/site/PromoPopup";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const title = "Khyaaal11 | Luxury Arabian Horse Rides at the Giza Pyramids";
const description =
  "Private Arabian horse rides at the Giza Pyramids and Saqqara, with VIP stallions, daily ride offers, equestrian training and a gear shop. Book on WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <main>
      <Nav />
      <Hero />
      <About />
      <Packages />
      <Booking />
      <GearShop />
      <Locations />
      <Gallery />
      <Testimonials />
      <Footer />
        <WhatsAppFloat />
        <PromoPopup />
      </main>
    </I18nProvider>
  );
}
