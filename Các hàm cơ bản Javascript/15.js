//tạo mảng
var mangdl = [
	{
		id:1,
		ten:"Canon M10",
		anh:"https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/6/0/6000712761323_1.u3059.d20170808.t104412.652046.jpg",
		noidung:"Máy ảnh nhỏ gọn tiện lợi"
	},
	{
		id:2,
		ten:"Sony A6000",
		anh:"https://vcdn.tikicdn.com/cache/200x200/media/catalog/product/a/5/a5100_1.u2409.d20170322.t090213.3271.jpg",
		noidung:"Máy ảnh Sony tầm trung chụp đẹp"
	}
];

//Có 2 cách dùng để truy cập một phần tử của một đối tượng trong mảng
//Cách 1
console.log(mangdl[0].anh);

//Cách 2
// console.log(mangdl[1][ten]);

//Dùng câu lệnh for để xử lý các phần tử có trong mảng mangdl
for (var i = 0; i < mangdl.length; i++) {
	//Bước 1
	var noidung1khoi= `<div class="kcm" id = "kcm-${mangdl[i].id}">
					<img src="${mangdl[i].anh}" alt="" class="float-xs-2 pr-2">
					<b>${mangdl[i].ten}</b> 
					<span>${mangdl[i].noidung}</span>
				</div>`
	//tạo phần tử html
	var phantumoi = document.createElement('div');

	//đặt nội dung mẫu ở Bước 1:
	phantumoi.innerHTML = noidung1khoi;

	//lấy id
	var khoi_noidung_bo = document.getElementById('caccomment');

	//Đính nội dung vào khoi_noidung_bo
	khoi_noidung_bo.appendChild(phantumoi)
	//console.log(phantumoi);
}