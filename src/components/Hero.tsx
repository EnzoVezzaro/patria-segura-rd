
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen relative flex flex-col items-center justify-center bg-dominican-dark-green py-20 px-4 md:px-6"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNEREYxRTYiIG9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIj48L3JlY3Q+PC9zdmc+')]"></div>

      <div className="container mx-auto max-w-5xl relative z-10 animate-fade-in">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-block bg-dominican-light-green/20 text-dominican-light-green px-4 py-1 rounded-full text-sm font-medium mb-4">
            Comunidad Dominicana 🇩🇴
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Por una República Dominicana <br />
            <span className="text-dominican-light-green">más segura</span>
          </h1>
          
          <p className="text-white/80 text-xl max-w-2xl mb-8">
            Descubre aplicaciones desarrolladas por la comunidad para mejorar la seguridad y bienestar de todos los dominicanos.
          </p>
          
          <a
            href="#aplicaciones"
            className="group flex items-center bg-dominican-light-green hover:bg-dominican-light-green/90 text-dominican-dark-green font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105"
          >
            Ver Aplicaciones
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["Desarrollado por la comunidad", "100% Gratuito", "Código abierto"].map((tag) => (
            <span
              key={tag}
              className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#aplicaciones" className="text-dominican-light-green">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
