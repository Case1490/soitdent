import AboutUsImage from "../assets/nosotros.jpg";
// Importa los iconos que necesitas de lucide-react
import { Heart, Clock, Star, Users } from "lucide-react";
import CardAboutUs from "../components/CardAboutUs";

const AboutUs = () => {
  return (
    <div>
      <div className="w-5/6 m-auto min-h-screen flex items-center justify-center gap-x-20">
        <div className="w-full max-w-lg">
          <img
            src={AboutUsImage}
            alt="Nosotros"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full max-w-md">
          <h2 className="text-3xl md:text-4xl text-center mb-4">
            ¿Quiénes somos?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis fugit
            enim aliquam, alias ipsa ad nihil voluptas quidem corporis
            praesentium in provident nulla unde explicabo blanditiis doloribus,
            facere natus. Facere.
          </p>

          {/* Sección de Íconos */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <CardAboutUs
              Icon={Heart}
              title="Experiencia"
              paragraph="Más de 10 años de trayectoria"
            />
            <CardAboutUs
              Icon={Clock}
              title="Horario Flexible"
              paragraph="Atención de Lunes a Sábado."
            />
            <CardAboutUs
              Icon={Star}
              title="Calidad"
              paragraph="Equipos de última tecnología."
            />
            <CardAboutUs
              Icon={Users}
              title="Equipo Profesional"
              paragraph="Médicos certificados y dedicados."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
