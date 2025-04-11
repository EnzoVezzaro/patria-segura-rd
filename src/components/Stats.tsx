
import { Shield, Download, Users, Star } from "lucide-react";

const stats = [
  {
    icon: <Shield className="h-8 w-8" />,
    value: "6+",
    label: "Aplicaciones"
  },
  {
    icon: <Download className="h-8 w-8" />,
    value: "250K+",
    label: "Descargas"
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: "15+",
    label: "Desarrolladores"
  },
  {
    icon: <Star className="h-8 w-8" />,
    value: "4.7",
    label: "Calificación promedio"
  }
];

const Stats = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-dominican-light-green to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="bg-dominican-light-green/30 p-3 rounded-full text-dominican-dark-green mb-3">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-dominican-dark-green mb-1">{stat.value}</p>
              <p className="text-gray-600 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
