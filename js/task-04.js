{/* <span id="value">0</span> */}
let valueСounterLink = document.querySelector('#value');
// console.log(valueСounterLink);
let valueСounter = 0
valueСounterLink.textContent = valueСounter;


const incBtn = document.querySelector('button[data-action="decrement"]');
// console.log(incBtn);

const addBtn = document.querySelector('button[data-action="increment"]');
// console.log(addBtn);


addBtn.addEventListener('click', () => {
    // console.log('+1');
    valueСounter += 1;
    // console.log(valueСounter);
    valueСounterLink.textContent = valueСounter;
    
})

incBtn.addEventListener('click', () => {
    // console.log('+1');
    valueСounter -= 1;
    // console.log(valueСounter);
    valueСounterLink.textContent = valueСounter;
    
})



