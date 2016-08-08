$(window).scroll(function() {
  if ($(document).scrollTop() > 5) {
    $('nav').css({"padding": "0px"});
  } else {
    $('nav').css({"padding": "10px"});
  }
});
