$(document).ready(function(){

    smoothScroll();
    changeNavSize();
    quoteWheel();
});

var smoothScroll= function(){
$("#internalLinks a").click(function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop:$($(this).attr('href')).offset().top-60},1500);
  });
}


var changeNavSize = function(){     //Shrinks the nav bar when away from the top of the page
  $(window).scroll(function(){
    if ( $(document).scrollTop() > 50 ){
      $("nav").css("height", "60px");
      $("nav p").css("font-size", "10px");
      $("nav h1").css("font-size", "20px")
    }
    else {
      $("nav").css("height", "75px");
      $("nav p").css("font-size", "15px");
      $("nav h1").css("font-size", "36px");

    }


    //navIndicator();
    });
}

var navIndicator = function(){

  var divs = $("#internalLinks").children();
  /*
  for (int i = 0; i < divs.length; i++){
    var thisDiv = divs.eq(1);
    var nextDiv = divs.eq(4);
    var documentPosition = $(document).scrollTop();

    if ((documentPosition > $(thisDiv.attr('href')).offset().top-60) ){
      thisDiv.css("background-color", "#E6772E");
      }
    else{
      thisDiv.css("background-color", "#E64A45");
    }
  }
  */
  
}




var quoteWheel = function(){  //Change.


  setInterval(function(){
    $("#quotes ul").animate({marginLeft:-400},1000,function(){
      $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({marginLeft:0});
    });
  },5000);


}
//http://www.my-html-codes.com/easy-jquery-carousel