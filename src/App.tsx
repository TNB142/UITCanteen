import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { History } from "./pages/history/orderHistory";
import { About } from "./pages/about/About";

import { Header } from "./component/header/Header";
import { Footer } from "./component/footer/Footer";

import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { Menu_page as Menu } from "./pages/menu/Menu";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container fluid className="bg-danger">
        <ShoppingCartProvider>
          <Container
            fluid
            // className="min-vh-100 d-flex flex-column
            //       justify-content-between"
            // className="main-content"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/History" element={<History />} />
              <Route path="/About" element={<About />} />
              <Route path="/Menu" element={<Menu />} />
            </Routes>
          </Container>
        </ShoppingCartProvider>
      </Container>
      <Footer />
    </>

    // <>
    // <Container fluid>
    //   hello
    // </Container>

    // </>
  );
}

export default App;
