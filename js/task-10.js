const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
let paste = document.querySelector('#boxes');


buttonCreate.addEventListener("click", () => {
  let amount = document.querySelector('#controls input').value;  
  createBoxes(amount);
});

buttonDestroy.addEventListener("click", destroyBoxes());



function createBoxes(amount) {
  // console.log(amount)
  const res = []

  for (let i=1; i <= amount; i+=1) {
    

    let newDiv = document.createElement("div");
    newDiv.textContent = i;
    newDiv.style.width = `${30 + i*10}px`;
    newDiv.style.height = `${30 + i*10}px`;
    newDiv.style.background = getRandomHexColor();
    res.push(newDiv);
}
  console.log(res);
  
  paste.append(...res);

}



function destroyBoxes() {
  paste.remove();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
// скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи
//  всі створені елементи.



