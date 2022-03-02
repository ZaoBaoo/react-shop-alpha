import React from "react";
import BasketItem from "./BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    changeOrder = Function.prototype,
  } = props;

  const totalPrice = order.reduce(
    (accPrice, item) => item.price * item.quantity + accPrice,
    0
  );

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            item={item}
            removeFromBasket={removeFromBasket}
            changeOrder={changeOrder}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}

      <li className="collection-item active total-price">
        <span>Общая стоимость: {totalPrice} тг.</span>
        <button className="btn-small">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BasketList;
