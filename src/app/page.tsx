import SiteNav from "@/components/site-nav";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import AboutSection from "@/components/about-section";
import RowingSection from "@/components/rowing-section";
import BrisbaneSection from "@/components/brisbane-section";
import ContactSection from "@/components/contact-section";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <RowingSection />
        <BrisbaneSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
