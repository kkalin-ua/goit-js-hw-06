const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const plaseToPast = document.querySelector('#ingredients');

// const res = []

// for (const ingredient of ingredients) {
//   const ingr = document.createElement("li");
  
//   ingr.textContent = ingredient;
//   ingr.classList = ingredient;
//   res.push(ingr);
//   }

//   plaseToPast.append(...res);



// const res2 = ingredients.map(ingredients => {
//     const ingr = document.createElement("li");
  
//     ingr.textContent = ingredients;
//     ingr.classList = ingredients;

//   return ingr;
// })

// // console.log(res2)
// plaseToPast.append(...res2);




const makeLiEl = (options) => {
  return options.map(option => {
    const ingr = document.createElement("li");
  
    ingr.textContent = option;
    ingr.classList = option;

  return ingr;
  })
}

const res3 = makeLiEl(ingredients);
plaseToPast.append(...res3);
// console.log(res3);

