// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його 
// вміст щодо правильної кількості введених символів.

const myInput = document.querySelector("#validation-input");


myInput.addEventListener('blur', checkInput);


function checkInput(event) {

    myInput.textContent = event.currentTarget.value;
    // console.log(myInput.textContent.length);
    // console.log(myInput.dataset.length)

    if (myInput.dataset.length == myInput.textContent.length) {
        console.log("true")
        // myInput.classList = 'valid';
        myInput.classList.remove("invalid");
        myInput.classList.add("valid");
    } else {
        console.log("false")
        // myInput.classList = 'invalid';
        myInput.classList.remove("valid");
        myInput.classList.add("invalid");
    }
  }
