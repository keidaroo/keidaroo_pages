var logoName = $(".logoName");
var wallpaper = $("#home-wallpaper");
var rocketImage = $(".rocketImage");
var windowHeight = 0;
var windowWidth = 0;

function sizeReset() {

  windowHeight = parseInt($(window).height());
  windowWidth = parseInt($(window).width());

  logoName.css('font-size', Math.min(0.06 * windowWidth, 0.08 * windowHeight));

  wallpaper.css('width', windowWidth);
  wallpaper.css('height', windowHeight);

  var rocketMulti = 0.3;
  var rocketSize = Math.min(rocketMulti * windowWidth, rocketMulti * windowHeight);
  rocketImage.css('background-size', rocketSize);
  rocketImage.css('height', rocketSize);
  rocketImage.css('width', rocketSize);

}

$(function() {
  sizeReset();

  logoName.hide();
})

$(document).ready(function() {
  logoName.fadeIn(1200);
});
$(window).resize(function() {
  sizeReset();
})
