
import { useState, useEffect } from "react";
import { Shield } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dominican-dark-green/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-dominican-light-green" />
          <span className="font-bold text-xl text-dominican-light-green">Patria Segura</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Inicio", "Aplicaciones", "Sobre", "Contacto"].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="text-dominican-white hover:text-dominican-light-green transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
