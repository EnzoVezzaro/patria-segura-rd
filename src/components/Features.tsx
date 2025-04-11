
import { 
  Shield, Users, Code, Download, Heart, CheckCircle 
} from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Seguridad Comunitaria",
    description: "Aplicaciones enfocadas en mantener nuestras comunidades más seguras a través de la colaboración."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Desarrollado por Dominicanos",
    description: "Soluciones tecnológicas creadas por talentos locales para resolver problemas específicos de nuestro país."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Código Abierto",
    description: "Muchas de estas aplicaciones son de código abierto, permitiendo que la comunidad contribuya a su mejora."
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: "100% Gratuitas",
    description: "Acceso completamente gratuito a todas las aplicaciones para que todos los dominicanos puedan beneficiarse."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Con Propósito Social",
    description: "Diseñadas con la misión de crear un impacto positivo en la sociedad dominicana."
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Verificadas y Seguras",
    description: "Aplicaciones verificadas por la comunidad para garantizar su seguridad y eficacia."
  }
];

const Features = () => {
  return (
    <section id="sobre" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="bg-dominican-light-green/30 text-dominican-dark-green px-4 py-1 rounded-full text-sm font-medium">
            Características
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dominican-dark-green mt-4 mb-4">
            ¿Por qué usar estas aplicaciones?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestra colección de aplicaciones de seguridad comparten estas importantes características
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="bg-dominican-light-green/30 p-3 w-fit rounded-xl text-dominican-dark-green mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dominican-dark-green mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
