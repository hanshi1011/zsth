$(document).ready(function(){
	$('#urgent').click(function(){
		$('#xuqiu').hide();
		$('#urgent_content').css('display','block');
	});

	$('.banner-box-h').click(function(){
		$('#xuqiu').show();
		$('#urgent_content').css('display','none');
	});
	//找场地 加急切换

	$('#sign_in').click(function(){
		$('#xuqiu').hide();
		$('#number').css('display','block');
	});

	$('#back').click(function(){
		$('#xuqiu').show();
		$('#number').css('display','none');
	});

	$('#sign_in_urgent').click(function(){
		$('#urgent_content').hide();
		$('#number_urgent').css('display','block');
	});

	$('#back_urgent').click(function(){
		$('#urgent_content').show();
		$('#number_urgent').css('display','none');
	});


$(window).scroll(function() {
	var m =$(document).scrollTop();
    if(m>450){
        $(".header-top").addClass("header-top1");
        $(".header-text").addClass("span1");
        $(".header-top-img").css("margin-top","0px");
        $(".header-box").css("margin-top","0px");
    }else{
        $(".header-top").removeClass("header-top1");
        $(".header-text").removeClass("span1");
        $(".header-top-img").css("margin-top","16px");
        $(".header-box").css("margin-top","16px");
    }

   

	if (m > 50) {
		$('.side_bar').fadeIn();
	} else {
		$('.side_bar').fadeOut();
	};


	if (m > 0) {
		$('#maodian1').addClass('side_active').siblings().removeClass('side_active');
	};
	if (m > 550) {
		$('#maodian2').addClass('side_active').siblings().removeClass('side_active');
	};
	if (m > 1050) {
		$('#maodian3').addClass('side_active').siblings().removeClass('side_active');
	};
	if (m > 1450) {
		$('#maodian4').addClass('side_active').siblings().removeClass('side_active');
	};
	if (m > 2100) {
		$('#maodian5').addClass('side_active').siblings().removeClass('side_active');
	};
	if (m > 2400) {
		$('#maodian6').addClass('side_active').siblings().removeClass('side_active');
	};
	if (m > 2800) {
		$('#maodian7').addClass('side_active').siblings().removeClass('side_active');
	};

});


function maodian(id){ //传锚点的id，就会慢慢滑下
	$(id).click(function(){
		$('html,body').animate({
			scrollTop:$($(this).attr('href')).offset().top-50 //有吸顶条的需要减100左右没有可以不减。
		},{
			duration:500,
			easing:'swing'	
		});
		return false;
	});
};

maodian('#maodian1');
maodian('#maodian2');
maodian('#maodian3');
maodian('#maodian4');
maodian('#maodian5');
maodian('#maodian6');
maodian('#maodian7');

	



	J(function(){
    J('#inp1').calendar({ minDate:'%y-%M-%d' });
    J('#inp9').calendar({ minDate:'%y-%M-%d' });
    
	
});

function opcal(){
    J.calendar.Show();
}




$(function(){
function show(){
   var x = 68;     
    var y = 24;     
    var rand = parseInt(Math.random() * (x - y + 1) + y);     
   $(".button-row-strong").html("").append(rand );     
}
setInterval(show,3000);



});






});

