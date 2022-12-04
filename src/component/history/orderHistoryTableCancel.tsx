import { Button, Card, Container, Table } from "react-bootstrap";
import "./style.css"

type OrderHistoryTableCancelProps = {
  orderId: number;
};
export function OrderHistoryTableCancel({ orderId }: OrderHistoryTableCancelProps) {
  const checkCancelPay: any = JSON.parse(
    window.localStorage.getItem("cancelPay") || "{}"
  );
  const item: any = checkCancelPay.find((i: any) => i.orderId === orderId);
  // console.log("completed pay", checkCompletedPay);

  const checkStatus = () => {
    if(item.statusOrderId===3) return "Đã huỷ"
  }
  return (
    <>
      <Container className="bg-white shadow-sm">
        <Table>
          <thead className="orderHistory_table">
            <tr>
              <th>Mã đơn hàng</th>
              <th>Giá tiền</th>
              <th>Ngày mua</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody className="orderHistory_table">
            <tr>
              <td>{item.orderId}</td>
              <td>{item.total}</td>
              <td>{item.payAt}</td>
              <td className="text-danger ">{checkStatus()}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
