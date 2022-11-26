import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { History } from "./pages/history/orderHistory";
import { About } from "./pages/about/About";
import { Register } from "./pages/register/Register";

import { Header } from "./component/header/Header";
import { Footer } from "./component/footer/Footer";

import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { ForgetPassword } from "./pages/forget/Forget";
import { VerifyEmail } from "./pages/forget/verify/Verify";
import { RePassword } from "./pages/forget/repassword/RePassword";

import { Menu_page as Menu } from "./pages/menu/Menu";

import axios from "axios";


import "./App.css";
import { useEffect } from "react";

export default function App() {
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <>
      {/* <Container fluid className="min-vh-100 main-content"> */}
      <div className="min-vh-100 main-content">
        <ShoppingCartProvider>
          <div
            className="route_content"
          // className="bg-warning"
          // className="min-vh-100 d-flex flex-column
          //       justify-content-between"
          >
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/History" element={<History />} />
              <Route path="/About" element={<About />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
              <Route path="/ForgetPassword/Verify" element={<VerifyEmail />} />
              <Route
                path="/ForgetPassword/Verify/RePassword"
                element={<RePassword />}
              />
            </Routes>
          </div>
        </ShoppingCartProvider>
      </div>

      {/* </Container> */}
      <Footer />
      {/* <div className="footer">aaa</div> */}
    </>
  );
}
