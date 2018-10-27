$(function () {
$('.uploada').click(function () {
    $('#mask').show();
    $('.mask_contain').show();
});
    $('#mask .close').click(function () {
        $('#mask').hide();
        $('.mask_contain').hide();
    });
$('.register').click(function () {
    $('#registered').show();
    $('.mask_contain').show();
});
 $('.close1') .click(function () {
     $('#registered').hide();
     $('.mask_contain').hide();
 });
    $('.clicka').click(function () {
        $('#registered').hide();
        $('#mask').show();
    });
$('.clickb').click(function () {
    $('#mask').hide();
    $('#registered').show();
});
    $('.mask_contain').click(function () {
        $('#mask').hide();
        $('#registered').hide();
        $('.mask_contain').hide();
    })
});