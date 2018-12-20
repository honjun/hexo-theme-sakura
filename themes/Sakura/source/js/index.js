// 导航
       $(window).scroll(function(e){
        if ($(window).scrollTop()>$('.banner-box').height()-2) {
            $('.header').addClass('top');
            
        }else if($(window).scrollTop()<$('.banner-box').height()){
            $('.header').removeClass('top');
        }

       });
       $('.from-box input').blur(function(){
            if ($(this).val().trim()=="") {
                $(this).parents('.input-box').removeClass('active');
            }
       });
       $('.from-box input').focus(function(){
            $(this).parents('.input-box').addClass('active');
       });
       $('.offer .icon').click(function(){
        if ($('.from-box').hasClass('active')) {
            $('.from-box').removeClass('active');
        }else{
            $('.from-box').addClass('active');
        }
       });
       $('.from-box .close-btn').click(function(){
            $('.from-box').removeClass('active');
       });
       var swiper = new Swiper('.nub-box', {
          direction: 'vertical',
          loop: true,
           autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          }
        });
        var swiper = new Swiper('.join-box', {
           direction: 'vertical',
           loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            }
        });





      // 工具 js
        var index =4;
        var interval;
        autoplay();
        $('.tab-box .item-box').hover(function(){
            index = $(this).index();
            clearInterval(interval);
            $(this).addClass('active').siblings().removeClass('active');
            $('.all-item .item-box').eq(index).addClass('active').siblings().removeClass('active');
        },function(){
            autoplay();
        });

        $('.all-item .item-box').hover(function(){
            clearInterval(interval);
        },function(){
            autoplay();
        });
        function autoplay(){
            interval = setInterval(function(){
                if (index>$('.all-item .item-box').size()) {
                    index=0;
                }
                $('.tab-box .item-box').eq(index).addClass('active').siblings().removeClass('active');
                $('.all-item .item-box').eq(index).addClass('active').siblings().removeClass('active');
                index =index+1;
            },2000);
        }