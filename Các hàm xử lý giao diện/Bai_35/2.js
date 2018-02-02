document.addEventListener('DOMContentLoaded', function(){
	var nut = document.getElementById('nuthieuung');
	var khoiChuyenDong = document.getElementById('kcd') ; 
	var trangthai = "lan1" ;
	//console.log(nut);
	nut.onclick = function(){
		// console.log("Hello");
		if( trangthai == "lan1"){
			console.log("Trái sang phải");
			trangthai = "lan2";
			khoiChuyenDong.classList.remove('ko-dong');
			khoiChuyenDong.classList.add('dichchuyen1');
		}else{
			console.log("Phải sang trái");
			trangthai = "lan1" ;
			khoiChuyenDong.classList.remove('dichchuyen1');
		}
	};
}, false)
