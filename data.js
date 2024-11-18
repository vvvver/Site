const menu = [
  {
    img: "./src/soups/gazpacho.jpg",
    price: "195 &#8381",
    name: "Гаспачо",
    keyword: "gaspacho",
    weight: "350г",
    category: "soup",
    kind: "veg",
  },
  {
    img: "./src/soups/mushroom_soup.jpg",
    price: "185 &#8381",
    name: "Грибной суп-пюре",
    keyword: "mushroom",
    weight: "330г",
    category: "soup", 
    kind: "veg",
  },
  {
    img: "./src/soups/norwegian_soup.jpg",
    price: "270 &#8381",
    name: "Норвежский суп",
    keyword: "norvezskiy",
    weight: "330г",
    category: "soup", 
    kind: "fish",
  },
  {
    img: "./src/soups/chicken.jpg",
    price: "330 &#8381",
    name: "Куриный суп",
    keyword: "chicken_soup",
    weight: "350г",
    category: "soup", 
    kind: "meat",
  },
  {
    img: "./src/soups/ramen.jpg",
    price: "375 &#8381",
    name: "Рамен",
    keyword: "ramen",
    weight: "425г",
    category: "soup", 
    kind: "meat",
  },
  {
    img: "./src/soups/tomyum.jpg",
    price: "650 &#8381",
    name: "Том ям с креветками",
    keyword: "tomyum",
    weight: "500г",
    category: "soup", 
    kind: "fish"
  },
  {
    img: "./src/main_course/friedpotatoeswithmushrooms1.jpg",
    price: "150 &#8381",
    name: "Жареная картошка с грибами",
    keyword: "friedpotato",
    weight: "210г",
    category: "main_dish", 
    kind: "veg"
  },
  {
    img: "./src/main_course/lasagna.jpg",
    price: "385 &#8381",
    name: "Лазанья",
    keyword: "lasagna",
    weight: "310г",
    category: "main_dish", 
    kind: "meat"
  },
  {
    img: "./src/main_course/chickencutletsandmashedpotatoes.jpg",
    price: "225 &#8381",
    name: "Котлеты из курицы с картофельным пюре",
    keyword: "chicken",
    weight: "280г",
    category: "main_dish",
    kind: "meat" 
  },
  {
    img: "./src/main_course/fishrice.jpg",
    price: "320 &#8381",
    name: "Рыбная котлета с рисом и спаржей",
    keyword: "fishrice",
    weight: "270г",
    category: "main_dish", 
    kind: "fish"
  },
  {
    img: "./src/main_course/pizza.jpg",
    price: "450 &#8381",
    name: "Пицца Маргарита",
    keyword: "pizza",
    weight: "470г",
    category: "main_dish",
    kind: "veg" 
  },
  {
    img: "./src/main_course/shrimppasta.jpg",
    price: "340 &#8381",
    name: "Паста с креветками",
    keyword: "shrimppasta",
    weight: "280г",
    category: "main_dish", 
    kind: "fish"
  },
  {
    img: "./src/salads_starters/caesar.jpg",
    price: "370 &#8381",
    name: "Цезарь с цыпленком",
    keyword: "caesar",
    weight: "220г",
    category: "salad_starter",
    kind: "meat"
  },
  {
    img: "./src/salads_starters/caprese.jpg",
    price: "350 &#8381",
    name: "Капрезе с моцареллой",
    keyword: "caprese",
    weight: "235г",
    category: "salad_starter", 
    kind: "veg"
  },
  {
    img: "./src/salads_starters/frenchfries1.jpg",
    price: "280 &#8381",
    name: "Картофель фри с соусом Цезарь",
    keyword: "frenchfries_caesar",
    weight: "235г",
    category: "salad_starter", 
    kind: "veg"
  },
  {
    img: "./src/salads_starters/frenchfries2.jpg",
    price: "260 &#8381",
    name: "Картофель фри с кетчупом",
    keyword: "frenchfries",
    weight: "235г",
    category: "salad_starter", 
    kind: "veg"
  },
  {
    img: "./src/salads_starters/saladwithegg.jpg",
    price: "330 &#8381",
    name: "Корейский салат с овощами и яйцом",
    keyword: "saladwithegg",
    weight: "250г",
    category: "salad_starter",
    kind: "veg" 
  },
  {
    img: "./src/salads_starters/tunasalad.jpg",
    price: "480 &#8381",
    name: "Салат с тунцом",
    keyword: "tunasalad",
    weight: "250г",
    category: "salad_starter", 
    kind: "fish"
  },
  {
    img: "./src/beverages/orangejuice.jpg",
    price: "120 &#8381",
    name: "Апельсиновый сок",
    keyword: "orange_juice",
    weight: "300мл",
    category: "drink", 
    kind: "cold"
  },
  {
    img: "./src/beverages/applejuice.jpg",
    price: "90 &#8381",
    name: "Яблочный сок",
    keyword: "apple_juice",
    weight: "300мл",
    category: "drink", 
    kind: "cold"
  },
  {
    img: "./src/beverages/carrotjuice.jpg",
    price: "110 &#8381",
    name: "Морковный сок",
    keyword: "carrot_juice",
    weight: "300мл",
    category: "drink", 
    kind: "cold"
  },
  {
    img: "./src/beverages/cappuccino.jpg",
    price: "180 &#8381",
    name: "Капучино",
    keyword: "capuccino",
    weight: "300мл",
    category: "drink", 
    kind: "hot"
  },
  {
    img: "./src/beverages/greentea.jpg",
    price: "100 &#8381",
    name: "Зеленый чай",
    keyword: "greentea",
    weight: "300мл",
    category: "drink", 
    kind: "hot"
  },
  {
    img: "./src/beverages/tea.jpg",
    price: "90 &#8381",
    name: "Черный чай",
    keyword: "tea",
    weight: "300мл",
    category: "drink", 
    kind: "hot"
  },
  {
    img: "./src/desserts/baklava.jpg",
    price: "220 &#8381",
    name: "Пахлава",
    keyword: "paklava",
    weight: "300гр",
    category: "dessert", 
    kind: "average"
  },
  {
    img: "./src/desserts/checheesecake.jpg",
    price: "240 &#8381",
    name: "Чизкейк",
    keyword: "checheesecake",
    weight: "125гр",
    category: "dessert", 
    kind: "small"
  },
  {
    img: "./src/desserts/chocolatecake.jpg",
    price: "270 &#8381",
    name: "Шоколадный торт",
    keyword: "chocolatecake",
    weight: "140гр",
    category: "dessert", 
    kind: "small"
  },
  {
    img: "./src/desserts/chocolatecheesecake.jpg",
    price: "260 &#8381",
    name: "Шоколадный чизкейк",
    keyword: "chocolatecheesecake",
    weight: "125гр",
    category: "dessert",
    kind: "small" 
  },
  {
    img: "./src/desserts/donuts.jpg",
    price: "650 &#8381",
    name: "Пончики (6 штук)",
    keyword: "donuts6",
    weight: "700гр",
    category: "dessert", 
    kind: "big"
  },
  {
    img: "./src/desserts/donuts2.jpg",
    price: "410 &#8381",
    name: "Пончики (3 штуки)",
    keyword: "donuts3",
    weight: "700гр",
    category: "dessert", 
    kind: "average"
  }
];

export default menu;