// JavaScript Document
 $(function(){
        var $div_li =$("div.tab_menu ul li");
        $div_li.click(function(){
            $(this).addClass("selected")            //当前<li>元素高亮
                   .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
            $("div.tab_box > div")       //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
                    .eq(index).show()   //显示 <li>元素对应的<div>元素
                    .siblings().hide(); //隐藏其它几个同辈的<div>元素
        })
    });

$(function(){
        var div_uli = $("#tab_ubox li");
        div_uli.click(function(){
            $(this).addClass("selected")            //当前<li>元素高亮
                   .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
            var index = div_uli.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
            $("#tab_obox > li")       //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
                    .eq(index).show("fast","swing")   //显示 <li>元素对应的<div>元素
                    .siblings().hide("fast","swing"); //隐藏其它几个同辈的<div>元素
        })
    });



