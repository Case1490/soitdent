const CardSpecialists = ({ image, service, paragraphService }) => {
  return (
    <div className="p-2 rounded-lg shadow bg-white">
      <div className="w-[220px] h-[350px] m-auto rounded-lg overflow-hidden mb-3">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      <p className="text-xl font-bold text-[var(--BlueThird)]">{service}</p>
      <p>{paragraphService}</p>
    </div>
  );
};

export default CardSpecialists;
