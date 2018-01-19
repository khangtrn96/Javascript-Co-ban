//Đây là cách dùng phổ thông khi muốn xuất nội dung kèm theo giá trị của biến
var ten = "Khang"
var nam = "2018"
console.log("Xin chào " + ten +" !"+  "Chúc mừng năm mới"+ nam+" Chào bạn");


var today = "Hôm nay trời trong xanh";
var comment = "<div class='cm-2'>" + today+ "</div>";
console.log(comment);


//Cách dùng template string để xuất nội dung
//template string tiện lợi cho việc xuống dòng mà cách gõ thông thường khó làm được
var comment2 = `<div class='cm-2'> ${today} </div>
				<h2>Tôi là ai giữa dòng đời này</h2>
				`;
console.log(comment2);