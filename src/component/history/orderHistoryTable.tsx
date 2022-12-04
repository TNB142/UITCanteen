import { Button, Card, Container, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import "./style.css";

type OrderHistoryTableProps = {
  orderId: number;
};

export function OrderHistoryTable({ orderId }: OrderHistoryTableProps) {
  const checkCompletedPay: any = JSON.parse(
    window.localStorage.getItem("completedPay") || "{}"
  );
  const item: any = checkCompletedPay.find((i: any) => i.orderId === orderId);
  // console.log("completed pay", checkCompletedPay);

  const checkStatus = () => {
    if(item.statusOrderId===1) return "Đã hoàn thành"
    if(item.statusOrderId===2) return "Đã thanh toán"
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
              <td className="text-success ">{checkStatus()}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
