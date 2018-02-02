document.addEventListener('DOMContentLoaded', function(){
	// var nut = document.getElementById('n1');
	// Tạo mảng hieuung để lưu các thẻ có class nuttonghop
	var hieuung = document.getElementsByClassName('nuttonghop');
	for (var i = 0; i < hieuung.length; i++) {
		hieuung[i].onclick = function(){
		// console.log('Hello');
		//Dùng getAttribute để lấy thuộc tính có dạng data-thongtin
		//Từ khoá this ám chỉ biến nut
		var mk = this.getAttribute('data-thongtin');
		console.log(mk);
		}
	}
}, false);