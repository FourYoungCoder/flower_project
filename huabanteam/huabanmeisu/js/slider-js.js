$(function () {
    var timer;
    var index = 0;
    var count = $('.imga').length;
    var currIndex=0;
    autoPlay();
    $('.slider-nav_item').each(function(i) {
        $(this).click(function() {
            clearInterval(timer);

                    $(".slides").stop().animate({"left":-1349*i+"px"},580);
            currIndex=i;
            index=i;
            $(this).addClass('slider-nav_bg');
            $('.slider-nav_item').not(this).removeClass('slider-nav_bg');
        })
    });

    $(".slides").hover(function () {
        clearInterval(timer);
    },autoPlay);

    function play() {
        index++;

        if (index>=count){
            $('.slides').css({
                left:0
            });
            index=1;
        }

        currIndex++;
        if (currIndex>=5){
            currIndex=0;
        }
        $('.slides').animate({
            "left":-(index*100)+'%'});
        $('.slider-nav_item').eq(currIndex).addClass('slider-nav_bg');
        $('.slider-nav_item').not($('.slider-nav_item').eq(currIndex)).removeClass('slider-nav_bg');
    }
    $(".drop-li").each(function () {
        $(this).mouseenter(function () {
            $(this).addClass('focus');
            $('.drop-li').not(this).removeClass('focus');
        });
        $(this).mouseleave(function () {
            $('.drop-li').removeClass('focus');
        })
    });
    $('.selected').click(function (e) {
        e.stopPropagation();
        $(".d-h").stop().slideToggle(300,function () {
                $('.d-h').css(
                    {opacity:1}
                );
        }
        );
    });
    $(document).click(function () {
        $(".d-h").slideUp(300)
    });

    $('.drop-li').each(function () {
        $(this).click(function () {
            $(".d-h").stop().slideToggle(300,function () {
                    $('.d-h').css(
                        {opacity:1}
                    )
                }
            );
            $('.selected').text(this.innerText);
        });

    });
    $('.drop-li').eq(0).click(function () {
        $('#what').find("option").eq(0).val('').prop("selected",true)
    });
    $('.drop-li').eq(1).click(function () {
        $('#what').find("option").eq(0).val('photo').prop("selected",true)
    });
    $('.drop-li').eq(2).click(function () {
        $('#what').find("option").eq(0).val('vector').prop("selected",true)
    });
    function autoPlay() {
        timer=setInterval(play,3000);
    }
});