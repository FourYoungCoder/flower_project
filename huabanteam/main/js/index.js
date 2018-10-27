$(function () {
    //所有鼠标放上去的事件
    //头部
    var header_main_menu=$(".header_main_menu")
    $(".header_top .menu_nav").mouseover(function () {
        header_main_menu.show();
    });
    $(".header_main_menu").mouseleave(function () {
        header_main_menu.hide();
    });
//    搜索框
    var selection=$(".search_box .selection");
    $(".header_top .type").click(function (e) {
        e.stopPropagation();
       selection.toggle(200);

    });
    $(document).click(function () {
        selection.slideUp(200);
    });

//    点击搜索下拉列,交换数据
    var search_list=$(".search_box .selection li");
    search_list.each(function (i,ele) {
        $(this).click(function () {
            $(ele).addClass("selected").siblings().removeClass("selected");
            $(".header_top .type_val").text($(ele).text());
        });
    });
//底部工具
    $(".help").mouseover(function () {
        $(".group_help").show();
    });
    $(".plus").mouseover(function () {
        $(".group_plus").show();
    });
    $(".group_plus").mouseleave(function () {
        $(".group_plus").hide();
    });
    $(".group_help").mouseleave(function () {
        $(".group_help").hide();
    });
    $("#foot .weixin").mouseover(function () {
        $(".weixin_code").show();
    });
    $(".weixin_code").mouseleave(function () {
        $(".weixin_code").hide();
    });
//    处理大横幅的数据
    //注意拿到的数据是有缓存功能
    var date_banner=[
        {scr:"images/banner05.jpg",Photographer:"雪鱼"},
        {scr:"images/banner01.jpg",Photographer:"熊熊妹Yui"},
        {scr:"images/banner02.jpg",Photographer:"熊熊妹Yui"},
        {scr:"images/banner03.jpg",Photographer:"叉烧君"},
        {scr:"images/banner04.jpg",Photographer:"Ciao大榴莲！"},
    ];
    var index_banner=parseInt(Math.random()*5);

//    将获取到的数据设置UI界面
    $(".banner_img img").attr("src",date_banner[index_banner].scr);
    $(".banner_img a").text(date_banner[index_banner].Photographer);
    $(".banner_img img").fadeTo(500,1);

//广告的处理
    $(".ad .close").click(function () {
       $(this).parent().remove()
    });
    //加载图片
    var i=0;
    $(".more").click(function () {
        if(i===0){
            var  recommend_hide=$("<div id='recommend_hide'></div>");
            $(recommend_hide).appendTo($("#recommend-container"));
            $("#recommend_hide").load("load1.html .recommend-container",function () {
                $(".recommend_box").height($(".recommend_box").width());
            });
        }else if(i===1){
            var  recommend_new_hide=$("<div id='recommend_new_hide'></div>");
            $(recommend_new_hide).appendTo($("#recommend-container"));
            $("#recommend_new_hide").load("load2.html .recommend-container",function () {
                $(".recommend_box").height($(".recommend_box").width());
            });

        }else {
            $(".more").text("没有更多了")
        }
        i++;

    });
    adapt();
//监听Window视口改变
    $(window).resize(function () {
        adapt();
    });

    //做屏幕适配处理
        function adapt() {
            $(".recommend_box").css('height',$(".recommend_box").width());
            if($(window).width()<1200){
                $(".menu_bar .search_box").css("width",200);
                $(".row").removeClass("row").addClass("adust_996");


            }else{
                $(".menu_bar .search_box").css("width",400);
                $(".adust_996").removeClass("adust_996").addClass("row")
            }
        }

});
