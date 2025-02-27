let cash = +prompt("Cash");
let month = +prompt("Month");
let interestRate = 4.3 / 100 / 12;
let interest =cash * interestRate * month;
alert(`${interest}`);