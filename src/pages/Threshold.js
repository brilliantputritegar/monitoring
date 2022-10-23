import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

const Threshold = () => {
  return (
    <>
      <Navbar />
      <section className="font-poppins font-poppins pb-5 pt-[118px] md:pt-8 bg-gradientLimegreen sm:bg-white">
        <div className="container-big grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="text-sm">PARAMETER</h2>
            <div className="border-r-4 p-4 flex space-x-4  mb-6 flex-col mt-4 space-y-4">
              <Button variant="secondary">
                <span className="mr-3">1. Micro Hidro</span>
              </Button>
              <Button variant="secondary">
                <span className="mr-3">2. Solar Panel</span>
              </Button>
              <Button variant="secondary">
                <span className="mr-3">3. PJU</span>
              </Button>
              <Button variant="secondary">
                <span className="mr-3">4. Wind Turbine</span>
              </Button>
            </div>
          </div>
          <div>
            <h2 className="text-sm">INDIKATOR</h2>
            <div className="border-r-4 p-4 flex space-x-4 mb-6 flex-col mt-4 space-y-4">
              <Button variant="secondary">
                <span className="mr-3">1. Arus Listrik (A)</span>
              </Button>
              <Button variant="secondary">
                <span className="mr-3">2. Daya (W)</span>
              </Button>
              <Button variant="secondary">
                <span className="mr-3">3. Voltage (V)</span>
              </Button>
              <Button variant="secondary">
                <span className="mr-3">4. Energi (WH)</span>
              </Button>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-sm">THRESHOLD</h2>
            <div className="p-4 flex space-x-4 mb-6 flex-col mt-4">
              <h2 className="font-bold">Bahaya</h2>
              <div className="flex justify-between space-x-2 mt-4">
                <fieldset className="flex space-y-2">
                  <label>Min</label>
                  <Input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="0"
                  />
                </fieldset>
                <fieldset className="flex space-y-2">
                  <label>Max</label>
                  <Input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="0"
                  />
                </fieldset>
              </div>
              <h2 className="font-bold mt-8">Waspada</h2>
              <div className="flex justify-between space-x-2 mt-4">
                <fieldset className="flex space-y-2">
                  <label>Min</label>
                  <Input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="0"
                  />
                </fieldset>
                <fieldset className="flex space-y-2">
                  <label>Max</label>
                  <Input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="0"
                  />
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Threshold;
