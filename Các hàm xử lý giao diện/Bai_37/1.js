document.addEventListener('DOMContentLoaded', function(){
	var arrow_list = document.getElementsByClassName('muiten');
	var khoi_list = document.getElementsByClassName('danhsach');
	//console.log(khoi_list);
	console.log(arrow_list);
	arrow_list[0].onclick = function(){
		//console.log('Hello');
		//this.style.color = 'white';//Cách này thay đổi mũi tên sang màu trắng nhưng không có tác dụng với class nên ta dùng cách toggle
		//this đại diện cho arrow_list[0]
		this.classList.toggle('muitentrang');
		khoi_list[0].classList.toggle('xuathien');
	} 
}, false);