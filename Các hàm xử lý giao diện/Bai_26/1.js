var the_h5 = document.getElementsByTagName('h5');
for (var i = 0; i < the_h5.length; i++) {
	if (i!=1){
		the_h5[i].innerHTML = `<b>Khang là ai ?</b>`;
	} else{
		the_h5[i].innerHTML = `<div class='btn btn-outline-info btn-block'>Ai mà biết</div>`;
	}
}