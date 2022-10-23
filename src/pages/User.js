import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

const User = () => {
  const [modalUser, setModalUser] = useState(false);
  return (
    <>
      <Navbar />
      <Modal
        isOpen={modalUser}
        onClose={() => {
          setModalUser(false);
        }}
      >
        <h1 className="text-xl font-medium mb-4">Tambah User</h1>

        <div className="rounded-2xl p-4 flex flex-col space-x-4 shadow-low mb-6">
          <div className="mb-6 mt-2 space-y-2">
            <label className="text-xs font-medium mb-2">Nama Lengkap</label>
            <Input type="text" placeholder="Masukkan Nama Lengkap Anda" />
          </div>
          <div className="mb-6 mt-2 space-y-2">
            <label className="text-xs font-medium mb-2">Email</label>
            <Input type="text" placeholder="Masukkan Email Anda" />
          </div>
          <div className="mb-6 mt-2 space-y-2">
            <label className="text-xs font-medium mb-2">No Handphone</label>
            <Input type="text" placeholder="Masukkan No Handphone" />
          </div>
          <div className="mb-6 mt-2 space-y-2">
            <label className="text-xs font-medium mb-2">Jabatan</label>
            <Input type="text" placeholder="Masukkan Jabatan Anda" />
          </div>
        </div>

        <Button className="w-full">Simpan</Button>
      </Modal>

      <section className="font-poppins font-poppins pb-5 pt-[118px] md:pt-8 bg-gradientLimegreen sm:bg-white">
        <div className="container-big">
          <Button variant="secondary" onClick={() => setModalUser(true)}>
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
            <span className="mr-3">Tambah User</span>
          </Button>
        </div>
        {/* ======== table user ======== */}
        <div className="container-big mt-6">
          <table className="table-auto border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  Profile
                </th>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  Full Name
                </th>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  User Name
                </th>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  Role
                </th>
                <th className="border border-slate-400 bg-primary-limegreen04 w-60 h-12">
                  Created at
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="h-12 font-bold text-center">A </td>
                <td className="h-12">Azizah</td>
                <td className="h-12">azizah</td>
                <td className="h-12 rounded">admin</td>
                <td className="h-12">20 apr 2022 - 13:00:00 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default User;
