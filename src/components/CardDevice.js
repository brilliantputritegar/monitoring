import { Link } from "react-router-dom";

const CardDevice = ({ isLoading = true, device }) => {
  if (isLoading)
    return (
      <div className="rounded shadow-low px-2 pt-2 pb-4 space-x-4 transform hover:scale-105 transition">
        <div className="mb-2">
          <p className="text-2xl mb-2">Micro Hydro</p>
        </div>
        <h2 className="text-xs mb-1">Off</h2>
        <h3 className="text-sm mb-2">Offine</h3>
      </div>
    );

  const { id_device, nama_device, deskripsi } = device;
  return (
    <Link to={`/device/${id_device}`} className="h-full">
      <div className="rounded shadow-low px-2 pt-2 pb-4 space-x-4 transform hover:scale-105 transition">
        <div className="mb-2">
          <p className="text-2xl mb-2">{nama_device}</p>
        </div>
        <h2 className="text-xs mb-1">{deskripsi}</h2>
        <h3 className="text-sm mb-2">Offine</h3>
      </div>
    </Link>
  );
};

export default CardDevice;
