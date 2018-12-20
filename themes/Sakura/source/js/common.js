$(function() {
	$.get('module/header.html',function(data){
		$(".header").html(data);
	})

	$.get('module/footer.html',function(data){
		$(".footer").html(data);
	})

	$.get('module/sidebar.html',function(data){
		$(".sidebar").html(data);
	})


});
 $('body').on('click','.toggle-btn',function(){
    if ($('.header').hasClass('active')) {
        $('.header').removeClass('active')
        $('.overlay').hide();
    }else{
        $('.header').addClass('active');
        $('.overlay').show();
    }
});
$("body").on('click','.overlay',function(){
    console.log('dddd');
     $('.header').removeClass('active');
     $('.overlay').hide();
});


// 客户增加
window.intercomSettings = {
    app_id: "x44nt5ts"
};
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/x44nt5ts';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
