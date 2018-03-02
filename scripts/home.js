var logoName = $(".logoName");
var logoSub = $(".logoSub");
var profileTextTitle = $(".profileTextTitle");
var profileText = $(".profileText");
$(function() {
  var windowHeight = parseInt($(window).height());
  var windowWidth = parseInt($(window).width());
  logoName.css('font-size', Math.min(0.09 * windowWidth, 0.12 * windowHeight));
  logoSub.css('font-size', Math.min(0.09 * windowWidth, 0.12 * windowHeight));
  profileTextTitle.css('font-size', Math.min(0.06 * windowWidth, 0.1 * windowHeight));
  profileText.css('font-size', Math.min(0.04 * windowWidth, 0.07 * windowHeight));
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
      right: $(window).width() / 2
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
    var animateTop = parseInt(logoName.css('top')) * 0.3;
    logoName.animate({
      top: animateTop
    }, {
      duration: 700,
      easing: 'easeOutQuart',
      queue: false
    });
    logoSub.animate({
      top: animateTop
    }, {
      duration: 700,
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
  logoName.css('right', $(window).width() / 2);
  logoSub.css('left', logoName.css('width'));
})
