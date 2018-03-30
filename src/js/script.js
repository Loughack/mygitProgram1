$('#fullwork').fullpage({
    controlArrows: false,
    verticalCentered:false,
    loopTop:false,
    autoScrolling:false,
    scrollOverflow:false,
    scrollingSpeed:1500,
    afterLoad: function(anchorLink , index ){
    	console.log(index)
    }
});
homeGetPage();
function homeGetPage(){
	var len=$('.platformsection .sliderText .list').length;
	var wid=$('.platformsection .sliderText .list').width();
	$('.allPages').text(' 0'+len);
	$('.listall').width(parseInt(wid)*parseInt(len));
	var num=0;
	$('.afterBtn').click(function(){
		num++;
		num>=len-1? num=len-1 : num=num;
		$('.listall').animate({'left':-num*wid},600);
		$('.nowPages').text('0'+(num+1)+' ');
	});
	$('.preBtn').click(function(){
		num--
		num<=0? num=0 : num=num;
		$('.listall').animate({'left':-num*wid},600);
		$('.nowPages').text('0'+(num+1)+' ');
	});
};
$(document).scroll(function(){
	var scroll=$(document).scrollTop();
	var timeshow=$('.timelinesection').offset().top-200;
	var heads=$(".section").eq(1).offset().top;
	if(scroll>=heads){
		$('.nav-section').fadeIn();
		if(scroll>timeshow){
			setTimeout(function(){
				$('.timelinetitle span').fadeIn();
			},600);
			$('.timelinetitle span').css('display','block');
	        var list = $('.timelineBox .list');
	        list.each(function(i,v){
	            $(this).stop().animate({
	                left:307*i
	            }, 500);
	        });
		};
	}else{
		$('.nav-section').fadeOut();
	}
});
$(document).ready(function(){
	$("html").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 40,
        cursorwidth: 7,
        cursorborder: "1px solid rgba(0,0,0,0)",
        cursorcolor: '#000000',
        cursorborderradius: 10,
        horizrailenabled: false,
        zindex: 94000
    });
});
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination', //是否显示导航
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 2500,
    loop:true,
    autoplayDisableOnInteraction: false
});
jQuery('#qr-apple').qrcode({
     render  : "canvas",                
     text    : "https://itunes.apple.com/cn/app/id1298411779?mt=8" ,
     width : "174",  
     height : "174",
 });   
 jQuery('#qr-android').qrcode({
     render  : "canvas",                
     text    : "http://17120733001.fx.sj.360.cn/qcms/view/t/detail?id=3922548&from=singlemessage" ,
     width : "174",  
     height : "174",
 });  
