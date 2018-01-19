var dienthoai={
	hang: "Samsung",
	namsx: "2010",
	manhinh: "6 inch",
	xemgio: function(){console.log("Bay giờ là 8h");},
	xemngay: function(){console.log("Hom nay là ngày 20");}
}

// console.log(dienthoai.hang);
// console.log(dienthoai.namsx);
// //cách gọi một hàm. NHỚ LÀ PHẢI KÈM DẤU NGOẶC ĐƠN
// console.log(dienthoai.xemgio());

var tivi={
	hang:"Sony",
	kichthuocmanhinh:40,
	dophangiai:1080,
	namsx:"2015",
	internet:"có",
	youtube:"có",
	//muốn sử dụng một phần tử có trong đối tượng, ta khai bào keyword this đi kèm với phần tử đó
	ketnoi_mang: function(){console.log("Kết nối internet"+":"+this.internet)},
	xem_youtube: function(){console.log("Xem youtube:"+" "+this.youtube)},
	khanang_xemcap: function(){
		if(this.dophangiai/this.kichthuocmanhinh < 28){
		 	return "màn hình chất lượng tốt";
		}else {
			return "màn hình chất lượng kém";
		}
	}
}
console.log(tivi.hang);
console.log(tivi['kichthuocmanhinh']);
console.log(tivi.ketnoi_mang());
console.log(tivi.xem_youtube());
console.log(tivi.khanang_xemcap());
