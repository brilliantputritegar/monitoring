import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <section className="font-poppins pt-5 md:pt-10">
      <div className="container-small relative">
        <header className="py-4 lg:hidden">
          <img src="/images/fi_arrow-left.svg" alt="" />
        </header>
        <p className="text-4xl mt-4 text-center font-bold"> Monitoring</p>
        <div className="mt-12 shadow-low rounded-2xl flex flex-col space-x-4 bg-white">
          <h2 className="text-2xl font-bold mt-4 ml-4">Masuk</h2>
          <fieldset className="flex flex-col mt-1 ">
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
            <label htmlFor="password">
              Password <span className="text-red-400">*</span>
            </label>
            <Input
              name="password"
              id="password"
              placeholder="Masukkan password"
              isPasswordInput={true}
            />
          </fieldset>
          <Button type="submit" className="md:w-auto mt-6">
            Masuk
          </Button>

          <p className="mt-8 flex justify-between">
            <a href="/lupausername">Lupa email?</a>
            <a href="/lupapassword" className=" ml-2">
              Lupa password?
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
