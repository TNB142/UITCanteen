import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
// import Image from 'react-bootstrap/Image'
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/shoppingCartContext"


export function Header() {
    const { openCart, cartQuantity } = useShoppingCart()
    return <NavbarBs sticky="top" className="bg-white mb-3">
        <Container>
            <div>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        <img alt="" src="../imgs/logouit-1@2x.png" />
                        Canteen UIT
                    </Nav.Link>
                </Nav>
            </div>

            <div>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        Trang chủ
                    </Nav.Link>
                    <Nav.Link to="/login" as={NavLink}>
                        Thực đơn
                    </Nav.Link>
                    <Nav.Link to="/History" as={NavLink}>
                        Lịch sử
                    </Nav.Link>
                    <Nav.Link to="/Rate" as={NavLink}>
                        Đánh giá
                    </Nav.Link>
                    <Nav.Link to="/About" as={NavLink}>
                        Liên hệ
                    </Nav.Link>
                </Nav>
            </div>


            <div>
                <Nav>
                    <div
                        style={{ position: "relative" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <img
                            alt="" src="../svg/shopping-cart.svg"
                            style={{
                                width: "2.5rem"
                            }}
                            onClick={openCart}
                        />
                        {cartQuantity > 0 && (<div
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                color: "white",
                                width: "1.25rem",
                                height: "1.25rem",
                                position: "absolute",
                                transform: "translate(75%,-60%)"
                            }}
                        >
                            {cartQuantity}
                        </div>)}
                    </div>
                </Nav>
            </div>
            <div>
                <Nav>
                    <button>
                        <Nav.Link to="/login" as={NavLink}>
                            Đăng Nhập
                        </Nav.Link>
                    </button>
                </Nav>
            </div>
        </Container>
    </NavbarBs >
}