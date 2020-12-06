// // - Робота з масивом обєктів //

// - Створюємо картку для онлайн магазину ---

// const cart = {
//   items: [
//     { name: `apple`, price: 50, quantity: 1 },
//     { name: `banana`, price: 150, quantity: 1 },
//   ], // це корзина в магазині, куди кидають товари
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       console.log(item);
//       if (item.name === product.name) {
//         console.log(`Taкий продукт вже є, збільшуємо кількість`);
//         item.quantity += 1;
//         return;
//       }
//     }
//     console.log(`Новий товар, додаємо в корзину!`);
//     product.quantity = 1; // це кількість продуктів в корзину
//     this.items.push(product);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];
//       if (productName === item.name) {
//         // 1.05.48
//         console.log(`Знайшли`);
//         console.log(i);
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     // this.items.length = 0; це перший варіант але не найкращий
//     this.items = []; // так краще;
//   },
//   countTotalPrice() {
//     let total = 0;
//     for (const item of this.items) {
//       console.log(item);
//       total += item.price * item.quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         console.log(item);
//         item.quantity += 1;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         if (item.quantity - 1 === 0) {
//           this.remove(productName);
//           return;
//         }
//         item.quantity -= 1;
//       }
//     }
//   },
// };

// console.table(cart.getItems()); // краще для доступу використовувати методи, в цьому випадку getitems(). а не items
// cart.add({ name: `banana`, price: 150, quantity: 1 });
// cart.add({ name: `apple`, price: 50, quantity: 1 });
// cart.add({ name: `banana`, price: 150, quantity: 1 });
// cart.add({ name: `banana`, price: 150, quantity: 1 }); //тут назва об'якту який купуємо// це product });
// console.table(cart.getItems());
// console.table(`Total:`, cart.countTotalPrice());
// cart.increaseQuantity(`apple`);
// cart.decreaseQuantity(`apple`);
// console.table(cart.getItems());
// cart.decreaseQuantity(`apple`);
// cart.decreaseQuantity(`apple`);
// console.table(cart.getItems());

// function getAllPropValues(array, prop) {
//   "use strict";
//   const arrayProduct = [];
//   for (const product of products) {
//     if (product[prop] !== undefined) {
//       arrayProduct.push(product[prop]);
//     }
//   }

//   return arrayProduct;
// }

// - функція для піцеріїї //

// const SIZES = {
//   BIG: { price: 25, cal: 100, time: 15 },
//   SMALL: { price: 15, cal: 50, time: 7 },
//   MEDIUM: { price: 15, cal: 50, time: 7 },
// };

// const STUFFING = {
//   CHEESE: { price: 6.5, cal: 45, time: 2 },
//   BEACON: { price: 10, cal: 70, time: 6 },
//   TOMATO: { price: 12.1, cal: 4, time: 5 },
//   CHICKEN: { price: 9.3, cal: 30, time: 5.1 },
// };

// const SAUCES = {
//   MUSTARD: { price: 3, cal: 5, time: 1 },
//   KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
//   BOLOGNESE: { price: 7.5, cal: 50, time: 3 },
// };

// const pizza = {
//   size: null,
//   stuffings: [],
//   sauces: [],
//   addStuffing(stuffing) {
//     if (!this.stuffings.includes(stuffing)) {
//       this.stuffings.push(stuffing);
//     } else {
//       // console.log("Вже додано");
//     }
//   },
//   addSauce(sauce) {
//     if (!this.sauces.includes(sauce) && sauce.toUpperCase() in SAUCES) {
//       this.sauces.push(sauce);
//     }
//   },
//   removeStuffing(stuffing) {
//     if (this.stuffings.includes(stuffing)) {
//       const inexToDelete = this.stuffings.indexOf(stuffing);
//       this.stuffings.splice(inexToDelete, 1);
//     }
//   },
//   removeSauce(sauce) {
//     if (this.sauces.includes(sauce)) {
//       const inexToDelete = this.sauces.indexOf(sauce);
//       this.sauces.splice(inexToDelete, 1);
//     }
//   },
//   // getCost(num) {
//   //   let total = 0;
//   //   for (let i = 0; i <= num; i += 1) {
//   //     if (this.size[i] === undefined || this.stuffings === undefined || this.sauces === undefined) continue;
//   //      console.log(this.size[i]);
//   //     total += this.size[i].price + this.stuffings[i].price + this.sauces[i].price
//   //   }
//   //   return console.log(`Total: ${ total }`);
//   // },
//   getTotalPrice() {
//     const getPriceForSize = () => {
//       const sizeObject = SIZES[this.size];
//       const price = sizeObject.price;
//       // const price = SIZES[this.size].price; коротший варіант
//       // return SIZES[this.size].price; // ще короштий варіант
//       //  сonst getPriceForSize = () => return SIZES[this.size].priceж // і найкороштий варіант
//       return price;
//     };
//     const getPriceForSouses = () => {
//       let total = 0;
//       for (const sauce of this.sauces) {
//         const price = SAUCES[sauce].price;
//         total += price;
//       }
//       return total;
//     };
//     const getPriceForStuffing = () => {
//       let total = 0;
//       for (const stuffing of this.stuffings) {
//         const price = STUFFING[stuffing].price;
//         total += price;
//       }
//       return total;
//     };

//     const sizePrice = getPriceForSize();
//     const saucesPrice = getPriceForSouses();
//     const stuffingPrice = getPriceForStuffing();
//     // console.log(sizePrice + saucesPrice + stuffingPrice);
//   },
// };

// pizza.size = "BIG";
// pizza.addSauce("MUSTARD");
// pizza.addStuffing("BEACON");
// pizza.addSauce("BOLOGNESE");
// pizza.addSauce("KETCHUP");
// pizza.addSauce("MUSTARD");

// console.log(pizza.getTotalPrice());
// // console.log(pizza);

// // console.log(pizza.stuffings);
// pizza.addStuffing("Курка");
// pizza.addStuffing("Курка");

// pizza.addStuffing("Курка");

// pizza.addStuffing("Cheese");
// pizza.addStuffing("Cheese");

// // console.log(pizza.stuffings);
// // pizza.removeStuffing("Курка");
// // console.log(pizza.stuffings);
// pizza.addSauce("MUSTARD");
// // console.log(pizza.stuffings);

// pizza.addSauce("KETCHUP");
// pizza.addSauce("BOLOGNESE");
// // console.log(pizza.sauces); 
// pizza.removeSauce("BOLOGNESE");
// console.log(pizza.sauces);
// // console.log(pizza.getCost(`MUSTARD`, `BEACON`, `MEDIUM`)); 




// Функція для пошуку значень в рядку

// const loren =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis illo earum beatae dignissimos veniam inventore, eligendi, corporis consequuntur corrupti sunt, ut aliquam aliquid vero magni alias perferendis nostrum expedita?";
// const report = {};
// for (const letter of loren.toLowerCase()) {
//   if (`.,;!?`.includes(letter)) {
//     continue;
//   }
//   if (letter in report) {
//     report[letter]++;
//   } else {
//     report[letter] = 1;
//   }
// }
// console.log(report);

// ---- кількість голосних літер ----//

// function countVowels(string) {
//   const vowels = "aeiou";
//   let total = 0;
//   for (let item of string.toLowerCase()) {
//     if (vowels.includes(item)) {
//       total += 1;
//     }
//   }
//   console.log(total);
// }

// countVowels("rsdgob s oe nsl dso nwe lsbo sldkeow nsdllsd ");

// === Гамбурегр == 
// 1. завдання з такого списку:  1 hamburger, 4 hotdog, 2 coke, 4 milk' зробити ось такий: сake: 2, hamburger: 1; 
// приймає рядок і повертає об'єкет 


// const parselBasket = (basket) => {
//     const goods = basket.split(`, `);
//     const result = {};   
//     for (const good of goods) {  
//         const [count, name] = good.split(' '); // називає окремо 1 - сount і ім'я - name; 
//         result[name] = Number(count);
//     }
//     return result ;
// }

// const basket = parselBasket('1 hamburger, 4 hotdog, 2 coke, 4 milk');
// const data = {
//     2014: { hamburger: 1, coke: 0.5, milk: 0.4 },
//     2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
//     2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
// };

// const x = basket;
// let y = data;

// const countPrice = function (x, y) { // підраховує загальну вартість продкутів в кожному році 
//     const basketLists = Object.entries(x); // кількість продуктів в корзині 
//     let sum = 0;
//     for (const basketList of basketLists) {
//         const [name, count] = basketList;
//         const priceForYear = y[name];
//         if (y[name] === undefined) {
//             continue;
//         }
//         sum += priceForYear * count;
//     }
//     return sum;
// }
 
// const CountPricePerYear = () => {  /// форматує значення у форматі дата: сума
//     let totalInfo = {};
    
//     for (let [yearsName, pricePerYear] of Object.entries(data)) {
//         pricePerYear = countPrice(basket, pricePerYear);
//          console.log(`${yearsName}: ${pricePerYear}`);
//     }
// }    
// CountPricePerYear();

//  -- другий варіант --- 

// Initial data
// const exampleBasket = "1 hamburger, 4 hotdog, 2 coke, 4 milk";
// const data = {
//   2014: { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
//   2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
//   2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
//   // Adding more entries for testing
//   2017: { hamburger: 2.25, hotdog: 1.15, coke: 1.15, milk: 0.7 },
//   2018: { hamburger: 2.75, hotdog: 1.75, coke: 1.25, milk: 0.8 },
//   2019: { hamburger: 3, hotdog: 1.75, coke: 1.25, milk: 0.9 },
//   2020: { hamburger: 3.25, hotdog: 1.8, coke: 1.5, milk: 1 },
// };

// // Function to turn the string basket into an object basket
// const stringToObject = (stringBasket) => {
//   const basket = {};
//   stringBasket.split(", ")
//     .map((el) => el.split(" "))
//     .map((el) => (basket[el[1]] = +el[0]));
//   return basket;
// };

// // Function to count the price for the basket for different years
// const countBasket = (stringBasket, data) => {
//   // Turning the string basket into object basket with the help of stringToObject function
//   const basket = stringToObject(stringBasket);
//   // Declaring the object for final result
//   let result = {};

//   // Iterrating basket entries within iterated data entries to calculate the total price for each year
//   for (const year in data) {
//     let sum = 0;

//     for (const key in basket) {
//       sum += data[year][key] * basket[key];
//     }

//     result[year] = sum;
//   }

//   return result;
// };

// // Checking the result in Console

// console.log(countBasket(exampleBasket, data));


// function getAllPropValues(array, prop) {
//   "use strict";
//   // Write code under this line
//   let message = [];
//   for (const object of array) {
//       if (prop in object) {
//         console.log(prop);
//       message.push(object[prop]);
//     }
//   }

//   return message;
// }

//  1 варіант /// 
// function arrayPlusArray(arr1, arr2) {
//   let total = 0;
//   const b = arr1.concat(arr2)
//   for (const a of b) {
//     total = a + total;
//   }
//   console.log(total);
// }

// короткий варіант // 
// function arrayPlusArray(arr1, arr2) {
//   return arr1.concat(arr2).reduce((a, b) => a + b)
// }



// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 6]
// arrayPlusArray(arr1, arr2)



// var summation = function (num) {
// return Array.from({ length:num }, (v, i) => i + 1).reduce((a, b) => a+b)
// }



// function monkeyCount(n) {
//   let total = 0;
//   const sum = Array.from({ length: n }, (v, i) => i + 1);
//   console.log(sum);
//   for (let a of sum) {
//     total = a + total
//   }
//   return total
// }

// const monkey = 5;
// console.log(monkeyCount(5));

// function Hero(name) {
//     this.name = name || 'Hero';
//     this.position =  '00';
//     this.health = 100;
//     this. damage = 5;
//     this.experience =  0;
//  }

// console.log(Hero(name));

// function divide(weight){
//  return weight  % 2 === 0 ? true : false ;
// }


// function checkAlive (health) {
//   if ( -10 <= health <= 0) {
//     return false
//   } else  if (health <= 0 && health > -11)  {
//     return true
//   }
// }

// console.log(checkAlive( 5));


// var findAverage = function (nums) {
//   return nums.reduce((a,b) => a + b) / 
// }
// console.log(findAverage(1, 3, 4));


// const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;


// ------ підібрати  бали до середньо-арефметичного значення/ 

// function getGrade(s1, s2, s3) {
//   score = Math.round((s1 + s2 + s3) / 3);
//   if (score >= 90) return 'A';
//   else if (score >= 80) return 'B';
//   else if (score >= 70) return "C"
//   else if (score >= 60) return 'D'
//   else return 'F'
// }

// ----- функція для повтору строки кілька разів //
// 1 варіант 
// function repeatStr(n, s) {
//   let str = ''
//   for (let i = 0; i < n; i++) {
//     str +=s
//   }
//     return str
// }
//   console.log(repeatStr(5, '%')); 

// 2 варіант 

// function repeatStr(n, s) {
//   return s.repeat(n)
// }
// console.log(repeatStr(5, '%')); 

// ---- задача--- залишок від ділення 
// function isDivisible (n,x,y) {
//   return (n % x ) === 0 && ( n % y) === 0
// }

// console.log(isDivisible(48, 3, 4));


// const quarterOf = (month) => {
//   return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4
// }

// console.log(quarterOf(10))
  
//  функція для ініціалів //
// - 1 варіант // 
// function abbrevName(name) {
//   let i;
//   let a = '' 
//   for ( [i] of name.split(' ')) {
//     console.log(i);
//     a = `${a}.${[i]}`;
//   }
//   return a.toUpperCase().slice(1)
// }
// console.log(abbrevName("sam Harris"));

// 2 другий і третій варіанти
// const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()
 
// function abbrevName(name){
// return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }



// function removeVowels(player){
// return player.replace((/[aeiou]/g, ' ' ))
// }


// console.log(removeVowels("drake"));
// console.log((removeVowels("aeiou"), ""));
// console.log((removeVowels("dfdbedssd"), ""));

// const myImage = document.querySelector('img')
// console.log(myImage.getElementById('myId'));
// console.log(myImage('#myId'));
// console.dir(myImage);
// console.dir(myImage.alt);
// console.log(myImage.classList);
// console.log(myImage.data);
// console.log(myImage.tagName);
// console.log(object);

// const navList = document.querySelectorAll('.navList li')
// const navList2 = document.getElementsByClassName('navList-item')
// console.log(navList);
// console.dir(navList)

const myNeuImg = document.createElement('img')
console.log(myNeuImg);
console.dir(myNeuImg);

myNeuImg.src = 'https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'
myNeuImg.setAttribute('src', 'https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg')

const mainTitle = document.getElementById('mainTitle')
console.log(mainTitle);

mainTitle.after(myNeuImg)

mainTitle.textContent = 'Котошок'
mainTitle.classList.add('main-title')
console.log(mainTitle);

const myBtn = '<button id="myBtn">click</button>'
console.log(myBtn);
mainTitle.innerHTML += myBtn;

mainTitle.insertAdjacentHTML('afterend', myBtn)