var x1 = document.querySelectorAll('.n1');
x1[0].classList.remove('btn-outline-success');
x1[0].classList.add('btn');
x1[0].classList.add('btn-danger');
x1[0].classList.add('btn-block');

var x3 = document.querySelectorAll('.n3');
//Lệnh toggle dùng để xoá các class đã có sẵn trong classList và xoá nhựng class chưa có thông qua ví dụ dưới đây
//Do trong classList của x3 có chứa class btn nên khi dùng toggle cho btn thì lặp tức class btn bị xoá đi
x3[0].classList.toggle('btn');
//Do trong classList của x3 không có chứa class btn-block nên khi dùng toggle cho btn-block thì lặp tức class btn-block bị sẽ được thêm vào
x3[0].classList.toggle('btn-block');