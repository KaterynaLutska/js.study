"use strict";
// дальше идет весь код файла

// -1- Як нормалізувати введені дані юзера//

// const superValue = "karkas";

// const userInput = prompt("Введи інформацію");
// console.log("userInput before: ", userInput);

// const normalizedInput = userInput.toLowerCase();
// console.log(`userinput after: `, userInput);
// console.log(`normalizedInput: `, normalizedInput);

// console.log(superValue === normalizedInput);

// - 2 -відкриваємо живий чат

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("conOpenChat: ", canOpenChat);

// // - 4 - перевірка підписк

// const subscription = "free";

// const canAccessContent = subscription === "vip" || subscription === "pro";
// console.log("canAccessContent: ", canAccessContent);

// - 5 - знижка в магазині

// const totalExpenses = 400;
// const payment = 500;
// let discount = 0;

// if (totalExpenses >= 100 && totalExpenses < 1000) {
//   discount = 0.02;
//   console.log("Ви наш улюблений клієнт! Знижка 2%");
// } else if (totalExpenses >= 1000 && totalExpenses < 5000) {
//   discount = 0.05;
//   console.log("Ви наш золотий клієнт");
// } else if (totalExpenses < 100) {
//   discount = 0;
//   console.log("Ви поки не наш клієнт");
// }

// const finalAmount = payment - payment * discount;
// console.log(finalAmount);

// console.log(
//   `Оформлюємо замовлення на суму ${finalAmount} зі знижкою ${discount * 100}%`
// );

//  - 3- цикл while

// let userInput;

// do {
//   userInput = prompt("Введи число 5");
//   userInput = Number(userInput);
// } while (userInput !== 5);

// const countryName = "индия";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const NO_DELIVERY = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country;

// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
// }
// switch (country) {
//   case CHINA:
//     price = 100;
//     break;
//   case AUSTRALIA:
//     price = 170;
//     break;
//   case INDIA:
//     price = 80;
//     break;
//   case JAMAICA:
//     price = 120;
//     break;
//   default:
//     message = NO_DELIVERY;
// }
// if (price > 0) {
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }
// console.log(message);

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

// нормалізує

// const userInput = prompt("Введи інформацію");

// console.log("countryName before: ", countryName);

// const normalizedInput =  countryName.toLowerCase();
// console.log(`countryName after: `, countryName);
// console.log(`normalizedInput: `, normalizedInput);

// console.log(countryName === normalizedInput);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
