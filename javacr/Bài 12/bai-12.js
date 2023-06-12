let a,tram,chuc,donvi;
a > 100;
a = + prompt(" Nhập vào số tự nhiên có 3 chữ số: ");
tram = Math.floor(a%10);
chuc=  Math.floor((a/10)%10);
donvi =  Math.floor((a/100)%10);

let sodaoNguoc = (tram*100)+(chuc*10)+donvi;
alert("số đảo ngược là: " +sodaoNguoc);
