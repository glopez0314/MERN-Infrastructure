import "./OrderDetails.css";
import LineItem from "../../components/LineItem/LineItem";

export default function OrderDetails({
  cart,
  handleChangeQty,
  handleCheckout,
}) {
  if (!cart) return null;
  const lineItems = cart.lineItems.map((item) => (
    <LineItem
      lineItem={item}
      isPaid={cart.isPaid}
      key={item._id}
      handleChangeQty={handleChangeQty}
    />
  ));
  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {cart.isPaid ? <span>Furfilled ORDER</span> : <span>NEW ORDER</span>}
        <span>{new Date(cart.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ? (
          <>
            {lineItems}
            <section className="total">
              {cart.isPaid ? (
                <span className="right">TOTAL&nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  CHECKOUT
                </button>
              )}
              <span>{cart.orderQty}</span>
              <span className="right">${cart.orderTotal.toFixed(2)}</span>
            </section>
          </>
        ) : (
          <div className="noItems">No Items In Cart</div>
        )}
      </div>
    </div>
  );
}
