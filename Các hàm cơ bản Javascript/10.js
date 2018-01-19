//Tạo một đối tượng cacmonan
var cacmonan={
	ten:"Thit kho tau",
	nguyenlieu:"Thit lon",
	gia:200
}
//gắn giá trị biến cacmonan cho biến monanso2
//Do biến cacmonan có kiểu đối tượng nên monanso2 cũng có kiểu đối tượng
//Thông qua quy tắc gán nên monanso2 dùng chung bộ nhớ với biến cacmonan
//Nên nếu thay đổi một phần tử trong monanso2 thì dẫn đến phần tử đó trong cacmonan cũng sẽ thay đổi
var monanso2= cacmonan;
monanso2.ten="Canh rau hen";
console.log(monanso2);
console.log(cacmonan);

//Khai báo một constructor có kiểu là Monan
//keyword this là dấu hiệu của constructor
function Monan(t,nl,g){
	this.ten=t;
	this.nguyenlieu=nl;
	this.gia=g;
}
// ta sử dụng khi keyword new khi muốn sử dụng constructor
var monan1= new Monan("kho bo","lap xưởng", 100);
console.log(monan1);