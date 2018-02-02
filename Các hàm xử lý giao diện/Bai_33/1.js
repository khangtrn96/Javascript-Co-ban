document.addEventListener('DOMContentLoaded', function(){
 var x1 = document.getElementById('nut1');
 var x2 = document.getElementsByClassName('card');
 //console.log(x2[0]);

 x1.onclick = function(){
 	//Nhờ có toggle mà khi trong class có class diquaphai thì lập tức xoá class này đi. Nếu không có thì thêm class này vào
 	 	x2[0].classList.toggle('diquaphai');
 }
},false)