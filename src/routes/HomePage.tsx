import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Process } from "@/components/site/Process";
import { ScrollPlay } from "@/components/site/ScrollPlay";
import { Services } from "@/components/site/Services";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Ticker } from "@/components/site/Ticker";
import { Why } from "@/components/site/Why";

export function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <ScrollPlay />
      <Process />
      <Why />
      <Ticker />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
