// const users = [
//     { id: `000`, name: 'Elmir Head', friends: ['fsg Bush', 'Sheree Anthony'], tags: [`sdfdg`, `sdfsd`], email: 'elmahead@omatom.com', age: 24, gender: `male`},
//     { id: `001`, name: 'Ross Vazquez', friends: ['Sharlene Bush', 'Sheree Anthony'], tags: [`sdfdg`, `sdfsd`, `dsfebs`], email: 'rossvazquez@xinware.com', age: 45, gender: `wife` },
//     { id: `002`, name: 'Elma Head', friends: [ 'Elma Head', 'Sheree Anthony' ], tags: [`sdfdg`, `sdfsd`, `sdfsssss`, `11111`], email: 'elmahead@omatom.com', age: 95, gender: `wife` },
//     { id: `003`, name: 'Carey Barr', friends: ['Juls Bush', 'Sheree Anthony', `Katja Lu`], tags: [`sdfdg`, `uuuuu`, `sdfsd`], email: 'careybarr@nurali.com', age: 13, gender: `male` }
// ]
// console.table(users);

//-// метод map//

// 1 - додоємо нові властивості до кожного елементу// 

// const newValue = users.map(function (numbers) {
//     return {
//          ...numbers,
//         numbers: 1
//     }
// });
// console.table(newValue);

// 2.a - збільшуємо кожному елементу вік у 10 разів //

// const newAge = users.map(function (ages) {
//     return ages.age + ages.age * 10
// })
// console.log(newAge) //  [264, 495, 1045, 143]

// 2.b - якщо треба повернути новий масив з новим значенням age //

// const newAges = users.map(function (agesForAll) {
//     return {
//         ...agesForAll, // в створений об'єкт пушить усі властивості об'єктів масиву users;
//         age: agesForAll.age + agesForAll.age * 10, // в існуючу властивість age вписує нові результатиж 
//     }
// })
// console.log(newAges); // повертає НОВИЙ масив об'єктів з новими  значенням age

// 3 - змінюємо властивість в лише однго елемнта/ шукаємо по id

// const newElem = `001`;
// const updatedElem = users.map(function (newElement) {
//     if(newElement.id === newElem)
//     return {
//         ...newElement,
//         age: newElement.age = 13,
//     }
//     return newElement
// }
// )
// console.table(updatedElem);


//-// метод filter -   не змінює масив, а повертає там елементи, які відповідають умові функції - true

// вказуємо умову, за якою фільтрувати
// НЕ використовуємо filter, для пошуку ОДНОГО елементу, ЛИШЕ для колекцій

// 1 - повернемо ті елементи, яким більше 13 років;

// const bigElement = users.filter(function (bigAge) {
//     return bigAge.age > 13
// })
// console.table(bigElement);

// якщо в властивостях є true і false  то можна через метод фільтр вибрати, ті у яких true (false =!true), де true - це назва ключа
//  

//-// метод find - для пошуку УНІКАЛЬНОГО елементу в колекції 

// якщо не знайшов нічого - повертає underfind
// запишемо в короткій 
//const findId = `002`

// const findElem = users.find((id) => id.id === findId)
// console.log(findElem);

//-// метод every  i метод some // коли просто перевірити, чи всі елементи (evey) чи хоча б один (some) підходить під певний критерії 
// чи всі елементи більше 13 років 

// const allElemBid = users.every(function (bigAge) {
//     return bigAge.age >= 13
// })
// console.table(allElemBid);

// const someElemBig = users.some((someAge) => someAge.age = 13)
// console.log(someElemBig);

