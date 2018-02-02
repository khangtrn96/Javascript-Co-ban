document.addEventListener('DOMContentLoaded',function(){
	//code ở đây
	var x1 = document.getElementById('n1');
	console.log(x1);

	//Tạo sự kiện click chuột cho x1
	x1.onclick = function(){
		console.log("Chào mừng bạn đến với thế giới này")
		//Thêm class dixuong cho x1
		x1.classList.add('dixuong');//sau đó định nghĩa CSS cho class dixuong
	};
},false);