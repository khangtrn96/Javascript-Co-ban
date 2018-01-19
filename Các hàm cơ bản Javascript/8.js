var x ="2017 là một năm tuyệt vời";

//Khai báo biến sử dụng indexOf
console.log("*sử dụng .indexOf");
var vitri=x.indexOf("tuyệt");


//nếu có chữ tuyệt trong x thì sẽ trả về vị trí của từ đó có trong chuỗi
//nếu không tìm thấy thì sẽ trả về -1
//Lúc này ta so sánh vitri với -1 để xuất ra câu lệnh thông báo cho người xem
if(vitri != -1){
	console.log("Đã tìm thấy chữ")
	//Sử dụng chức năng thay thế thống qua hàm replace
	 var moi= x.replace("tuyệt","perfect");
	 console.log(moi);
	 console.log(x);
}else{
	console.log("không tìm thấy")
}

//Khai báo biến sử dụng kiểu search
console.log("*Sử dụng x.search");
var check_string=x.search("là");

if(check_string !=-1){
	console.log("Đã tìm thấy chuỗi");
}else{
	console.log("không tìm thấy chuỗi đó");
}

//Khai báo biến sử dụng split để biến chuỗi thành mảng
console.log("");
var mang_form_chuoi=x.split("một");
//lúc này mảng bao gồm 2 phần tử "2017 là" và phần tử "năm tuyệt vời"
console.log(mang_form_chuoi);
console.log("+In từng phần tử trong mảng");
for (var i = 0; i < mang_form_chuoi.length; i++) {
	console.log(mang_form_chuoi[i]);
}