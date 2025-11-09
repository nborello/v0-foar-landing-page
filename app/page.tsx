import Header from "@/components/header"
import Hero from "@/components/hero"
import LogoStrip from "@/components/logo-strip"
import Pillars from "@/components/pillars"
import Services from "@/components/services"
import Cases from "@/components/cases"
import Partners from "@/components/partners"
import HowWeWork from "@/components/how-we-work"
import Locations from "@/components/locations"
import ContactForm from "@/components/contact-form"
import CTABanner from "@/components/cta-banner"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="bg-white">
        <Hero />
        <LogoStrip />
        <Pillars />
        <Services />
        <Cases />
        <Partners />
        <HowWeWork />
        <Locations />
        <ContactForm />
        <CTABanner />
        <Footer />
      </main>
    </>
  )
}
