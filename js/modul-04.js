// // ------ Приклади абстрагированого повторення -------

// // const printValue = function (value) {
// //   console.log(value);
// // };

// // const prettyPrint = function (value) {
// //   console.log("Logging value: ", value);
// // };

// // const repeat = function (n, action) {
// //   for (let i = 0; i < n; i += 1) {
// //     action(i);
// //   }
// // };

// // // Передаем printValue как callback-функцию
// // repeat(3, printValue);
// // // 0
// // // 1
// // // 2

// // // Передаем prettyPrint как callback-функцию
// // repeat(3, prettyPrint);
// // // Logging value: 0
// // // Logging value: 1
// // // Logging value: 2

// /// Приклад замикання функції ///

// // const shefCook = function (name) {
// //   return function (dish) {
// //     console.log(`${name} makes ${dish}`);
// //   };
// // };

// // const mango = shefCook(`Mango`);
// // const poly = shefCook(`Poly`);

// // mango(`кекс`);
// // poly(`чай`);

// /////-------------Приклад з вебіанару ------------
// // const printMessage = function (message) {
// //   console.log(message, `Z dfse`);
// // };

// // const higherOrderFunction = function (callback) {
// //   const string = "HOCs are awesome";
// //   callback(string);
// // };

// // higherOrderFunction(printMessage);

// // const numbers = [1, 2, 3, 4, 5];
// // // const map  // приймає масив а вертає масив результаів
// // const map = (array, cb) => {
// //   const result = [];
// //   for (const item of array) {
// //     result.push(cb(item));
// //     // console.log(item);
// //     console.log(item * 2);
// //   }
// //   return result;
// // };

// // const dublMap = map(numbers, (a) => a * 2);
// // console.log(dublMap);

// ///////

// // const filter = (array, callback) => {
// //   const result = [];
// //   for (const item of array) {
// //     const passed = callback(item);
// //     if (passed) {
// //       rusult.push(item);
// //     }
// //   }
// //   return result;
// // };

// // const filtered = filter(numbers, (number) => number === 0);
// // console.log(filtered);

// ////// функція репіт ///

// // const repeat = (count, action) => {
// //   for (let i = 0; i < count; i++) {
// //     action(i);
// //   }
// // };
// // repeat(100, (a) => console.log(`Hello`, a));

// ///
// // const fnF = function () {
// //   console.log(`Hello`);
// // };
// // const fnB = fnF;
// // console.log(`fnB === fnA: `, fnF === fnB);

// // const greet = function () {
// //   return `Wellcome to ${this.name} hotel!`;
// // };

// // const hotel = { name: "Resort Hotel" };

// // console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
// // console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"

// // const greet = function (guest) {
// //   return `${guest}, welcome to ${this.name}!`;
// // };

// // const hotel = { name: "Resort Hotel" };

// // const hotelGreeter = greet.bind(hotel, "Mango");

// // console.log(hotelGreeter()); // "Mango, wellcome to Resort Hotel!"

// // --- Задача з помилкоюю ------

// // const todos = {
// //   list: [],
// //   printThis() {
// //     console.log(`this:`, this);
// //   },
// //   add(todo) {
// //     this.list.pusch(todo)
// //     console.log (`${todo} added!`);
// //   },
// //   print() {
// //     for (const todo of this.todos) {
// //       console.log(todo);
// //     }
// //   }
// // }

// // const recipes = {
// //   list: (`tpamatos`, `груша`, `яблуко`)
// // }
// // todos.print();
// // todos.print.call(recipes, );
// // todos.print.bind(recipes) // визиває з новим котекстом 

// // // todos.printThis();
// // const todosPrintThis = todos.printThis;
// // todos.printThis()
// // todosPrintThis()


// //  == task - 3 == //
// // Створити обєкт піци з полями і методами

// // В обєкті має бути такі поля і методи:

// // поле для збереження розміру піци
// // поле для збереження списку добавок
// // поле для збереження списку соусів
// // метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// // метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// // метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// // метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// // метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// // метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// // метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// // метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// // метод що показує час приготуванни в хвилинах в залежності від складності піци
// // Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)

// const SIZES = {
//     BIG: { price: 25, cal: 100, time: 15 },
//     SMALL: { price: 15, cal: 50, time: 7 },
//     MEDIUM: { price: 15, cal: 50, time: 7 },
//     EXTRA: { price: 25, cal: 100, time: 20 },
// }
// const STUFFING = {
//     CHEESE: { name: "CHEESE", price: 6.5, cal: 45, time: 2 },
//     BEACON: { name: "BEACON", price: 10, cal: 70, time: 6 },
//     TOMATO: { name: "TOMATO", price: 12.1, cal: 4, time: 5 },
//     CHICKEN: { name: "CHICKEN", price: 9.3, cal: 30, time: 5.1 }
// }
// const SAUCES = {
//         MUSTARD: { name: "MUSTARD", price: 3, cal: 5, time: 1 },
//         KETCHUP: { name: "KETCHUP", price: 4.2, cal: 20, time: 1.5 },
//         BOLOGNESE: { name: "BOLOGNESE", price: 7.5, cal: 50, time: 3 },
//     }
//     // Створити всі методи і перевірити чи вони працюють

// const pizza = {
//     size: [],
//     stuff: [],
//     sauces: [],
//     isValid: false,

//     toShowSize() {
//         console.log(this.size)
//     },
//     toSetSize(value) {
//         if (this.size.includes(value)) return console.log("Такая добавка уже есть")
//         this.size.push(value)
//         // console.log(this.size)
//     },
//     setStuff(value) {
//         if (this.stuff.includes(value)) return console.log("Такая добавка уже есть")
//         this.stuff.push(value)
//         // console.log(this.stuff)
//     },
//     setSauces(value) {
//         if (this.sauces.includes(value)) return console.log(`Такой ${value.name} уже добавлен`)
//         this.sauces.push(value)
//         // console.log(this.sauces)
//     },

//     delStuff(value) {
//         if (!this.stuff.includes(value)) return console.log("Такой добавки нет")
//         for (let i = 0; i < this.stuff.length; i += 1) {
//             if (this.stuff[i] === value) {
//                 this.stuff.splice(i, 1)
//                 return console.log(this.stuff)
//             }
//         }
//     },

//     delSauces(value) {
//         if (!this.sauces.includes(value)) return console.log("Такого соуса нет")
//         for (let i = 0; i < this.sauces.length; i += 1) {
//             if (this.sauces[i] === value) {
//                 this.sauces.splice(i, 1)
//                 return console.log(this.sauces)
//             }
//         }
//     },

//     getCost(num) {
//         let total = 0
//         for (let i = 0; i <= num; i += 1) {
//             if (this.size[i] === undefined || this.stuff[i] === undefined || this.sauces[i] === undefined) continue
//                 // console.log(this.size[i].price)
//                 // console.log(this.stuff[i].price)
//                 // console.log(this.sauces[i].price)
//             total += this.size[i].price + this.stuff[i].price + this.sauces[i].price
//         }
//         return console.log(total)
//     },
//     getCallories(num) {
//         let total = 0
//         for (let i = 0; i <= num; i += 1) {
//             if (this.size[i] === undefined || this.stuff[i] === undefined || this.sauces[i] === undefined) continue
//                 // console.log(this.size[i].price)
//                 // console.log(this.stuff[i].price)
//                 // console.log(this.sauces[i].price)
//             total += this.size[i].cal + this.stuff[i].cal + this.sauces[i].cal
//         }
//         return console.log(total)
//     },

//     toShowOrder() {
//          console.log(this.size, this.stuff, this.sauces)
//     },


//     toGetTotalTime(num) {
//         let total = 0
//         for (let i = 0; i <= num; i += 1) {
//             if (this.size[i] === undefined || this.stuff[i] === undefined || this.sauces[i] === undefined) continue
//                 // console.log(this.size[i].price)
//                 // console.log(this.stuff[i].price)
//                 // console.log(this.sauces[i].price)
//             total += this.size[i].time + this.stuff[i].time + this.sauces[i].time
//         }
//         return console.log(total)
//     },

//     toValidateOrder() {

//     },
// }
// console.log(pizza)
// pizza.toSetSize(SIZES.BIG)
// pizza.setStuff(STUFFING.CHEESE)
// pizza.setSauces(SAUCES.MUSTARD)
// pizza.delStuff(STUFFING.TOMATO)
// pizza.getCost(SIZES.BIG, STUFFING.CHEESE, SAUCES.MUSTARD)
// pizza.getCallories(3)
// pizza.toGetTotalTime(4)



// const burger = {
//         size: [],
//         stuff: [],
//         sauces: [],
//         isValid: false,

//     }
//     // pizza.toSetSize.call(burger, SIZES.SMALL)
//     // pizza.setStuff.apply(burger, [STUFFING.BEACON])

// function myFunc(callback) {
//     callback()
// }
// myFunc(pizza.toSetSize.bind(burger, SIZES.EXTRA))

// -- Полідром --
// 1 варіант //

// function palindrom(str) {
//     str = str.toLowerCase();
//     // переводимо в масив
//     let str2 = str.split(``).reverse().join(``)
//     if (str === str2) return true;
//     else return false;
// } 
// console.log(palindrom(`hallo`));

//  // 2 варіант //
// const palindrom = (str) => {
//     return str === str.split('').reverse().join(``);
// }
// console.log(palindrom(`abba`));