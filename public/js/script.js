$(document).ready(function(){smoothScroll(),changeNavSize(),quoteWheel()});var smoothScroll=function(){$("#internalLinks a").click(function(a){a.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-60},1500)})},changeNavSize=function(){$(window).scroll(function(){$(document).scrollTop()>50?($("nav").css("height","60px"),$("nav p").css("font-size","10px"),$("nav h1").css("font-size","20px")):($("nav").css("height","75px"),$("nav p").css("font-size","15px"),$("nav h1").css("font-size","36px"))})},navIndicator=function(){$("#internalLinks").children()},quoteWheel=function(){setInterval(function(){$("#quotes ul").animate({marginLeft:-400},1e3,function(){$(this).find("li:last").after($(this).find("li:first")),$(this).css({marginLeft:0})})},5e3)};