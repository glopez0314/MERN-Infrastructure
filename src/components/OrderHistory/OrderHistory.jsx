import "./OrderHistory.css";
import HistoryListItem from "../HistoryListItem/HistoryListItem";

export default function OrderHistory({ orders, activeOrder, setActiveOrder }) {
  const orderList = orders.map((order) => (
    <HistoryListItem
      order={order}
      activeOrder={activeOrder}
      setActiveOrder={setActiveOrder}
      key={order.id}
    />
  ));

  return (
    <main className={`OrderList ${orders.length ? "" : "no-orders"}`}>
      {orderList}
    </main>
  );
}
