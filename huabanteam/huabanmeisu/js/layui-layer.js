$(function () {
    $('.dxk').each(function () {
        $(this).click(function () {
            $(this).addClass('selected');
            $('.dxk').not(this).removeClass('selected');
        })
    })

    $('.ghym2').click(function () {
            $('.body').eq(1).removeClass('yinc');
            $('.body').eq(0).addClass('yinc')
    });
    $('.ghym').click(function () {
            $('.body').eq(0).removeClass('yinc');
            $('.body').eq(1).addClass('yinc')
    })
});
$('.layui-layer-setwin').click(function () {
    $('.layui-layer').css(
        {display:'none'}
    )
    $('.mask12').css(
        {
            display:'none'
        }
    )
});
$('#srch_img').click(function () {
    $('.layui-layer').css(
        {display:'block'}

    )
    $('.mask12').css(
        {
            display:'block'
        }
    )
});
$('.n4').click(function () {
    $("html,body").animate({scrollTop:0}, 500);
});