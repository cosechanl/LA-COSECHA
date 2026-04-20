import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import WholesaleBanner from "./components/WholesaleBanner";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-harvest-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <WholesaleBanner />
        <Process />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
