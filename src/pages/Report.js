import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import Navbar from "../components/Navbar";

const Report = () => {
  return (
    <>
      <Navbar />
      <section className="font-poppins pb-5 pt-[118px] md:pt-8 bg-gradientLimegreen sm:bg-white">
        <div className="container-big mb-10">
          {/* ======== title and button ======== */}
          <div className="flex items-center justify-between ml-4 mt-6">
            <h1 className="text-xl font-bold">
              Masukkan data dibawah untuk melihat report
            </h1>
          </div>
          {/* ======== form ======== */}
          <form className="bg-white p-4 space-y-6">
            <fieldset className="flex mt-4 space-x-4 ">
              <label className="flex-none w-20">
                Device <span className=" text-red-500 required-dot">*</span>
              </label>
              <Input
                type="text"
                className="flex-initial w-80"
                placeholder="Pilih Device"
              />
            </fieldset>
            <fieldset className="flex mt-4 space-x-4 ">
              <label className="flex-none w-22">
                Indikator <span className=" text-red-500 required-dot">*</span>
              </label>
              <Select
                type="indikator"
                className="flex-initial w-80"
                placeholder="Pilih sensor indikator"
              />
            </fieldset>
            <fieldset className="flex mt-4 space-x-4">
              <label className="flex-none w-20">
                Periode <span className=" text-red-500 required-dot">*</span>
              </label>
              <Select
                name="Periode"
                className="flex-initial w-80"
                placeholder="Pilih periode"
              />
            </fieldset>
            <fieldset className="flex mt-4 space-x-4 ">
              <label className="flex-none w-20">
                Interval <span className=" text-red-500 required-dot">*</span>
              </label>
              <Select
                name="select"
                className="flex-initial w-80"
                onChange="Interval"
              />
            </fieldset>
            <fieldset className="flex mt-4 space-x-4">
              <label className="flex-none w-20">
                Waktu
                <span className="text-red-500 required-dot">*</span>
              </label>
              <div className="flex space-x-4 mt-1">
                <Button type="submit" className="w-full">
                  Daily
                </Button>
                <Button type="submit" className="w-full">
                  Hourly
                </Button>
              </div>
            </fieldset>

            <div className="flex space-x-4 ml-24">
              <Button type="button" className="w-24 h-12">
                Generate
              </Button>
              <Button type="button" className="w-60 h-12">
                Simpan sebagai report
              </Button>
            </div>
          </form>
          {/* ======== table ======== */}
          <div className="container-big">
            <div className="mt-10">
              <p className="text-xl font-bold"> Report Terjadwal</p>
              <div className="mt-4">
                <table className="table-auto border-collapse border border-slate-400">
                  <thead>
                    <tr>
                      <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                        Nama Penjadwalan
                      </th>
                      <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                        Mulai dikirim pada
                      </th>
                      <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                        Periode
                      </th>
                      <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                        Dikirim ke
                      </th>
                      <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="h-12">Daily PM POH </td>
                      <td className="h-12">20 Apr 2022</td>
                      <td className="h-12">Kemarin</td>
                      <td className="h-12">johndee@gmail</td>
                      <td className="h-12"> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Report;
