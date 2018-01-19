var truonghoc={
	"ten":"hcmus",
	"namthanhlap":"1960",
	"khoa":"toantin",
	"nghi_Tet":"có",
	chophep_nghiTet:function(){
		console.log("nghỉ Tết:"+ this.nghi_Tet);
	}
}

//tạo một biến tạm để sử dụng for(in)
var x;
for (x in truonghoc) {
	console.log(truonghoc[x]);
	//Ngoài ra còn có thể sử dụng truonghoc.x;
}