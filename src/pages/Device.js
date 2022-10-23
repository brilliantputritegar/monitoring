import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { getAllDevice } from "../features/deviceSlice";

import Select from "../components/Select";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import CardDevice from "../components/CardDevice";
import Modal from "../components/Modal";
//import { useNavigate } from "react-router";
//import { Link } from "react-router-dom";

const Device = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { devices, isLoadingAllDevice } = useSelector((store) => store.device);
  const dispatch = useDispatch();

  /* ======== use effect for get all products, triggered when query string is added ======== */
  useEffect(() => {
    dispatch(getAllDevice(location.search));
  }, [location.search]);

  const [modalSektor, setModalSektor] = useState(false);
  return (
    <>
      {/* ======== modal accept nego ======== */}
      <Modal
        isOpen={modalSektor}
        onClose={() => {
          setModalSektor(false);
        }}
      >
        <h1 className="text-xl font-bold mb-4">Sektor</h1>
        <Button variant="secondary">
          <span className="mr-3">Tambah Sektor</span>
        </Button>
        <div className="rounded-2xl p-4 flex flex-col shadow-low mb-6 bg-[#EEEEEE] mt-6">
          <h1 className="text-2xl text-center font-bold">
            Tidak Ada Tambahan Sektor
          </h1>
        </div>
      </Modal>
      <Navbar />
      <section className="font-poppins font-poppins pb-5 pt-[118px] md:pt-8 bg-gradientLimegreen sm:bg-white">
        <div className="container-big">
          <div className="flex flex-row mt-4 space-x-4">
            <fieldset className="flex flex-row w-40 mt-4 space-x-4">
              <Select>
                <option value="surabaya">Semua Sektor</option>
                <option value="jakarta">Arus Listrik (A) </option>
                <option value="bali">Daya (W) </option>
                <option value="jakarta">Energi (WH) </option>
                <option value="bali">Voltage (V) </option>
              </Select>
            </fieldset>
            <fieldset className="mt-4">
              <Button variant="secondary" onClick={() => setModalSektor(true)}>
                Atur Sektor
              </Button>
            </fieldset>
          </div>
        </div>
      </section>
      <section className="font-poppins md:py-5">
        <div className="container-big grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          {isLoadingAllDevice ? (
            <>
              {[...Array(4)].map((device, index) => {
                return <CardDevice device={{ id_device: index }} key={index} />;
              })}
            </>
          ) : (
            <>
              {devices.map((device, index) => {
                return (
                  <CardDevice isLoading={false} device={device} key={index} />
                );
              })}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Device;
