const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL = 'https://fortniteapi.io/v1/shop?lang=ru';

export {
    API_KEY,
    API_URL
}

// const addToBasket = (obj) => {
//   // Если это первый товар то сразу его добовляем
//   if (!order.length) {
//     setOrder([obj]);
//   }
//   // Если найдет совпадение по ключам, переключится на true
//   let replicKey = false;
//   // Ищем совпадение по ключам, если находим, увеличиваем
//   // quantity на 1 и возвращаем новый массив
//   const newOrder = order.map((item) => {
//     if (item.id === obj.id) {
//       item.quantity++;
//       replicKey = true;
//     }
//     return item;
//   });
//   // В зависимости от того нашли мы совпадение по ключам или нет
//   // Добавит только старый-модифицированный массим или еще дополнительно и новый объект
//   replicKey ? setOrder([...newOrder]) : setOrder([...newOrder, obj]);
// };