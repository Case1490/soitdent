const CardAboutUs = ({ Icon, title, paragraph }) => {
  return (
    <div className="flex items-start gap-x-2 bg-slate-100 shadow rounded-xl p-2">
      <div className="p-2 bg-blue-100 rounded-full text-blue-600">
        <Icon size={16} />
      </div>
      <div className="">
        <p className=" mb-2 font-semibold">{title}</p>
        <p className="text-sm text-gray-500 mb-0">{paragraph}</p>
      </div>
    </div>
  );
};

export default CardAboutUs;
