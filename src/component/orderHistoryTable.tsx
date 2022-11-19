import { Button, Card, Container, Table } from "react-bootstrap";

export function OrderHistoryTable() {
  return (
    <>
      <Container className="bg-white shadow-sm" id="history">
        <Table>
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Giá tiền</th>
              <th>Ngày mua</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#12345678</td>
              <td>25.000 vnd</td>
              <td>14/11/2022</td>
              <td className="text-success">Đã thanh toán</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
