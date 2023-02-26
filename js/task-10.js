const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
let paste = document.querySelector('#boxes');


buttonCreate.addEventListener("click", () => {
  let amount = document.querySelector('#controls input').value;  
  createBoxes(amount);
});


buttonDestroy.addEventListener('click', () => {
  destroyBoxes();
});


function createBoxes(amount) {
  // console.log(amount)
  const res = []

  for (let i=1; i <= amount; i+=1) {
    

    let newDiv = document.createElement("div");
    newDiv.textContent = i;
    newDiv.style.width = `${20 + i*10}px`;
    newDiv.style.height = `${20 + i*10}px`;
    newDiv.style.background = getRandomHexColor();
    res.push(newDiv);
}
  console.log(res);
  
  paste.append(...res);

}


function destroyBoxes() {
  let boxes = document.querySelector('#boxes');
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

