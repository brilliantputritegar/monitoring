import Select from "../components/Select";
import Navbar from "../components/Navbar";
//import { useNavigate } from "react-router";
//import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="font-poppins font-poppins pb-5 pt-[118px] md:pt-8 bg-gradientLimegreen sm:bg-white">
        <div className="container-big justify-center">
          <div className="flex flex-row justify-end mt-4 space-x-4">
            <fieldset className="flex flex-row w-40 mt-4 space-x-4">
              <Select>
                <option value="surabaya">Semua Indikator</option>
                <option value="jakarta">Arus Listrik (A) </option>
                <option value="bali">Daya (W) </option>
                <option value="jakarta">Energi (WH) </option>
                <option value="bali">Voltage (V) </option>
              </Select>
            </fieldset>
            <fieldset className="flex flex-row w-40 mt-4 space-x-4">
              <Select>
                <option value="surabaya">Semua Status</option>
                <option value="jakarta">Good</option>
                <option value="bali">Waspada</option>
                <option value="jakarta">Online</option>
                <option value="bali">Bahaya</option>
              </Select>
            </fieldset>
            <fieldset className="flex flex-row w-40 mt-4 space-x-4">
              <Select>
                <option value="surabaya">Filter Lainnya</option>
                <option value="jakarta">Semua Device</option>
                <option value="bali">Micro Hydro</option>
                <option value="jakarta">Solar Panel</option>
                <option value="bali">PJU</option>
                <option value="bali">Wind Turbin</option>
              </Select>
            </fieldset>
          </div>
        </div>
      </section>
      <section className="font-poppins md:py-5">
        <div className="container-big justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(16)].map((item, index) => {
            return (
              <div
                key={index}
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
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
