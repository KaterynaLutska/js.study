const nav = document.querySelector(".js-nav");

nav.addEventListener('click', onTagsClick)


// peaфакторинг// не працює, бо не та розмітка // 

// function onTagsClick(event) {
//     if (event.target.nodeName !== 'A')  // відсікаємо події, які для ul а не для кнопки / 
//     {
//         console.log('пока');
//         return
//     }
//     const nextActiveTag = event.target;
//     const activeTagValue = nextActivetag.dataset.value

//     setActiveTag(nextActiveTag)
//     updateOutput(activeTagValue)
// }

// function setActiveTag(nextActiveTag) {
//     const currentActiveTag = nav.currentTarget.querySelector('active'); // або nav // event.currentTagrget - це посилання де спіймалась поідя
//     console.log(`currentActiveTag:`, currentActiveTag); // не виходить// повертає null
    
//     if (currentActiveTag) {
//         currentActiveTag.classList.remove('active')
//     }
//     nextActiveTag.classList.add('active') // додає клас на активну кнопкуж 
// }

// function updateOutput(value) {
//     nav.activeTagOutput.textContent = value;
// }


function onTagsClick(event) {
    if (event.target.nodeName !== 'A')  // відсікаємо події, які для ul а не для кнопки / 
    {
        console.log('пока');
        return 
    }

    const nextActiveTag = event.target;
    const currentActiveLink = nav.querySelector(".active");




    const currentActiveTag = event.currentTarget.querySelector('active'); // або refs // event.currentTagrget - це посилання де спіймалась поідя
    console.log(`currentActiveTag:`, currentActiveTag); // не виходить// повертає null 
    console.dir(event.currentTarget);

    if (currentActiveTag) {
        currentActiveTag.classList.remove('active')
    }

    console.log(event.target); // дозволяє відловити елемент, на якому сталась подія
    nextActiveTag.classList.add('active') // додає клас на активну кнопкуж 
    console.log(event.target.nodeName);
    
}

nav.addEventListener("click", handleNavClick);


function handleNavClick(event) {
  event.preventDefault();
  
  const target = event.target;
  console.log("event target: ", target); // посмотрите что тут

  // Проверяем тип узла, если не ссылка выходим из функции
  if (target.nodeName !== "A") return;

  setActiveLink(target);
}

function setActiveLink(nextActiveLink) {
    if (currentActiveLink) {
    currentActiveLink.classList.remove("active");
  }

  nextActiveLink.classList.add("active");
}


/// копія // 

// function onTagsClick(event) {
//     if (event.target.nodeName !== 'A')  // відсікаємо події, які для ul а не для кнопки / 
//     {
//         console.log('пока');
//         return 
//     }

//     // const nextActiveTag = event.target;

//     const currentActiveTag = event.currentTarget.querySelector('active'); // або refs // event.currentTagrget - це посилання де спіймалась поідя
//     console.log(`currentActiveTag:`, currentActiveTag); // не виходить// повертає null 
//     console.dir(event.currentTarget);

//     if (currentActiveTag) {
//         currentActiveTag.classList.remove('active')
//     }

//     console.log(event.target); // дозволяє відловити елемент, на якому сталась подія
//     const nextActiveTag = event.target;
//     nextActiveTag.classList.add('active') // додає клас на активну кнопкуж 
//     console.log(event.target.nodeName);
    
// }

// function notActive(elem) {

// }
    

// nav.addEventListener("click", handleNavClick);
// function handleNavClick(event) {
//   event.preventDefault();
  
//   const target = event.target;
//   console.log("event target: ", target); // посмотрите что тут

//   // Проверяем тип узла, если не ссылка выходим из функции
//   if (target.nodeName !== "A") return;

//   setActiveLink(target);
// }

// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = nav.querySelector("a.active");

//   if (currentActiveLink) {
//     currentActiveLink.classList.remove("active");
//   }

//   nextActiveLink.classList.add("active");
// }
