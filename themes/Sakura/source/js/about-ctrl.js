$(function () {
    var flag = true;
    $('.body-main .about-box .leftBoxs .list-items .item').unbind('click').bind('click', function () {
        var index = $(this).index();
        // $('.body-main .about-box .leftBoxs .list-items .item').removeClass('active').eq(index).addClass('active');
        var $currentPart;
        var len = 60;
        if (index === 0) {
            $currentPart = $("#part1");
            len = 110;
        } else if (index === 1) {
            $currentPart = $("#part2");
        } else if (index === 2) {
            $currentPart = $("#part3");
        }
        $("body,html").animate({
            scrollTop: $currentPart.offset().top-len //让body的scrollTop等于pos的top，就实现了滚动
        }, 1000);
    });
    currentPart();
    $(window).on('scroll', function () {
        currentPart();
    });
    function currentPart() {
        if ($('#part1').offset().top - $(window).scrollTop() <= 60) {
            $('.body-main .about-box .leftBoxs .list-items .item').removeClass('active').eq(0).addClass('active');
        }
        if ($('#part2').offset().top - $(window).scrollTop() <= 60) {
            $('.body-main .about-box .leftBoxs .list-items .item').removeClass('active').eq(1).addClass('active');
        }
        var part3Top = $('#part3').offset().top - $(window).scrollTop();
        if (part3Top <= 60) {
            $('.body-main .about-box .leftBoxs .list-items .item').removeClass('active').eq(2).addClass('active');
        }
        if (part3Top < 160 && part3Top > -786) {
            $('.body-main .about-box .leftBoxs-wrap .leftBoxs .currentTitle').addClass('blue');
            $('.body-main .about-box .leftBoxs-wrap .leftBoxs .list-items').addClass('blue');
        } else {
            $('.body-main .about-box .leftBoxs-wrap .leftBoxs .currentTitle').removeClass('blue');
            $('.body-main .about-box .leftBoxs-wrap .leftBoxs .list-items').removeClass('blue');
        }
    }
});