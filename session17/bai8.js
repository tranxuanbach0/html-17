let d1 = '2006-10-08';
let d2 = '2006-11-01';
const date1 = new Date(d1);
const date2 = new Date(d2);
let mili = Math.abs(date2 - date1);
let result = mili / (1000 * 60 * 60 * 24);
alert(result);


