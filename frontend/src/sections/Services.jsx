import CardService from "../components/CardService";

import Service1 from "../assets/servicio1.jpg";
import Service2 from "../assets/servicio2.jpg";
import Service3 from "../assets/servicio3.png";

const Services = () => {
  return (
    <div className="my-8 bg-service py-8 relative" id="servicios">
      <div className="w-5/6 m-auto text-center relative z-10">
        <h2>Nuestros Servicios</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum
          repellendus, quod magni natus fuga!
        </p>

        <div className="grid grid-cols-3 gap-x-4 mt-10">
          <CardService
            image={Service1}
            service="Limpieza dental profesional"
            paragraphService="Elimina placa, sarro y manchas, previniendo caries y enfermedades bucales."
          />
          <CardService
            image={Service2}
            service="Tratamiento de caries"
            paragraphService="Restaura dientes dañados con resinas, devolviendo función y estética dental."
          />
          <CardService
            image={Service3}
            service="Ortodoncia"
            paragraphService="Corrige alineación dental y mordida, mejorando salud y apariencia bucal."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
