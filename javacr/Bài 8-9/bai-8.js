let banKinh, chuVi, dienTich,PI;
PI = 3.14;
banKinh= +prompt("Nhập vào bán kính ");
chuVi = (banKinh * 2)*PI;
dienTich = (banKinh*banKinh)*PI;


let a,b,c,tong;
a = +prompt("Nhập vào số tự nhiên a ");
b = +prompt("Nhập vào số tự nhiên b ");
c = +prompt("Nhập vào số tự nhiên c ");
tong = a+b+c;


document.write(" Chu vi =  " +chuVi);
document.write(" diện tích =  " +dienTich);
document.write(" Tổng 3 số vừa nhập =  " +tong);


