
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-dominican-dark-green mb-4">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dominican-dark-green focus:border-dominican-dark-green outline-none"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dominican-dark-green focus:border-dominican-dark-green outline-none"
                    placeholder="tu@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dominican-dark-green focus:border-dominican-dark-green outline-none"
                    rows={4}
                    placeholder="¿Cómo quieres colaborar?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-dominican-dark-green text-white px-6 py-2 rounded-lg hover:bg-dominican-dark-green/90 transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dominican-dark-green mb-4">Otras formas de colaborar</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <MessageCircle className="h-5 w-5 mr-2 text-dominican-dark-green" />
                    <h4 className="font-medium text-dominican-dark-green">Comunidad de Desarrolladores</h4>
                  </div>
                  <p className="text-gray-600 pl-7">
                    Únete a nuestro grupo de desarrolladores dominicanos comprometidos con la seguridad nacional.
                  </p>
                  <a href="#" className="inline-block mt-2 pl-7 text-dominican-dark-green font-medium hover:underline">Unirse al grupo →</a>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Github className="h-5 w-5 mr-2 text-dominican-dark-green" />
                    <h4 className="font-medium text-dominican-dark-green">Contribuir con Código</h4>
                  </div>
                  <p className="text-gray-600 pl-7">
                    Todas nuestras aplicaciones son de código abierto. Puedes ayudar a mejorarlas.
                  </p>
                  <a href="#" className="inline-block mt-2 pl-7 text-dominican-dark-green font-medium hover:underline">Ver repositorios →</a>
                </div>
                <div className="bg-dominican-dark-green text-white p-6 rounded-xl mt-8">
                  <h4 className="font-bold mb-2">¿Tienes una idea para una nueva app?</h4>
                  <p className="text-white/80 mb-3">
                    Comparte tu idea para una aplicación que pueda mejorar la seguridad dominicana.
                  </p>
                  <button className="bg-white text-dominican-dark-green px-4 py-2 rounded-lg text-sm font-medium hover:bg-dominican-light-green transition-colors">
                    Proponer idea
                  </button>
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
