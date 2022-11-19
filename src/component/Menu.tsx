import menuItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import { MenuItem } from "../component/MenuItem";

export function Menu() {
  return (
    <>
      <h1>Menu</h1>
      <Row md={2} xs={3} lg={3} className="g-3">
        {menuItems.map((item) => (
          // <Col>{JSON.stringify(item)}</Col>
          <Col key={item.id}>
            <MenuItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
