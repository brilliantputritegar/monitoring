const categories = [
  { id: 0, name: "Semua" },
  { id: 1, name: "Micro Hidro" },
  { id: 2, name: "PJU" },
  { id: 3, name: "Wind Turbin" },
  { id: 4, name: "Solar Panel" },
];

const CardSensor = ({ isLoading = true, sensor }) => {
  if (isLoading)
    return (
      <div className="rounded shadow-low px-2 pt-2 pb-4 transform hover:scale-105 transition">
        <div className="mb-2">
          <p className="text-center text-xl">Micro Hydro</p>
        </div>
        <h2 className="text-center text-xs mb-1">
          Last Update:17/08/2022 14:00
        </h2>
        <h3 className="text-center text-sm text-neutral-neutral03 mb-2">
          Arus Listrik
        </h3>
        <h3 className="text-center text-2xl font-bold">0,1 A</h3>
        <h3 className="text-center text-sm">0 A</h3>
      </div>
    );
};

/* const { productId, productName, price, categoryId, productImages } =
        product;
    return (
        
            <div
                className="rounded shadow-low px-2 pt-2 pb-4 transform hover:scale-105 transition"
              >
                <div className="mb-2">
                  <p className="text-center text-xl">Micro Hydro</p>
                </div>
                <h2 className="text-center text-xs mb-1">
                  Last Update:17/08/2022 14:00
                </h2>
                <h3 className="text-center text-sm text-neutral-neutral03 mb-2">
                  Arus Listrik
                </h3>
                <h3 className="text-center text-2xl font-bold">0,1 A</h3>
                <h3 className="text-center text-sm">0 A</h3>
              </div>
        
    );*/

export default CardSensor;
