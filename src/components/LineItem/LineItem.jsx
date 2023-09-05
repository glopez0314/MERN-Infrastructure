import "./LineItem.css";

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <>
      <div className="LineItem">{lineItem.item.name}</div>
      {!isPaid && (
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
        >
          -
        </button>
      )}
      <span>{lineItem.qty}</span>
      {!isPaid && (
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
        >
          +
        </button>
      )}

      <div>${lineItem.extPrice.toFixed(2)}</div>
    </>
  );
}
