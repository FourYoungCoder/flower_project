$(function () {
//中部吸顶
    var navHeight = $("#nav").height();
    $(window).scroll(function () {
         var top = $(window).scrollTop();
         if (top>navHeight) {
            $("#nav").css({
                position:"fixed",
                top:0,
                backgroundColor:"#fff",
            });

            $("#name,#name1,#name2,#name3").css({
                color:"#000"
            });
            $("#name3").css({
                backgroundColor:"#eee"
            });
             $("#logo1").css({
                 opacity: "1",
             });
             $("#icon1").css({
                 opacity: "1"
             });
             $("#name3").hover(function () {
                 $("#name3").css({
                     color:"#fff"
                 })
             },function () {
                 $("#name3").css({
                     color:"#000"
                 })
             });
         }else{
             $("#nav").css({
                 position:"absolute",
                 top:0,
                 backgroundColor:"transparent",
             });
             $("#name,#name1,#name2,#name3").css({
                 color:"#fff"
             });
             $("#name3").css({
                 border:"1px solid #fff",
                 backgroundColor:"transparent"
             });
             $("#logo1").css({
                 opacity: "0",
             });
             $("#icon1").css({
                 opacity: "0"
             })
         }
    });

        //自动播放轮播图
        $(".slider>img").eq(0).fadeTo(10,1);
        var i = 0;
        setInterval(function () {
            i++;
            if (i>4){
                i=0;
            }
            $(".slider>img").eq(i).fadeTo(1000,1).siblings().fadeOut();
    }, 3000);

    //轮播图
    //监听点击事件
        var currIndex = 0;
        var listW = $("#list>.photo").width();
        $.each($("#list>.photo"),function (index,ele) {
            if (index!=0){
                ele.style.left = listW+"px";
            }
        });
        //右边按钮
        $("#next").click(function () {
            $('#list>.photo').eq(currIndex).stop().animate({'left': -listW});
            currIndex++;
            if (currIndex > 2) {
                currIndex = 0;
            }
            $('#list>.photo').eq(currIndex).stop().css('left', listW).animate({'left': 0});
            iconMove();

        });
        //左边按钮
        $("#pre").click(function () {
            $('#list>.photo').eq(currIndex).stop().animate({'left': listW});
            currIndex--;
            if (currIndex < 0) {
                currIndex = 2;
            }
            $('#list>.photo').eq(currIndex).stop().css('left', -listW).animate({'left': 0});
            iconMove();
        });
        //下面小图标
        function iconMove(){
            $(".control>.empty").eq(currIndex).addClass("current").siblings().removeClass("current");
        }

    $("#submit").click(function () {
        window.open("meisi1.html")
        });

    //登录点击事件
    $("#name3").click(function () {
        $("#mask,.mask_contain").show()
    });
      $(".close").click(function () {
          $("#mask,.mask_contain").hide()
      });
      //注册按钮
    $("#last").click(function () {
        $("#registered").show();
        $(".registered").show();
    });
    $(".close1").click(function () {
        $("#registered,.registered").hide()
    });


});




