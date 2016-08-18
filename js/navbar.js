$(window).scroll(function() {
  if ($(document).scrollTop() > 550) {
    $('nav').css({"padding": "0px", "background-color": "rgba(34, 34, 34, .7)", "border": "0px"});
  } else {
    $('nav').css({"padding": "10px", "background-color": "rgba(34, 34, 34, 1"});
  }
});

$('nav').hover(function(){
	    $('nav').css({"padding": "10px", "background-color": "rgba(34, 34, 34, 1"});
});
