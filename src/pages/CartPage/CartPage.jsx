import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as ordersAPI from "../../utilities/orders-api";

import OrderDetails from "../../components/OrderDetails/OrderDetails";

export default function CartPage({ user }) {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function () {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
      console.log(cart);
    }
    getCart();
  }, []);

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.changeQty(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate("/orders");
  }

  return (
    <OrderDetails
      cart={cart}
      handleChangeQty={handleChangeQty}
      handleCheckout={handleCheckout}
    />
  );
}
