import {
    Button,
    Container,
    Nav,
    Navbar as NavbarBs,
    NavItem,
  } from "react-bootstrap";
  // import Image from 'react-bootstrap/Image'
  import { NavLink } from "react-router-dom";
  import { useShoppingCart } from "../../context/shoppingCartContext";
  import { useRef, useState } from "react";
  import "./style.css";

  export function Header() {
    const { openCart, cartQuantity } = useShoppingCart();
    return (
      <NavbarBs sticky="top" className="headerSpace">
        <Container>
          <div className="containerHeader_Name">
            <Nav>
              <Nav.Link href="/#home" /* as={NavLink} */>
                <img
                  alt=""
                  src="../imgs/logouit-1@2x.png"
                  className="CanteenUIT_header_icon"
                />
                <span className="CanteenUIT_header_text">Canteen UIT</span>
              </Nav.Link>
            </Nav>
          </div>

          <div className="nav_link">
            <Nav>
              <Nav.Link to="/" as={NavLink}>
                Trang chủ
              </Nav.Link>
              <Nav.Link to="/Menu" as={NavLink}>
                Thực đơn
              </Nav.Link>
              <Nav.Link to="/History" as={NavLink}>
                Lịch sử
              </Nav.Link>
              <Nav.Link to="/About" as={NavLink}>
                Liên hệ
              </Nav.Link>
            </Nav>
          </div>

          <div className="shoppingCartIcon">
            <div
              style={{ position: "relative" }}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                alt=""
                src="../svg/shopping-cart.svg"
                style={{
                  width: "2.5rem",
                }}
                onClick={openCart}
                className="shoppingCartpage"
              />
              {cartQuantity > 0 && (
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.25rem",
                    height: "1.25rem",
                    position: "absolute",
                    transform: "translate(75%,-60%)",
                  }}
                >
                  {cartQuantity}
                </div>
              )}
            </div>
          </div>
          <div>
            {/* <Nav>
              <button className="button">
                <Nav.Link to="/Login" as={NavLink}>
                  <div className="loginText">Đăng Nhập</div>
                </Nav.Link>
              </button>
            </Nav> */}
          </div>
        </Container>
      </NavbarBs>
    );
  }
