let grivnya = prompt("Введіть кількість гривнів: ");
let euro = prompt("Введіть курс євро: ");

let amountEuro = grivnya/euro;
alert(`${grivnya} грн це ${amountEuro.toFixed(2)} евро`);

let dollar =  prompt("Введіть курс доллара: ");
let amountDollar = grivnya/dollar;
alert(`${grivnya} грн це ${amountDollar.toFixed(2)} долларів`);