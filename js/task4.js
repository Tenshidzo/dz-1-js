let a = prompt("Введіть довжину в мм: ");
let b = prompt("Ввеіть ширину в мм: ");

a /= 1000;
b/=1000;

let square = a*b;
let P = 2*(a + b);

alert(`Площа: ${square} кв.м.
Периметр: ${P} м.`);