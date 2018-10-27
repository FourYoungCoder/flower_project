$(function () {
//中部吸顶
    var navHeight = $("#nav").height();
    $(window).scroll(function () {
         var top = $(window).scrollTop();
         if (top>navHeight) {
             $("#nav").css({
                 height:"60px"
             });
             $(".change").css({
                 lineHeight:"60px"
             });
            $("#name3").css({
                backgroundColor:"#eee"
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
             $("#icon").css({
                 top:"24px"
             })
         }else{
             $("#nav").css({
                 height:"78px"
             });
             $(".change").css({
                 lineHeight:"78px"
             });
             $("#icon").css({
                 top:"33px"
             })
         }
    });

    //表格添加点击事件
    $("#oInput").click(function () {
        $("#menu").slideDown(100)
    });
    document.onclick = function () {
        $("#menu,#menu_page").slideUp(100)
    };
    $("#oInput").click(function (e) {
        //阻止事件
        e.stopPropagation()
    });
    $("#child_page").click(function () {
       $("#menu_page").slideDown(300);

    });
    $("#child_page").click(function (e) {
        e.stopPropagation()

    });
    //鼠标移入移出事件
    $(".search").hover(function () {
        $(".search").css({
            border :"1px solid #C0A75E"
        })
    },function () {
        $(".search").css({
            border :"1px solid #ccc"
        })
    });
    $(".search1").hover(function () {
        $(".search1").css({
            border :"1px solid #C0A75E"
        })
    },function () {
        $(".search1").css({
            border :"1px solid #ccc"
        })
    });

    $(".budget").hover(function () {
        $(".budget").css({
            border :"1px solid #C0A75E"
        })
    },function () {
        $(".budget").css({
            border :"1px solid #ccc"
        })
    });
    $("#time").click(function () {
        $("#time").css({
            border :"1px solid #C0A75E"
        })
    });
    $("textarea").click(function () {
        $("textarea").css({
            border :"1px solid #C0A75E"
        })
    });
    $(".name").click(function () {
        $(".name").css({
            border :"1px solid #C0A75E"
        })
    });
    //时间插件的使用
    $("#time").click(function () {
            $.datetimepicker.setLocale("zh");
            $("#time").datetimepicker();
    });

    $.each( $(".menu-list >li"),function () {
        $(".menu-list>li").click(function () {
            // console.log(this);
          var  valueText =  this.innerHTML;
            $("#oInput").val(valueText)
        })
    });


    //预算输入框

    $(".budget").keyup(function () {
        let text=$(".budget").attr("value");
        let text1=$(".budget").val();
        if(isNaN(text1*1)){
                $(".budget").val(text);
        }
        else {
            $(".budget").attr("value",text1);
        }
    });



});




