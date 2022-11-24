import menuItems from "../../data/items.json";
import { Container } from "react-bootstrap";
import { Menu } from "../../component/menu/menu/Menu";
import "./style.css";

export function Menu_page() {
  return (
    <>
      <Container fluid>
        <div id="menu" className="p-5 text-center">
          <h1 className="menu_page_text">
            Thực đơn <a style={{ color: "#F72D57" }}>hôm nay</a>
          </h1>
        </div>
        <Menu />
      </Container>
    </>
  );
}
