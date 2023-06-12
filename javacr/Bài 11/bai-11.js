let a,b,c;
a = + prompt("Nhập vào số thứ nhất ");
b = + prompt("Nhập vào số thứ hai ");
c = + prompt("Nhập vào số thứ ba ");

let max, min;

max = (a>b&&a>c)? +a :
(b>a&&b>c) ?  +b :
 +c;
alert("số lớn nhất là  " +max);

min = (a<b&&a<c)?"" +a :
(b<a&&b<c) ?  +b :
 +c;
alert("số nhỏ nhất là  " +min);



