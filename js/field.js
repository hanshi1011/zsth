// JavaScript Document

    
$(document).ready(function(){
    $('#labe-address a').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');

       
        if ($('#answerOrder span').hasClass('Address')) {
            $('.Address').html('地址：'+$(this).html());
            return;
        }else{
           $('#answerOrder').prepend('<span class="Address">地址：'+$(this).html()+'</span>'); 
        } 
        
    });

    $('#labe-num a').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');

       
        if ($('#answerOrder span').hasClass('num')) {
            $('.num').html('人数：'+$(this).html());
            return;
        }else{
           $('#answerOrder').prepend('<span class="num">人数：'+$(this).html()+'</span>'); 
        } 
        
    });

    $('#labe-star a').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');

       
        if ($('#answerOrder span').hasClass('star')) {
            $('.star').html('星级：'+$(this).html());
            return;
        }else{
           $('#answerOrder').prepend('<span class="star">星级：'+$(this).html()+'</span>'); 
        } 
        
    });

    $('#labe-style a').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');

       
        if ($('#answerOrder span').hasClass('style')) {
            $('.style').html('风格：'+$(this).html());
            return;
        }else{
           $('#answerOrder').prepend('<span class="style">风格：'+$(this).html()+'</span>'); 
        } 
        
    });
//点击清空条件
    $('#answerOrder a').click(function(){
        $('#answerOrder span').remove();
        $('.labe a').removeClass('selected');
        $('.selecte').addClass('selected').siblings().removeClass('selected');
    });



     $(window).scroll( function() {
        var m =$(document).scrollTop();
        if(m>450){
            $("#addres").addClass("maptop");
        }else{
            $("#addres").removeClass("maptop");
        }
    });

    $('.labe a').click(function(){
        $('.labe-btn').show();
    });
    $('#answerOrder a').click(function(){
        $('.labe-btn').hide();
    });

});







