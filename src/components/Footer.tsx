
import { Shield, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dominican-dark-green text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-dominican-light-green mr-2" />
              <span className="font-bold text-xl">Patria Segura Digital</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Una iniciativa para recopilar y promover aplicaciones dominicanas que contribuyan 
              a mejorar la seguridad y bienestar de nuestra comunidad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {["Inicio", "Aplicaciones", "Sobre", "Contacto"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-dominican-light-green transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              {["Para desarrolladores", "Documentación", "API", "Contribuir"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-dominican-light-green transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Patria Segura Digital. Todos los derechos reservados. 
            Desarrollado por y para dominicanos.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-dominican-light-green text-sm transition-colors">Política de privacidad</a>
            <a href="#" className="text-white/70 hover:text-dominican-light-green text-sm transition-colors">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
