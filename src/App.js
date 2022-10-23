import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Report from "./pages/Report";
import LupaPassword from "./pages/LupaPassword";
import LupaUsername from "./pages/LupaUsername";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Device from "./pages/Device";
import User from "./pages/User";
import Threshold from "./pages/Threshold";
import Indicator from "./pages/Indicator";
import Alert from "./pages/Alert";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        // autoClose={false}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lupapassword" element={<LupaPassword />} />
        <Route path="/lupausername" element={<LupaUsername />} />
        <Route path="/report" element={<Report />}></Route>
        <Route path="/device" element={<Device />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/threshold" element={<Threshold />}></Route>
        <Route path="/indicator" element={<Indicator />}></Route>
        <Route path="/alert" element={<Alert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
