import { Container, Navbar } from "react-bootstrap";
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "../footer/style.css";

export function Footer() {
  return (
    <Navbar className="containerFooter_Name">
      <img
        alt=""
        src="../imgs/logouit-1@2x.png"
        className="CanteenUIT_footer_icon"
      />

      <text className="CanteenUIT_footer_text">Canteen UIT</text>
    </Navbar>
  );
}
