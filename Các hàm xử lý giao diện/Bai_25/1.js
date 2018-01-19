//lấy ra tất cả các thẻ h1 trong html
var so_the_h1 = document.getElementsByTagName('h1');
//lúc này so_the_h1 là một mảng chứa nội dung của các thẻ h1
console.log(so_the_h1);

// xuất nội dung của một thẻ h1 có trong mảng so_the_h1
console.log(so_the_h1[1]);

//lấy ra tất cả các thẻ có chứa thẻ p có trong html
var p = document.getElementsByTagName('p');

//Lấy nội dung của phần tử p[1] với keyword innerHTML đã học ở bài trước
console.log(p[1].innerHTML);

//thay đổi nội dung của phần tử p[1]
p[1].innerHTML = "Say O yeah!!";