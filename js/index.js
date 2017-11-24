$(function(){
	
	function lunbo(){
		var num=0;
		var n=0;
		var sum=0;
		var timer;
		var timer=setInterval(function(){
			clearInterval();
			num+=1;
			n+=1;
			sum+=1;
			if(num>3){
				num=0;
			}
			if(n>18){
				n=0;
			}
			if(sum>3){
				sum=0;
				$('.main3left ul').css({'left':-206*sum+'px'});
				$('.main5left ul').css({'left':-206*sum+'px'});
				$('.main4right ul').css({'left':-206*sum+'px'});
				sum=1;
			}
			$('.lunbo ul').animate({'left':-1160*num+'px'});
			$('.leftbottom ul').stop().animate({'left':-182*n+'px'});
			$('.main3left ul').stop().animate({'left':-206*sum+'px'});
			$('.main4right ul').stop().animate({'left':-206*sum+'px'});
			$('.main5left ul').stop().animate({'left':-206*sum+'px'});
			$('.bottom-li ul').stop().animate({'top':-92*n+'px'});
			$('.lunbo ol li').eq(num).addClass('orange').siblings().removeClass('orange');
		},2000)
		
		 $('.lunbo,.leftbottom,.main3left,.main4right').hover(function() {
	         clearInterval(timer);
	     }, function() {
	        lunbo();
	     });
	}
	lunbo();
	
	//侧边栏 
   $('.aside ul li div').hover(function(){
       $(this).stop().animate({'width':'124px','height':'54px'});   	
   },function(){
   	   $(this).stop().animate({'width':'54px','height':'54px'});
   })
   
  
})
   //回到顶部
   function gogo(){
   	$('html,body').animate({'scrollTop':0},1000);
   }