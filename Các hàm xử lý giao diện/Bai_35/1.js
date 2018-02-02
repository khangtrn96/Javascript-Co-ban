document.addEventListener('DOMContentLoaded', function(){
	var nut = document.getElementById('nuthieuung');
	var khoiChuyenDong = document.getElementsByClassName('cd') ; 
	var trangthai = "lan1" ;
	//console.log(nut);
	nut.onclick = function(){
		// console.log("Hello");
		if( trangthai == "lan1"){
			console.log("Trái sang phải");
			trangthai = "lan2";
			khoiChuyenDong[0].classList.remove('dichchuyen2');
			khoiChuyenDong[0].classList.add('dichchuyen1');
		}else{
			console.log("Phải sang trái");
			trangthai = "lan1" ;
			khoiChuyenDong[0].classList.remove('dichchuyen1');
			khoiChuyenDong[0].classList.add('dichchuyen2');
		}
	};
}, false)
