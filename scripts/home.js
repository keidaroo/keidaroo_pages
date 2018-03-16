var logoName = $(".logoName");
var wallpaper = $("#home-wallpaper");
var rocketImage = $(".rocketImage");
var sceneObj = $(".scene");
var rocketSmoke = $(".rocketSmoke");
var planetBrown = $(".planetBrown");
var planetPink = $(".planetPink");
var planetRed = $(".planetRed");
var planetGreen = $(".planetGreen");

var windowHeight = 0;
var windowWidth = 0;
var scene = $(".scene").get(0);
var parallaxInstance = new Parallax(scene);
var rocketSize = 0;

function sizeReset() {

  windowHeight = parseInt($(window).height());
  windowWidth = parseInt($(window).width());

  logoName.css('font-size', Math.min(0.08 * windowWidth, 0.08 * windowHeight));

  var rocketMultiX = 0.5,
    rocketMultiY = 0.45;
  rocketSize = Math.min(rocketMultiX * windowWidth, rocketMultiY * windowHeight);
  rocketImage.css('background-size', rocketSize);
  rocketImage.css('height', rocketSize);
  rocketImage.css('width', rocketSize);
  rocketImage.css('transform', 'translateY(-50%)');

  var brownSize = rocketSize * 2;
  planetBrown.css('background-size', brownSize);
  planetBrown.css('height', brownSize);
  planetBrown.css('width', brownSize);

  var pinkSize = rocketSize * 0.4;
  planetPink.css('background-size', pinkSize);
  planetPink.css('height', pinkSize);
  planetPink.css('width', pinkSize);


  var redSize = rocketSize * 0.6;
  planetRed.css('background-size', redSize);
  planetRed.css('height', redSize);
  planetRed.css('width', redSize);

  var greenSize = rocketSize * 0.4;
  planetGreen.css('background-size', greenSize);
  planetGreen.css('height', greenSize);
  planetGreen.css('width', greenSize);


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
  var backgroundUrl = 'url("pictures/' + rocketName[ran] + '.png ")';
  rocketImage.css('background-image', backgroundUrl);
  //rocketSmoke.css('background-image', ' url("pictures/rectangle.png")');
  logoName.hide();
})

$(document).ready(function() {
  logoName.fadeIn(1200);
});
$(window).resize(function() {
  sizeReset();
})
