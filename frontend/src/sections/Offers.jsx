const Offers = () => {
  return (
    <div className="bg-offers my-10 py-16 px-10">
      <div className="w-1/2 ml-auto text-center">
        <span className="text-4xl bg-[var(--BlueMain)] p-2 rounded-full inline-block font-bold text-white mb-8">
          NUESTRAS OFERTAS
        </span>

        <div className="grid grid-cols-1 gap-6">
          {/* Oferta 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h3 className="mb-2">Limpieza Dental</h3>
            <p className="text-gray-600 mb-4">
              Aprovecha un 30% de descuento en tu primera limpieza profesional.
            </p>
            <span className="inline-block bg-[var(--YellowMain)] text-black px-4 py-2 rounded-full font-bold">
              S/ 99.00
            </span>
          </div>

          {/* Oferta 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h3 className="mb-2">Ortodoncia</h3>
            <p className="text-gray-600 mb-4">
              Plan inicial con diagnóstico gratis y 15% de descuento.
            </p>
            <span className="inline-block bg-[var(--YellowMain)] text-black px-4 py-2 rounded-full font-bold">
              S/ 450.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
