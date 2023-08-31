export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <>
      <button
        className="btn-xs"
        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
      >
        -
      </button>
      <div className="LineItem">{lineItem.item.name}</div>
      <button
        className="btn-xs"
        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
      >
        +
      </button>
      <div>{lineItem.qty}</div>
      <div>${lineItem.extPrice.toFixed(2)}</div>
    </>
  );
}
