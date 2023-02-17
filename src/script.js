$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListUl").toggleClass("show_list");
    $("#navegador").toggleClass("activo");
    $("#navegador").fadeIn();
    $("#mainListUl").fadeIn();
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});

// scroll bar
const scrollProgress = document.querySelector("#scrollProgress");
let totalPageHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
    let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
    scrollProgress.style.height = `${newProgressHeight}%`;
    scrollProgress.style.opacity = `${newProgressHeight}%`;
};

//div change color
$(function(){
    'use strict';
    var view = $(window).height();
    $('.part').height(view).scrollie({
        scrolloffset:-50,
        scrollingInView: function(elem){
            var bgColor=elem.data('background');
            $('body').css('background-color', bgColor);
        }
    })
});

// flex card
$(".card-option").click(function(){
    $(".card-option").removeClass("active");
    $(this).addClass("active");
 });

//  animation blinking and text 
$(document).ready(function () {
    // typing animation
    (function ($) {
      $.fn.writeText = function (content) {
        var contentArray = content.split(""),
          current = 0,
          elem = this;
        setInterval(function () {
          if (current < contentArray.length) {
            elem.text(elem.text() + contentArray[current++]);
          }
        }, 80);
      };
    })(jQuery);
  
    // input text for typing animation
    var text=["PROGRAMMER", "DATABASE ADMINISTRATOR", "WEB DEVELOPER FULL STACK"];
    var index=0;
    function changeText(){
      document.getElementById("aboutme").innerText = "";
      $("#aboutme").writeText (text[index]);
      index = (index + 1) % 3;
    }

    var interval = window.setInterval(changeText, 8000);

    window.onunload = function () {
      window.clearInterval(interval);
    }
    // $("#aboutme").writeText("PROGRAMMER - DATABASE ADMINISTRATOR - WEB DEVELOPER FULL STACK");
});


//mostrar skills diferentes
$(".skillopt").click(function(){
  $(".skillopt").removeClass("active");
  $(this).addClass("active");
  var data=$(this).data('skill');
  if(data=="skillweb"){
    $(".skilllist").removeClass("skillshow");
    $("#websec").addClass("skillshow");
  }else if(data=="skilldba"){
    $(".skilllist").removeClass("skillshow");
    $("#dbasec").addClass("skillshow");
  }else if(data=="skillsoft"){
    $(".skilllist").removeClass("skillshow");
    $("#softsec").addClass("skillshow");
  }
})