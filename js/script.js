$(document).ready(function(){

    smoothScroll();
    quoteWheel();
    navIndicator();
    modal();
});

var smoothScroll= function(){
$("#internalLinks a").click(function(e){
    e.preventDefault();
    $("html, body").animate({scrollTop:$($(this).attr('href')).offset().top-60},1500);
  });
}

    //Shrinks the nav bar when away from the top of the page
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


var navIndicator = function(){

  var divs = $("#internalLinks").children();

  var i = 0;
  setInterval(function(){
      var thisDiv = divs.eq(i);
      if (($(document).scrollTop()> $(thisDiv.attr('href')).offset().top-100 && 
        $(document).scrollTop() < $(divs.eq(i+1).attr('href')).offset().top-100) ){
        thisDiv.css("background-color", "#E6772E");
        }
      else{
        thisDiv.css("background-color", "#E64A45");
      }
      i++;
      if (i === 5) i =0;
    },50);
  }
  
  
  
var quoteWheel = function(){ 

 
  var playing = true;                  //Pause/unpause the animation based on the click of the button
  $("#pause").click(function(){
    if (playing){
      $(this).html("Continue");
    }
    else{
      $(this).html("Pause");
    }
    playing = !playing;
  });

  setInterval(function(){
    if (playing){   

          $("#quotes ul").animate({marginLeft:-400}, 1000, function(){

          $(this).find("li:last").after($(this).find("li:first"));    //Make the list a loop
              
          $(this).css("marginLeft", "0");     //Move it
      });
    }
    }, 8000);
}

var modal = function(){
  $("#openModal").click(function() {
        $("#backgroundForModal").css("display", "block").fadeIn(1500);
        $("#modalBox").css("display", "block").fadeIn("slow");
    });
  
  $("#backgroundForModal").click(function(){
        $("#modalBox").css("display", "block").fadeOut("slow");
        $("#backgroundForModal").css("display", "block").fadeOut("slow");
  });
  
}