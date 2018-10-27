$(function () {
    // 登录按钮事件
    $(".log").click(function () {
        $("#mask").css("display","block");
        $("#bob").css("display","block");
    })
    $(".close").click(function () {
        $("#mask").css("display","none");
        $("#bob").css("display","none");
    })

    // 注册按钮事件
    $(".reg").click(function () {
        $("#registered").css("display","block");
        $("#bob").css("display","block");
    })
    $(".close1").click(function () {
        $("#registered").css("display","none");
        $("#bob").css("display","none");
    })

    //尾部二维码
    $("#weixintu").mouseover(function () {
        $("#big-eweima").css("display","block");
    });
    $("#weixintu"). mouseout(function () {
        $("#big-eweima").css("display","none");
    });

        // 采集
        $("#collection").click(function (event) {
            event.stopPropagation();
            $("#tomcat").toggle();
        });
        document.onclick=function () {
        $("#tomcat").hide();
        };
        var list=$(".top-box2 #tomcat div");
        list.each(function (i,ele) {
            $(this).click(function () {
                $(ele).addClass("active").siblings().removeClass("active");
                $("#collection").text($(ele).text());

            })
        });

    //中部吸顶
    window.onscroll=function () {
        var scrollTop=document.documentElement.scrollTop;
        var t = $(".top1").height();
        if(scrollTop>=t){
            $("#central").show();
            $("#central").css({
                position:"fixed",
                top:"50px",
                zIndex:"100"
            })
            $(".get_back").fadeTo(0,1);
        }else {
            $("#central").hide();
            $(".get_back").fadeTo(0,0)
        }
    };
    // 加载更多
    var i=0;
    $(".load").click(function () {
        if(i===0){
            var  recommend_hide1=$("<div id='recommend_hide1'></div>");
            $(recommend_hide1).appendTo($(".content-box"));
            $("#recommend_hide1").load("activity1.html .box");
        }else if(i===1){
            var  recommend_new_hide1=$("<div id='recommend_new_hide1'></div>");
            $(recommend_new_hide1).appendTo($(".content-box"));
            $("#recommend_new_hide1").load("activity2.html .box");

        }else {
            $(".load").text("没有更多了")
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
            $(".row").removeClass("row").addClass("adust_996")
        }else{
            $(".menu_bar .search_box").css("width",400);
            $(".adust_996").removeClass("adust_996").addClass("row")
        }
    }


    //小图标
    $(".help").mouseenter(function () {
        $(".group_help").show();
    });
    $(".group_help").mouseleave(function () {
        $(".group_help").hide();
    });

    $(".plus").mouseenter(function () {
        $(".group_plus").show();
    });
    $(".group_plus").mouseleave(function () {
        $(".group_plus").hide();
    });

    //切换
    $(".program").click(function () {
        window.open("program.html")
    })

});


