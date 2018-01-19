//Ví dụ về từ số biến thành chuỗi dựa vào hàm soString()
var so1= 10;
var so2= 20;
so1=so1.toString();
console.log(so1+so2);

//Ví dụ về biến chuỗi thành số dựa vào hàm Number()
var chuoi1= "10";
var so2= 20;
chuoi1=Number(chuoi1);
console.log(chuoi1 + so2); 

//Ví dụ về biến chuỗi thành số nguyên
var a=parseInt("10")+"\n" ;
var b=parseInt("10.00")+"\n" ;
var c=parseInt("10.33")+"\n" ;
var d=parseInt("34 45 66")+"\n" ;
var e=parseInt(" 60 ")+"\n" ;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
//anonymous:không tên
//Nếu dùng một hoặc hai lần thì có thể dùng loại hàm này
//Thường sẽ gắn với biến
var z = function(x,y){
	return (x+y)/2;
}

console.log(z(2,4));


//closure function_1
function chao(){
	var ten ="Khangdt";
	return function(){
		console.log(" Chào, tôi tên " + ten);
	}
}

//Gọi hàm h nên không thể xuất ra giá trị "Chào, tôi tên Khang"

var h = chao();//Lúc này h là hàm anonymous
//Gọi hàm h
h();

//closure function_2
function thongbao(){
	var nam =2018;
	nam= 1+ " /"+ 1+ " "+ nam;
	//ham return có tác dụng cho phép dừng tại đây. Cho dù sau hàm return 
	//ta gõ tiếp những dòng lệnh khác thì vẫn không thực hiện
	return function(){
		console.log("Chúc mừng năm mới "+nam);
	}
	nam=" không thể thực hiện dòng lệnh này"+ nam;
	
}
var t= thongbao();
t();