var logoName = $(".logoName");
var wallpaper = $("#home-wallpaper");
var windowHeight = 0;
var windowWidth = 0;

$(function() {
  windowHeight = parseInt($(window).height());
  windowWidth = parseInt($(window).width());

  logoName.css('font-size', Math.min(0.06 * windowWidth, 0.08 * windowHeight));

  wallpaper.css('width', windowWidth);
  wallpaper.css('height', windowHeight);

  logoName.hide();
})

$(document).ready(function() {
  logoName.fadeIn(1200);
});
$(window).resize(function() {
  windowHeight = parseInt($(window).height());
  windowWidth = parseInt($(window).width());

  logoName.css('font-size', Math.min(0.06 * windowWidth, 0.08 * windowHeight));
  wallpaper.css('width', windowWidth);
  wallpaper.css('height', windowHeight);

})
