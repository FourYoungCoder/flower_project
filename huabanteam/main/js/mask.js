$(function () {
    $(".right_part .login").click(function () {
        $(".mask_contain").show();
        $("#mask") .show();
        $("#mask").css({"transform":"rotateY(0deg)"});
    });
    $(".register").click(function () {
        $("#registered").show();
        $(".mask_contain").show();
        $("#registered").css({"transform":"rotateY(0deg)"});
    });
    $(".mask_contain").click(function () {
        $("#registered").hide();
        $("#mask").hide();
        $(".mask_contain").hide();
    });
    $("#mask .close").click(function () {
        $("#mask").hide();
        $(".mask_contain").hide();
    });
    $("#registered .close1").click(function () {
        $("#registered").hide();
        $(".mask_contain").hide();
    });
    //蒙版切换
    //注册切换登录
    $("#registered .low_click").click(function () {
        $("#registered").css({"transform":"rotateY(-90deg)"});
        $("#mask").addClass("switching");
        $("#mask").css({"transform":"rotateY(0deg)","display":"block"});
        $("#registered").removeClass("switching");
    });
    //登录切换注册
    $("#mask .under_click").click(function () {
        $("#mask").css({"transform":"rotateY(-90deg)"});
        $("#mask").removeClass("switching");
        $("#registered").addClass("switching");
        $("#registered").css({"transform":"rotateY(0deg)","display":"block"});


        // $("#registered").removeClass("switched")
    })


});