// JavaScript Document
var dem = 1 ;
	
function left() {
	dem++;
	if (dem > 6)
	{
		dem = 1;
	}
	var x = document.getElementById("banner");
	x.src = "Banner/banner" + dem + ".jpg";
	x.style.width = "100%";
	x.style.height="430px";
}
function right() {
	dem--;
	if (dem < 1)
	{
		dem = 6;
	}
	var x = document.getElementById("banner");
	x.src = "Banner/banner" + dem + ".jpg";
	x.style.width = "100%";
	x.style.height="430px";
}


setInterval(right, 3000);
	$(document).ready(function(e) {
        $(window).scroll(function(){
			if($("html, body").scrollTop() > 80)
				$(".gototop").fadeIn();
			else
				$(".gototop").fadeOut();
		})
		$(".gototop").click(function(){
			$("html, body").animate({scrollTop: 0}, 2000);
		});
    });
		
function doiAnh(obj) {
	var im = document.getElementById("mainImgId");
	im.src = obj.src;
}

function dangNhap() {
	alert("Bạn đã đăng nhập thành công");
}
function dangKi() {
	var ht = document.getElementById("hoTenId").value;
	var tdn = document.getElementById("usenameId").value;
	var pw = document.getElementById("passwordId").value;
	var rq = document.getElementById("requestpassId").value;
	var radio = document.querySelectorAll("input[type=radio]");
	var gt;
	for(var i = 0; i < radio.length;i++)
	{
		if(radio[i].checked)
			gt = radio[i].value;
	}
	var mail = document.getElementById("emailId").value;
	var dt = document.getElementById("dienThoaiId").value;
	alert("Họ tên: " + ht + "\nTên đăng nhập: " + tdn +"\nMật khẩu: " + pw +"\nNhập lại mật khẩu: " + rq +"\nGiới tính: " + gt +"\nEmail: " + mail +"\nSố điện thoại: " + dt +"\nBạn đã đăng kí thành công");
}