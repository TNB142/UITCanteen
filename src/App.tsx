import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { History } from "./pages/history/orderHistory";
import { About } from "./pages/about/About";
import { Register } from "./pages/register/Register";
import { Logout } from "./pages/logout/logout";

import { Header } from "./component/header/Header";
import { HeaderLogin } from "./component/header/HeaderLogin";
import { Footer } from "./component/footer/Footer";

import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { ForgetPassword } from "./pages/forget/Forget";
import { VerifyEmail } from "./pages/forget/verify/Verify";
import { RePassword } from "./pages/forget/repassword/RePassword";
import { SuccessPay } from "./pages/successpay/SuccessPay";
import { PayCartDetails } from "./pages/details/payCartDetails";
import { User } from "./pages/user/User";

import { Menu_page as Menu } from "./pages/menu/Menu";

import axios from "axios";

import "./App.css";
import { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://uitcanteen-backend.herokuapp.com/")
      .then((response) => {
        // if (response.data.loggedIn) {
        //   window.localStorage.setItem("isLoggedIn",true);
        //   setLoggedIn(true);
        //   setUser(response.data.user);
        //   console.log(user);
        //   toast("logged in as " + response.data.user.email);
        // } else {
        //   setLoggedIn(false);
        //   window.localStorage.setItem("isLoggedIn",false);
        //   toast("Hello guest!");
        // }
        setLoggedIn(response.data.loggedIn);
        window.localStorage.setItem("isLoggedIn", response.data.loggedIn);
        window.localStorage.setItem("userData",JSON.stringify(response.data.user));
        const getUserPack:any = window.localStorage.getItem("userData");
        const userData = JSON.parse(getUserPack);

        console.log(window.localStorage.getItem("isLoggedIn"))
        console.log(getUserPack)
      });
  }, []);

  if (!loggedIn)
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
                <Route
                  path="/ForgetPassword/Verify"
                  element={<VerifyEmail />}
                />
                <Route path="/Success" element={<SuccessPay />} />
                <Route path="/Details" element={<PayCartDetails />} />
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
  else {
    return (
      <>
        <ToastContainer />
        {/* <Container fluid className="min-vh-100 main-content"> */}
        <div className="min-vh-100 main-content">
          <ShoppingCartProvider>
            <div
              className="route_content"
              // className="bg-warning"
              // className="min-vh-100 d-flex flex-column
              //       justify-content-between"
            >
              <HeaderLogin />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Logout" element={<Logout />} />
                <Route path="/History" element={<History />} />
                <Route path="/About" element={<About />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/ForgetPassword" element={<ForgetPassword />} />
                <Route
                  path="/ForgetPassword/Verify"
                  element={<VerifyEmail />}
                />
                <Route path="/Success" element={<SuccessPay />} />
                <Route
                  path="/ForgetPassword/Verify/RePassword"
                  element={<RePassword />}
                />
                <Route path="/User" element={<User />} />
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
}
