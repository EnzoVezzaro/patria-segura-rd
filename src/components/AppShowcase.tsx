
import { useState } from "react";
import { 
  Shield, AlertTriangle, MapPin, Phone, MessageCircle, 
  Users, Star, Download, ExternalLink, ShieldCheck 
} from "lucide-react";

// Mock data for Dominican safety apps
const apps = [
  {
    id: 1,
    name: "DriveSafe RD",
    description: "Fomenta hábitos de conducción más seguros con monitoreo en tiempo real, alertas inteligentes y seguimiento de comportamiento diseñado para proteger lo que más importa.",
    icon: <AlertTriangle className="h-8 w-8" />,
    rating: 0,
    users: "0K+",
    color: "bg-gradient-to-br from-dominican-dark-green to-dominican-dark-green/70",
    features: ["Alertas en tiempo real", "Mapas interactivos", "Tracking System", "Mobile App"],
    imageUrl: null,
    homepage: 'https://drive-safe-rd.netlify.app/',
    download: 'https://drive-safe-rd.netlify.app/'
  },
  {
    id: 2,
    name: "SRE",
    description: "Sistema de respuesta a emergencias que conecta familias con seres queridos durante eventos de crisis.",
    icon: <Shield className="h-8 w-8" />,
    rating: 0,
    users: "0K+",
    color: "bg-gradient-to-br from-dominican-dark-green to-dominican-dark-green/70",
    features: ["Mapeo de incidentes", "Comunidad vigilante", "Conecta con hospitales", "PWA"],
    imageUrl: "lovable-uploads/c47a9033-813c-49e8-9868-798fb3d30347.png",
    homepage: 'https://emergency-dr.netlify.app/',
    download: 'https://emergency-dr.netlify.app/'
  }
];

const AppCard = ({ app, index }: { app: typeof apps[0], index: number }) => {
  return (
    <div 
      className="app-card animate-scale-in" 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`${app.color} p-6 text-white`}>
        <div className="flex justify-between items-start">
          <div className="bg-white/20 p-3 rounded-xl">
            {app.icon}
          </div>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-300 mr-1" fill="#fde047" />
            <span className="font-bold">{app.rating}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mt-4">{app.name}</h3>
        <p className="text-white/80 mt-2 text-sm">{app.users} usuarios</p>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">{app.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {app.features.map((feature, idx) => (
            <span key={idx} className="bg-dominican-light-green/20 text-dominican-dark-green text-xs px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>
        <div className="flex space-x-2 mt-4">
          <a href={app.download} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-dominican-dark-green text-white py-2 px-4 rounded-lg hover:bg-dominican-dark-green/90 transition-colors">
            <Download className="h-4 w-4" />
            <span>Descargar</span>
          </a>
          <a href={app.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-100 text-dominican-dark-green p-2 rounded-lg hover:bg-gray-200 transition-colors">
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const AppShowcase = () => {
  const [category, setCategory] = useState("todos");
  
  return (
    <section id="aplicaciones" className="py-20 px-4 md:px-6 bg-dominican-light-green">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dominican-dark-green mb-4">
            Aplicaciones para la Seguridad
          </h2>
          <p className="text-dominican-dark-green/70 max-w-2xl mx-auto">
            Explora herramientas digitales creadas por dominicanos para ayudar a mejorar la seguridad y protección de nuestra comunidad.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {["todos", "emergencias", "comunidad", "transporte", "personal"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                category === cat
                  ? "bg-dominican-dark-green text-white"
                  : "bg-white/50 text-dominican-dark-green hover:bg-white"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-dominican-dark-green/70 mb-4">
            ¿Tienes una aplicación que contribuye a la seguridad dominicana?
          </p>
          <a href="https://github.com/orgs/Patria-Segura-RD/discussions/2" target="_blank" rel="noopener noreferrer">
            <button className="bg-dominican-dark-green text-white px-6 py-3 rounded-lg hover:bg-dominican-dark-green/90 transition-all transform hover:scale-105">
              Proponer nueva app
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
