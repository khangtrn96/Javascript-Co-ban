var hv1="Tai"
var hv2="Toan"
var hv3="Minh"

//Cách khai báo mảng thứ nhất. 
//Lúc này ta tạo mảng hv có giá trị phần tử sẵn bên trong là "Tai", "Tuan","Minh"
var hv=["Tai","Toan","Minh"]
console.log("Cho biết mảng có tên là hv gồm 3 phần tử");
console.log(hv);
console.log("Xuất giá trị mảng ở vị trí thứ 1");
console.log(hv[1]);

//Cách khai báo mảng thứ hai
//Lúc này ta tạo mảng gia không có giá trị phần tử tức có nghĩa nó rỗng
var gia=[];
//Lúc này ta bổ sung giá trị phần tử có trong mảng gia thông qua chỉ số
gia[0]=1000000
gia[1]=2000000
gia[2]=3000000
console.log(gia);

//Cách khai báo mảng thứ ba
//Ta dùng từ khoá new để tạo một mảng mới
var soluong = new Array('Kiet','Linh','Nga');
console.log(soluong);
console.log(soluong[2]);