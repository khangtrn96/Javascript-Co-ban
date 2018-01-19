//demo tạo hàm và đếm phần tử trong javascript
var phantu = document.createElement('h1');

//gắn nội dung cho thẻ đó
phantu.innerHTML = " Đây là nội dung bên trong" ;//Đến đây ta có thẻ <h1> Đây là nội dung bên trong</h1>

//lấy id cần đặt nội dung vào
var khoicm = document.getElementById('caccomment');

//gắn giá trị của biến phantu vào thẻ có id có tên là caccomment
khoicm.appendChild(phantu);
