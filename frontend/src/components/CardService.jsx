import { MoveRight } from "lucide-react";

const CardService = ({ image, service, paragraphService }) => {
  return (
    <div className="p-2 rounded-lg shadow bg-white">
      <div className="w-[300px] h-[200px] m-auto rounded-lg overflow-hidden mb-3">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      <p className="text-xl font-bold text-[var(--BlueThird)]">{service}</p>
      <p>{paragraphService}</p>
      <a
        href="#"
        className=" inline-flex bg-[var(--BlueMain)] text-white p-2 rounded-full"
      >
        <MoveRight />
      </a>
    </div>
  );
};

export default CardService;
