var logoName = $(".logoName");
var wallpaper = $("#home-wallpaper");
var rocketImage = $(".rocketImage");
var sceneObj = $(".scene");
var windowHeight = 0;
var windowWidth = 0;
var scene = $(".scene").get(0);
var parallaxInstance = new Parallax(scene);

function sizeReset() {

  windowHeight = parseInt($(window).height());
  windowWidth = parseInt($(window).width());

  logoName.css('font-size', Math.min(0.08 * windowWidth, 0.08 * windowHeight));

  wallpaper.css('width', windowWidth);
  wallpaper.css('height', windowHeight);

  var rocketMulti = 0.4;
  var rocketSize = Math.min(rocketMulti * windowWidth, rocketMulti * windowHeight);
  rocketImage.css('background-size', rocketSize);
  rocketImage.css('height', rocketSize);
  rocketImage.css('width', rocketSize);

}

$(function() {
  sizeReset();
  var min = 0;
  var max = 3;

  var ran = Math.floor(Math.random() * (max + 1 - min)) + min;
  var rocketName = ['rocketBlue', 'rocketRed', 'rocketGreen', 'rocketYellow'];
  var backgroundUrl = 'url("pictures/png/' + rocketName[ran] + '.png ")';
  console.log(backgroundUrl);
  rocketImage.css('background-image', backgroundUrl);

  logoName.hide();
})

$(document).ready(function() {
  logoName.fadeIn(1200);
});
$(window).resize(function() {
  sizeReset();
})
