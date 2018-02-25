var logoName = $(".logoName");
var logoSub = $(".logoSub");
$(function() {
  logoSub.hide();
})
$(document).ready(function() {
  setTimeout(function() {
    logoName.animate({
      right: "54vw"
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
});
$(window).resize(function() {
  logoName.css('right', '54vw');
  logoSub.css('left', logoName.css('width'));
})
