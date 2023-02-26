// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані 
// повинен відображатися рядок "Anonymous".




const textInput = document.querySelector("#name-input");
console.log(textInput);
const output = document.querySelector("#name-output");
console.log(output);


// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
//   // output.textContent = inputValue === "" ? "Anonimous2" : event.currentTarget.value;
// });


// output.addEventListener('input', (event) => {
//   if (!event.currentTarget.value) {
//     textInput.textContent = "Anonymouss";
//   } else {
//     textInput.textContent = event.currentTarget.value;
//   }
// }
// )
  

// output.textContent = inputValue === "" ? "Anonimous2" : textInput;


textInput.addEventListener('input', newInput);


function newInput(event) {
  // console.log(event.currentTarget);
  output.textContent = event.currentTarget.value;

  if (!event.currentTarget.value) {
    output.textContent = 'Anonymous'
  }
}