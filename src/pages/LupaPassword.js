import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="font-poppins pt-5 md:pt-10">
      <div className="container-small relative">
        <div className="mt-12 shadow-low rounded-2xl flex flex-col space-x-4 bg-white">
          <h2 className="text-2xl font-bold mt-4 ml-4">Lupa Pasword</h2>
          <h3 className="text-sm mt-2 ml-4">
            Isi data dibawah ini untuk mereset password
          </h3>
          <fieldset className="flex flex-col mt-4">
            <label htmlFor="fullName">
              Ussername <span className="text-red-400">*</span>
            </label>
            <Input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Nama Lengkap"
            />
          </fieldset>
          <fieldset className="flex flex-col  mt-4">
            <label htmlFor="email">
              Email <span className="text-red-400">*</span>
            </label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Contoh: johndee@gmail.com"
            />
          </fieldset>
          <fieldset className="flex flex-col mt-4">
            <label>
              Nomor Handphone <span className="text-red-400">*</span>
            </label>
            <Input
              type="number"
              name="number"
              id="number"
              placeholder="08xxxxxx"
            />
          </fieldset>
          <div className="flex space-x-4">
            <Link to="/">
              <Button variant="secondary" type="submit" className="mt-6">
                Batal
              </Button>
            </Link>
            <Button type="submit" className="mt-6">
              Selanjutnya
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
