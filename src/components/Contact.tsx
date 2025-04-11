
import { MessageCircle, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="bg-dominican-light-green/30 text-dominican-dark-green px-4 py-1 rounded-full text-sm font-medium">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dominican-dark-green mt-4 mb-4">
            ¿Quieres colaborar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Si eres desarrollador y quieres contribuir a la seguridad de la República Dominicana, 
            únete a nuestra comunidad.
          </p>
        </div>
        
        <div className="bg-dominican-light-green/20 rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 gap-8">
            
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <MessageCircle className="h-5 w-5 mr-2 text-dominican-dark-green" />
                    <h4 className="font-medium text-dominican-dark-green">Comunidad de Desarrolladores</h4>
                  </div>
                  <p className="text-gray-600 pl-7">
                    Únete a nuestro grupo de desarrolladores dominicanos comprometidos con la seguridad nacional.
                  </p>
                  <a href="https://github.com/orgs/Patria-Segura-RD/discussions/1" target="_blank" className="inline-block mt-2 pl-7 text-dominican-dark-green font-medium hover:underline">Unirse al grupo →</a>
                </div>
                <div>
                  <a href="https://github.com/Patria-Segura-RD" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center mb-2">
                      <Github className="h-5 w-5 mr-2 text-dominican-dark-green" />
                      <h4 className="font-medium text-dominican-dark-green">Contribuir con Código</h4>
                    </div>
                  </a>
                  <p className="text-gray-600 pl-7">
                    Nuestras aplicaciones son en su mayoria de código abierto. Puedes ayudar a mejorarlas.
                  </p>
                  <a href="https://github.com/orgs/Patria-Segura-RD/repositories" target="_blank" className="inline-block mt-2 pl-7 text-dominican-dark-green font-medium hover:underline">Ver repositorios →</a>
                </div>
                <div className="bg-dominican-dark-green text-white p-6 rounded-xl mt-8">
                  <h4 className="font-bold mb-2">¿Tienes una idea para una nueva app?</h4>
                  <p className="text-white/80 mb-3">
                    Comparte tu idea para una aplicación que pueda mejorar la seguridad dominicana.
                  </p>
                  <a href="https://github.com/orgs/Patria-Segura-RD/discussions/2" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-dominican-dark-green px-4 py-2 rounded-lg text-sm font-medium hover:bg-dominican-light-green transition-colors">
                      Proponer idea
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
