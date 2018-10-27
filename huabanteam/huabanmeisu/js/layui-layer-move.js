$(function () {
    $('.list').each(function () {
        $(this).click(function () {

            $('.layui-layer-move').fadeIn(500,function () {
                $('.layui-layer-move').stop().fadeOut(1500)
            })

        })
    })
});