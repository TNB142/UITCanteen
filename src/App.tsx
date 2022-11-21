import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { History } from "./pages/orderHistory";
import { RatePage } from "./pages/Rate";
import { About } from "./pages/About";

import { Header } from "./component/header/Header";
import { Footer } from "./component/footer/Footer";

import { ShoppingCartProvider } from "./context/shoppingCartContext";
import {Menu_page as Menu} from "./pages/Menu"

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Container
        className="min-vh-100 d-flex flex-column
                justify-content-between">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/History" element={<History />} />
          <Route path="/Rate" element={<RatePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu/>}/>
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
