// JavaScript Document
$(function(){
    var TIMER;//定义全局变量
    $(window).scroll( function() {
        clearTimeout(TIMER);//必须要有这句
        if( $(document).scrollTop() > 722 ){
            TIMER = setTimeout(function(){
                $("#top").addClass("abc");
            });
        }else{
            TIMER = setTimeout(function(){
                $("#top").removeClass("abc");
            });
        }
    });


    

});



// JavaScript Document



$(document).ready(function(){
  
  $("td").click(function(){
    $("ol img").attr("src",$(this).find('img').attr('src'));
  });
});






