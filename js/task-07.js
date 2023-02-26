// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, 
// перетягуючи повзунок, буде змінюватися розмір тексту.



const selectSize = document.querySelector("#font-size-control");
// console.log(selectSize);
const text = document.querySelector("#text");
// console.log(text);

// selectSize.addEventListener('input', checkSize);


selectSize.addEventListener("input", (event) => {
    // console.log(event.currentTarget.value);
    text.style.fontSize = `${event.currentTarget.value}px`;
});