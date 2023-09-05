import "./HistoryListItem.css";

export default function HistoryListItem({
  order,
  activeOrder,
  setActiveOrder,
}) {
  return (
    <div
      className={`OrderListItem ${order === activeOrder ? "selected" : ""}`}
      onClick={() => setActiveOrder(order)}
    >
      <div>
        <div>Order {new Date(order.updatedAt).toLocaleDateString()}</div>
        <div className="align-rt">${order.orderTotal.toFixed(2)}</div>
        <div className="smaller">
          {order.orderQty} Item{order.orderQty > 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
}
