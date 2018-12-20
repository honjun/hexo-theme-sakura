

	 var Height = $(window).height();
   	 var Top1 = $("#ts3").offset().top; 
   	 var Top11 = $("#ts2").offset().top;
   	 console.log(Height)
   	 console.log(Top1)
   	 console.log(Top11)
   	 $(".fw").click(function(){
   	 	$('body,html').animate({scrollTop:Top11-100},500);
   	 });
   	 
   	 $(".lc").click(function(){
   	 	$('body,html').animate({scrollTop:0},500);
   	 });
	
	$(".list-click li").click(function(){
		$(".list-click li").removeClass("actives");
		$(this).addClass("actives");
	});
	
	$(window).scroll(function(){
		console.log($(window).scrollTop())
		if($(window).scrollTop() >= 537){
			$(".list-click li").removeClass("actives");
			$(".bay02").addClass("actives");
		}else{
			$(".list-click li").removeClass("actives");
			$(".bay01").addClass("actives");
		}
	})
