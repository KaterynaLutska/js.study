// Прототипне наслідування //
// const objB = {
//     x: 10,
//     z: 9,
// }
// // console.log(objB); 
// const objA = Object.create(objB);

// objA.z = 12;
// objA.q = 11;
// objA.x = 100; 
 
// console.log(objA);

// const objC  = {
// c: 15
// }

// objC.y = 14;
// console.log(objC);


// прототипне наслідування + конструктор//

// const Maneger = function (name, work) {
//     this.name = name;
//     this.work = work;
// };

// Maneger.prototype.works = function () {
//     this.work + 1;
// }

// const managerKatja = new Maneger("Katja", "journalis t")
// console.log(managerKatja);
// managerKatja.works()


// -- Лекція 1 //

// const Hero = function (name, xp) {
//     this.name = name;
//     this.xp = xp;
// }

// Hero.prototype.changeName = function (name) {
//     this.name = name;
// }

// const mango = new Hero(`Mango`, 1000);

// console.log(mango);

// задачки //
// class Hero {
//     constructor(name, xp)
//     {
//         this.name = name;
//         this.xp = xp;
//     }
//     changeName(name) {
//         this.name = name;
//     }
//     gainXp(amount) {
//         console.log(`${this.name} get ${amount} calloris`);
//         this.xp += amount;
//         console.log(`${this.name} get ${amount} calloris`);
//     }
// }

// const mango = new Hero(`Mango`, 1000)
// console.log(mango);
// mango.gainXp(2000)
// console.log(mango);


// class StringBuilder {
//     constructor(value) {
//         this._value = value;
//     }
//     get value () {
//        return this._value;
//     }
//     append(str) {
//         this._value = this._value += str;
//     }
//     prepend(str) {
//         this._value = str += this._value
//     }
//     pad(str) {
//     this.append(str);
//     this.prepend(str)
// }
// }

// class Car {
//     constructor() {
    
//         getSpecs(){ }
//         constructor(){ }
//         get price() { }
//         set price(value) { }
//         turnOn() { }
//         turnOff() { }
//         accelerate(value) { }
//         decelerate(value) { }
//         drive(hours) { }
//     }
// }
 
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

//  console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

//  console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// // console.log(mustang.price); // 4000



// class Car {
//     static getSpecs(car) { 
//          return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
//      }
//     constructor(obj) {
//         this.maxSpeed = obj.maxSpeed;
//         this.speed = 0;
//         this.isOn = false;  
//         this.distance = 0;
//         this._price = obj.price;
//     }
//     get price() {
//         return this._price;  
//      }
//     set price (value) {
//         this._price = value;
//     }
//     turnOn() {
//         this.isOn = true;
//      }
//     turnOff() { 
//         this.isOn = false
//         this.speed = 0;
//         }
//     accelerate(value) {
//         if (this.speed + value <= this.maxSpeed) {
//             this.speed = value + this.speed;
//         }
//         return this.speed
//     }
//    decelerate(value) {
//        if (this.speed - value > 0) {
//           this.speed = this.speed - value;
//         }   
//        else if (value + this.speed > 0) {
//          this.speed = 0;
//        }
//     }
//     drive(hours) {
//         if ( this.isOn = true) {
//             this.distance += this.speed * hours;
//         }
//      }
// }
 
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(mustang);

//  console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

//  console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000


// гетери и сетери //

// class User {
//     constructor(name, password = `ніт`) {
//         this.name = name;
//         this._password = password;
//     }
//     // getPassword() {
//     //     return this.value = value;
//     // }
//     get password() {
//         return this._password
        
//     }
//     // cangePassword(value) {
//     //     return this.password = value; 
        
//     // }
//     set password(value) {
//         return this._password = value;
//     }
// }
// const newUser = new User(`Katja`, `sdfsdb`);

// newUser.cangePassword(`vvvvvv`)
// console.log(newUser);
// // викликаємо гетере  //
// console.log(newUser.password); // sdfsdb
// // викликаємо сеттер //
// console.log(newUser.password = `vvvvv`); /// `vvvv`
// //    

// // супер// 

// class UserOld extends User {
//     static getPassword () // перед конструктором перераховуємо статичні методи// 
//     constructor() {
//         super ()
//         // вписуємо нові властивості}
//         }
//     //гетери и сетери// 
// }


/// - 6 modul ///

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// dirtyMultiply(numbers, 2);

// // Произошла мутация исходных данных
// console.log(numbers); // [2, 4, 6, 8, 10]


// const a = [1, 2, 3, 4, 5, 6];


// a.forEach(b => console.log(b));
// a.forEach((b, inx) => console.log(`index: ${inx}, value: ${b}`));

// const doublA = a.map(b => b * 2);
// console.log(doublA);


// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// const usersName = users.map(b => b.isActive)
// console.log(usersName);

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === '004');
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id

// const getUser = (b, id) => b.find(x => x.id === id)
// console.log(getUser(users, `001`));

//const getUserById = (arr, id) => arr.find(x => x.id === id);
// console.log(getUserById(users, '001'));



// / -- метод reduce --///
// const users = [
//     { name: 'Elmir Head', friends: ['fsg Bush', 'Sheree Anthony'], tags: [`sdfdg`, `sdfsd`], email: 'elmahead@omatom.com', age: 24, gender: `male`},
//     { name: 'Ross Vazquez', friends: ['Sharlene Bush', 'Sheree Anthony'], tags: [`sdfdg`, `sdfsd`, `dsfebs`], email: 'rossvazquez@xinware.com', age: 45, gender: `wife` },
//     { name: 'Elma Head', friends: [ 'Elma Head', 'Sheree Anthony' ], tags: [`sdfdg`, `sdfsd`, `sdfsssss`, `11111`], email: 'elmahead@omatom.com', age: 95, gender: `wife` },
//     { name: 'Carey Barr', friends: ['Juls Bush', 'Sheree Anthony', `Katja Lu`], tags: [`sdfdg`, `uuuuu`, `sdfsd`], email: 'careybarr@nurali.com', age: 13, gender: `male` }
// ]

// 10 задача - // 

// const getSortedUniqueSkills = (array) => array
//     .reduce((friends, user) => friends.concat(user.friends), [])
//     .filter(function (item, i, friends) {
//         return friends.indexOf(item) === i,
//             console.log(item),
//             console.log(i),
//             console.log(friends) })
//         .sort()
 
// console.log(getSortedUniqueSkills(users));
    
// const getSortedUniqueSkills = (array) => array
//     .reduce((skills, user) => skills.concat(user.skills), [])
//     .filter((item, i, skills) =>
//        skills.indexOf(item) === i)
//  .sort()
// ;

// const getSortedUniqueSkills = array => array
//     .reduce((newArray, { skills }) => {
//     const newSkill = skills.filter(el => !newArray.includes(el));
//     console.log(newSkill);
//     return [...newArray, ...newSkill];
//   }, []).sort();



 
// reduce, filter, sort
// Зібрати в один масив всі скіли. 
// Додавати лише ті, які не повторютьься
// Сортую за алфавітом 


// // 9 задача //

// const getNamesSortedByFriendsCount = (array) => array=[...array]
// .sort((first, next) => (first.friends.length - next.friends.length))
// .map(({name}) => (name));



//  console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Do tson', 'Sheree Anthony', 'Ross Vazquez' ]




// const totalAge = users.reduce(function (totalAge, userAge) {
//     return totalAge + userAge.age
// }, 0
// )
// console.table(totalAge); 

// const calculateTotalBalance = array.reduce(function (akk, index) {
//     return akk + index.balance
// }, 0
// );

// const number = [1, 2, 4, 5, 6, 9, 5, 6, 34, 24]

// number.sort()
// console.log(number); 

// // створюємо масив з тегів// 

// const totalTags = users.reduce(function (akk, user) {
//     akk.push(...user.tags)
//     return akk;
// },[])
// console.log(totalTags);

// Грязний варіант: підраховуємо оригінальні теги і ствоюємо з ник об'єкт з ключами// 
// const tagsStat = totalTags.reduce(function (acc, tag) {
//     if (acc.hasOwnProperty(tag)) {
//         acc[tag] += 1;
//         return acc;
//     }
//     acc[tag] = 1
//     return acc
// }, {});
// console.log(tagsStat);


 // теж саме тільки через тернарний оператор// 

// const tagsStat = totalTags.reduce(function (acc, tag) {
//     acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;
//     return acc;
// }, {});
// console.log(tagsStat)

 
// -- чистa функція, який щоразу повертає новий об'єкт, але це повільніший варіант// ///

// const tagsStat = totalTags.reduce(function (acc, tag) {
//     return {
//         ...acc,
//         [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1,
//     };
// }, {});

// console.log(tagsStat);


// -- reduce ввоїми руками  --// 




// --- перебір масива і виводимо найбільше значення ---- // 
// let val = 0;
// [3, 7, 2, 1, 78, 125, 99].forEach((el) => {

//     val = val > el ? val : el;
// });
// console.log(val);


//PS Деструктурирующее присваивание (ДП):
//Объект как параметр без ДП

// const object = {num : 2}
// function getNum (obj) { return obj.num; }
// console.log(getNum(object))

// //2  ДП
// const object = {num : 2}
// // const num  =  object.num;
// const { num } = object;
// console.log(num) // 2


// // Объект как параметр c ДП
// const object = [
//     { num: 2 },
// ]
// //function getNum (obj) { return obj.num; }
// function getNum ({num}) { return num; }
// console.log(getNum(object)) // 2



// const arr = Array(3)
//   .fill('')
//   .map((e,i) => ({['index']: i }));
// /* [ { index: 0 }, { index: 1 }, { index: 2 } ] */


// ///-- питання відповіді від Саші ///


// const clothes = {
//     red: true,
//     dark: false,
//     violent: false
// }

// const entries = Object.entries(clothes);
// console.table(entries);
// const selectedOptions = entries.filter(entry => entry[1])
// console.table(selectedOptions);