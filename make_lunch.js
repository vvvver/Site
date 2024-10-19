import menu from "./data.js";


for (let i = 0; i < menu.length; i++) {
  //создаем блок dish_elem
  let dishElem = document.createElement("div");
  dishElem.classList.add('dish_elem');
  dishElem.dataset.dish = menu[i].category;
  // создаем картинку
  let img = document.createElement('img');
  img.src = menu[i].img;
  img.alt = menu[i].category;
  dishElem.appendChild(img);

  // создаем описание
  let price = document.createElement('p');
  price.classList.add('price');
  price.innerHTML = menu[i].price;
  dishElem.appendChild(price);

  let name = document.createElement('p');
  name.classList.add('name');
  name.innerHTML = menu[i].name;
  dishElem.appendChild(name);

  let weight = document.createElement('p');
  weight.classList.add('weight');
  weight.innerHTML = menu[i].weight;
  dishElem.appendChild(weight);

  // создаем кнопку
  let button = document.createElement('button');
  button.classList.add('add_dish');
  button.innerHTML = "Добавить";
  dishElem.appendChild(button);

  // добавляем dish_elem в dish
  let parent = document.getElementById(`dish_${menu[i].category}`);
  parent.appendChild(dishElem);
}


// вешаем слушатели событий

for(const elem of document.getElementsByClassName('add_dish')) {
  elem.addEventListener('click', () => {
    // некоторый функционал
  })
};