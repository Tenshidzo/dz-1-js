let salad = prompt("Введіть салат або закуску: ");
let first = prompt("Введіть першу страву: ");
let second = prompt("Введіть другу страву: ");
let desert = prompt("Введіть дессерт: ");

let price_salad = 120.5;
let price_first = 165.2;
let price_second = 98.3;
let price_desert = 50.5;

let sum = price_salad + price_first + price_second + price_desert;

alert(`Ви замовили: 
        ${salad} - ${price_salad}
        ${first} - ${price_first}
        ${second} - ${price_second}
        ${desert} - ${price_desert}
Всього: ${sum} 
`)