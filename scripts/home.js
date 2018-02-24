var logoName = $(".logoName");
var logoSub = $(".logoSub");
$(function() {
  logoSub.hide();
})
$(document).ready(function() {
  setTimeout(function() {
    logoName.animate({
      right: 300
    }, 3000, "easeOutQuart");

  }, 700);

  setTimeout(function() {
    logoSub.fadeIn(700);
  }, 2000);
});
