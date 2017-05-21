/**
 * Created by yubo on 2017/5/21.
 */
function closeTopAdv(){
    $(".topAdv").slideUp(function(){
        $(this).remove();
    });
}

function showTabItem(_this,id){
    $("#"+id).parents(".tabBody").find(".item").hide();
    $("#"+id).show();
    $(_this).parent().find("a").removeClass("active");
    $(_this).addClass("active");
}
/*滚动产品*/
;(function($){
    $.fn.gundong = function(){
        var obj = $(this);
        var item =$(obj).find(".item");
        var w = $(item[0]).width() * item.length;
        $(obj).find(".inner").css({width:w+"px"});
        setInterval(function(){
            $(obj).find(".inner").animate({
                marginRight: -$(item[0]).width()+"px"
            }, function () {
                $(obj).find(".inner").css({ marginRight: "0px" }).find(".item:first").appendTo($(obj).find(".inner"));
            });
        },2000)
        //当鼠标放上去的时候，滚动停止，鼠标离开的时候滚动开始
        $("#con2_qhd_3").hover(function () { clearInterval(myar); }, function () { myar = setInterval('AutoScroll("#con2_qhd_3")', 1000) });
    }
})(jQuery)