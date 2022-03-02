import React from "react";

function BasketItem(props) {
  const { id, name, price, quantity } = props.item;
  const { removeFromBasket, changeOrder } = props;

  return (
    <li className="collection-item flex unselectable">
      {name}
      <i
        className="material-icons flex-item"
        onClick={(e) => changeOrder(e.target.textContent, id)}
      >
        remove
      </i>
      {quantity}
      <i
        className="material-icons flex-item"
        onClick={(e) => changeOrder(e.target.textContent, id)}
      >
        add
      </i>
      {price * quantity} тг.
      <i
        className="material-icons basket-delete flex-delete"
        onClick={() => removeFromBasket(id)}
        style={{ color: "#e16666" }}
      >
        delete
      </i>
    </li>
  );
}

export default BasketItem;
