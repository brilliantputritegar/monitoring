import Button from "../components/Button";
import Navbar from "../components/Navbar";

const Rules = () => {
  return (
    <>
      <Navbar />
      <section className="font-poppins font-poppins pb-5 pt-[118px] md:pt-8 bg-gradientLimegreen sm:bg-white">
        <div className="container-big">
          <Button variant="secondary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3.75V14.25"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.75 9H14.25"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mr-3">Tambah Rules</span>
          </Button>
        </div>
        {/* ======== table rules ======== */}
        <div className="container-big mt-6">
          <table className="table-auto border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  Nama Alert
                </th>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  Device
                </th>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  Kondisi
                </th>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  Dijalankan
                </th>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  Interval
                </th>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  Status
                </th>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  Tanggal dibuat
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="h-12 ">Warning to chanel email</td>
                <td className="h-12">-</td>
                <td className="h-12">danger</td>
                <td className="h-12 ">Email Gmail</td>
                <td className="h-12">60 menit</td>
                <td className="h-12">On</td>
                <td className="h-12">16/09/21 14:09:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default Rules;
