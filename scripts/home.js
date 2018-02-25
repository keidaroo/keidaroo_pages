var logoName = $(".logoName");
var logoSub = $(".logoSub");
var profileTextTitle = $(".profileTextTitle");
var profileText = $(".profileText");
$(function() {
  logoSub.hide();
  profileText.hide();
  profileTextTitle.hide();
})

$(document).ready(function() {
  setTimeout(function() {
    var logoNameStretch = parseInt(logoName.css('font-stretch'));
    var logoSubStretch = parseInt($(window).width()) / 4.6;
    var above = parseInt($(window).width()) - logoSubStretch - logoNameStretch;
    logoName.animate({
      right: above / 2 + logoSubStretch
    }, 3000, "easeOutQuart");

  }, 1500);
  setTimeout(function() {
    var logoNameLeft = parseInt(logoName.css('left'));
    var logoNameStretch = parseInt(logoName.css('font-stretch'));
    var logoNameWidth = parseInt(logoName.css('width'));
    var logoNameAbove = (logoNameWidth - logoNameStretch) / 2;
    logoSub.css('left', logoNameWidth);

    logoSub.fadeIn(700);
  }, 3000);
  setTimeout(function() {
    var animateTop = parseInt(logoName.css('top')) * 0.6;
    logoName.animate({
      top: animateTop
    }, {
      duration: 500,
      easing: 'easeOutQuart',
      queue: false
    });
    logoSub.animate({
      top: animateTop
    }, {
      duration: 500,
      easing: 'easeOutQuart',
      queue: false
    })
  }, 4300);
  setTimeout(function() {
    profileTextTitle.fadeIn(700);
  }, 4900);
  setTimeout(function() {
    profileText.fadeIn(700);
  }, 5700);
});
$(window).resize(function() {
  var logoNameStretch = parseInt(logoName.css('font-stretch'));
  var logoSubStretch = parseInt($(window).width()) / 4.6;
  var above = parseInt($(window).width()) - logoSubStretch - logoNameStretch;
  logoName.css('right', above / 2 + logoSubStretch);
  logoSub.css('left', logoName.css('width'));
})
