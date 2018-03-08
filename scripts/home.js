var logoName = $(".logoName");
var wallpaper = $("#home-wallpaper");
var rocketImage = $(".rocketImage");
var sceneObj = $(".scene");
var rocketSmoke = $(".rocketSmoke");
var windowHeight = 0;
var windowWidth = 0;
var scene = $(".scene").get(0);
var parallaxInstance = new Parallax(scene);
var rocketSize = 0;

function sizeReset() {

  windowHeight = parseInt($(window).height());
  windowWidth = parseInt($(window).width());

  logoName.css('font-size', Math.min(0.08 * windowWidth, 0.08 * windowHeight));

  wallpaper.css('width', windowWidth);
  wallpaper.css('height', windowHeight);

  //sceneObj.css('width', windowWidth);
  // sceneObj.css('height', windowHeight);

  var rocketMultiX = 0.35,
    rocketMultiY = 0.4;
  rocketSize = Math.min(rocketMultiX * windowWidth, rocketMultiY * windowHeight);
  rocketImage.css('background-size', rocketSize);
  rocketImage.css('height', rocketSize);
  rocketImage.css('width', rocketSize);

  rocketSmoke.css('right', rocketSize);
  rocketSmoke.css('top', rocketSize);
  rocketSmoke.css('background-size', rocketSize * 0.1);
  rocketSmoke.css('width', rocketSize * 0.1);
  rocketSmoke.css('height', rocketSize * 0.1);
  //setTimeout('rect()');
}

function rect() {
  rocketSmoke.animate({
    top: windowHeight,
    right: '10vw'
  }, 3000).animate({
    top: rocketSize,
    right: rocketSize
  }, 0)
  setTimeout("rect()", 3000);
}

$(function() {

  sizeReset();
  var min = 0;
  var max = 3;

  var ran = Math.floor(Math.random() * (max + 1 - min)) + min;
  var rocketName = ['rocketBlue', 'rocketRed', 'rocketGreen', 'rocketYellow'];
  var backgroundUrl = 'url("pictures/png/' + rocketName[ran] + '.png ")';
  rocketImage.css('background-image', backgroundUrl);
  rocketSmoke.css('background-image', ' url("pictures/png/rectangle.png")');
  logoName.hide();
})

$(document).ready(function() {
  logoName.fadeIn(1200);
});
$(window).resize(function() {
  sizeReset();
})
