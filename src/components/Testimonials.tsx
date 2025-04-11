
import { useState } from "react";

const testimonials = [
  {
    name: "María Rodríguez",
    role: "Ciudadana, Santo Domingo",
    content: "Gracias a la aplicación Alerta RD pude recibir notificaciones a tiempo durante las últimas lluvias torrenciales. ¡Salvó a mi familia de estar en una zona de riesgo!",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    name: "José Méndez",
    role: "Líder comunitario, Santiago",
    content: "Comunidad Segura ha transformado la manera en que nos organizamos en nuestro sector. Ahora estamos más conectados y hemos reducido los incidentes de robos en un 60%.",
    avatar: "https://i.pravatar.cc/150?img=58"
  },
  {
    name: "Carmen Vásquez",
    role: "Estudiante universitaria",
    content: "Como mujer que regresa tarde de la universidad, ProtegeDR me da la tranquilidad de saber que puedo alertar a mis contactos de emergencia con solo un botón.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Luis Hernández",
    role: "Conductor profesional",
    content: "RD Tránsito me ha ayudado a evitar zonas peligrosas y a planificar rutas más seguras cuando trabajo durante la noche. Indispensable para cualquier conductor.",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="h-12 w-12 rounded-full object-cover mr-4" 
        />
        <div>
          <p className="font-bold text-dominican-dark-green">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial.content}</p>
      <div className="mt-4 flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-20 px-4 md:px-6 bg-dominican-dark-green">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="bg-white/10 text-dominican-light-green px-4 py-1 rounded-full text-sm font-medium">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Voces de la comunidad
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Historias reales de dominicanos que han mejorado su seguridad gracias a estas aplicaciones (proximamente)
          </p>
        </div>
        
        {/**
         * <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="transform transition-all hover:-translate-y-2 hover:shadow-xl"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
         * 
         */}
      </div>
    </section>
  );
};

export default Testimonials;
