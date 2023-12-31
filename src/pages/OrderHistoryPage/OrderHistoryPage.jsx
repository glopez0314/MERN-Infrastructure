import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import "./OrderHistoryPage.css";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import OrderHistory from "../../components/OrderHistory/OrderHistory";

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function () {
    async function getOrders() {
      const orders = await ordersAPI.getHistory();
      setActiveOrder(orders[0] || null);
      setOrders(orders);
    }
    getOrders();
  }, []);
  return (
    <>
      <div className="OrderHistory">
        <div className="div1">
          <OrderHistory
            orders={orders}
            activeOrder={activeOrder}
            setActiveOrder={setActiveOrder}
          />
        </div>
        <div className="div2">
          <OrderDetails cart={activeOrder} />
        </div>
      </div>
    </>
  );
}
