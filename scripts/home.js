var logoName = $(".logoName");
var logoSub = $(".logoSub");
$(function() {
  logoSub.hide();
})
$(document).ready(function() {
  setTimeout(function() {
    logoName.animate({
      right: "60vw"
    }, 3000, "easeOutQuart");

  }, 700);
  setTimeout(function() {
    var logoNameLeft = parseInt(logoName.css('left'));
    var logoNameStretch = parseInt(logoName.css('font-stretch'));
    var logoNameWidth = parseInt(logoName.css('width'));
    var logoNameAbove = (logoNameWidth - logoNameStretch) / 2;
    console.log(logoNameWidth);
    console.log(logoNameWidth - logoNameAbove);
    logoSub.css('left', logoNameWidth);
    logoSub.fadeIn(700);
  }, 3000);
});
