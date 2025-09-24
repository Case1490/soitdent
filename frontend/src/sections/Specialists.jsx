import CardSpecialists from "../components/CardSpecialists";

import Doctor1 from "../assets/odontologa1.jpg";
import Doctor2 from "../assets/odontologa2.jpg";

const Specialists = () => {
  return (
    <div className="my-8 py-8">
      <div className="w-5/6 m-auto text-center">
        <h2>Especialistas</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum
          repellendus, quod magni natus fuga!
        </p>

        <div className="grid grid-cols-2 gap-x-4 mt-10">
          <CardSpecialists
            image={Doctor1}
            service="Dr. Rebeca Linares"
            paragraphService="Especialista en odontología general con 10 años de experiencia."
          />
          <CardSpecialists
            image={Doctor2}
            service="Dra. Carla Sánchez"
            paragraphService="Especialista en ortodoncia con 8 años de experiencia."
          />
        </div>
      </div>
    </div>
  );
};

export default Specialists;
