import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../../config";

import Preloader from "../Preloader";
import GoodsList from "../GoodsList";
import Cart from "../Cart";
import BasketList from "../BasketList";
import Alert from "../Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  // Изменить кол-во в корзине
  const changeOrder = (action, itemId) => {
    // Уменьшение
    if (action === "remove") {
      const newOrder = order.map((el) => {
        if (el.id === itemId && el.quantity > 1) {
          el.quantity -= 1;
        }
        return el;
      });
      setOrder(newOrder);
    }
    // Прибавление
    if (action === "add") {
      const newOrder = order.map((el) => {
        if (el.id === itemId) {
          el.quantity += 1;
        }
        return el;
      });
      setOrder(newOrder);
    }
  };

  // Добавление товара в корзину
  const addToBasket = (obj) => {
    const itemIndex = order.findIndex((i) => i.id === obj.id);

    if (itemIndex >= 0) {
      order[itemIndex].quantity += 1;
      setOrder([...order]);
    } else {
      setOrder([...order, obj]);
    }
    setAlertName(obj.name);
  };

  // Удаление товара из корзину
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    setOrder(newOrder);
  };

  // Переключение корзины
  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  // API Получаем товары с сервера
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((date) => {
        date.featured && setGoods(date.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList addToBasket={addToBasket} goods={goods} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          changeOrder={changeOrder}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export { Shop };
