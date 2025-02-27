let a= prompt("moi ban nhap so can nhap: ");
let b= parseFloat(Math.sqrt(a));
if(Number.isInteger(b)==true){
    alert(a +"la so chinh phuong");
}else{
    alert(a +"khong phai so chinh phuong");
}