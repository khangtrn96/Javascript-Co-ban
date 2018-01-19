//Tạo biến x để lưu nội dung có chứa class blockquote nằm trong class card
var x = document.querySelectorAll('.card .blockquote');
//Lúc này x là dạng mảng các nội dung chưa class blockquote
console.log(x);

//Xuất một phần tử trong mảng x
console.log(x[1]);

//Cách xử lý nội dung bằng cách dùng vòng lặp for
for (var i = 0; i < x.length; i++) {
	console.log(x[i]);
	//x[i].innerText = "Chào mọi người";
}

//Tạo biến y dùng để lưu nội dung chứa id là noidung
var a = document.querySelectorAll('#noidung');

//Lúc này a là một mảng. Nhưng ta cũng biết id chỉ có một nên mảng a có 1 phần tử mang id là noidung
console.log(a);

//Tạo biến b để nội dung có id là noidung mà không phải dạng mảng
var b = document.querySelector('#noidung');
console.log(b);

//Tạo biến c để lấy nội dung có kiểu data là data-thongbao
var c = document.querySelectorAll('[data-thongbao]');
console.log(c);