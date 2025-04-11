
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppShowcase from "@/components/AppShowcase";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <AppShowcase />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
