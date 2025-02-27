let a = +prompt("nhap gia tri a");
let b = +prompt("nhap gia tri b");
let c = +prompt("nhap gia tri c");
let delta = b*b-4*a*c;
if (delta < 0) {
	alert("vo nghiem");
} else {
	let x1 =  (-b + Math.sqrt(delta)) / (2 * a);
	let x2 =  (-b - Math.sqrt(delta)) / (2 * a);
	alert(`${x1} ${x2}`);
}
