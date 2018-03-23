var logoName = $(".logoName");
var wallpaper = $("#home-wallpaper");
var rocketImage = $(".rocketImage");
var sceneObj = $(".scene");
var rocketSmoke = $(".rocketSmoke");
var planetBrown = $(".planetBrown");
var planetPink = $(".planetPink");
var planetRed = $(".planetRed");
var planetGreen = $(".planetGreen");
var spaceman = $("#spaceman");
var ageDisplay = $("#ageDisplay");
var minute = $('.minute');
var hour = $('.hour');

var windowHeight = 0;
var windowWidth = 0;
var scene = $(".scene").get(0);

var rocketSize = 0;

function sizeReset() {

  windowHeight = parseInt($(window).height());
  windowWidth = parseInt($(window).width());

  logoName.css('font-size', Math.min(0.08 * windowWidth, 0.08 * windowHeight));

  var rocketMultiX = 0.55,
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

  var spacemanSize = rocketSize * 0.4;
  spaceman.css('background-size', spacemanSize);
  spaceman.css('height', spacemanSize * 1.5);
  spaceman.css('width', spacemanSize);
  spaceman.css('transform', "rotate(30deg)");

  var redSize = rocketSize * 0.6;
  planetRed.css('background-size', redSize);
  planetRed.css('height', redSize);
  planetRed.css('width', redSize);
  if (windowHeight > windowWidth) {
    planetRed.css('left', redSize / 4);
  } else {
    planetRed.css('left', '22vw');
  }
  var greenSize = rocketSize * 0.4;
  planetGreen.css('background-size', greenSize);
  planetGreen.css('height', greenSize);
  planetGreen.css('width', greenSize);


  rocketSmoke.css('right', rocketSize);
  rocketSmoke.css('top', rocketSize);
  rocketSmoke.css('background-size', rocketSize * 0.1);
  rocketSmoke.css('width', rocketSize * 0.1);
  rocketSmoke.css('height', rocketSize * 0.1);
}

function clockAnimate() {
  var dt = new Date();
  var h = dt.getHours();
  var m = dt.getMinutes();
  console.log(m);
  var mRotate = 6.0 * m;
  var hRotate = 30 * h + 0.5 * m;
  console.log(mRotate * 0.5);
  console.log(`rotate(${mRotate}deg)`);
  minute.animate({
    opacity: 1
  }, {
    duration: 1000,
    step: function(now) {
      $(this).css({
        transform: 'rotate(' + (now * mRotate) + 'deg)'
      })
    }
  }, 1000);
  hour.css('transform', `rotate(${hRotate}deg)`);
}

$(function() {

  sizeReset();
  var min = 0;
  var max = 3;

  var ran = Math.floor(Math.random() * (max + 1 - min)) + min;
  var rocketName = ['rocketBlue', 'rocketBlue', 'rocketBlue', 'rocketBlue'];
  var backgroundUrl = 'url("pictures/' + rocketName[ran] + '.png ")';
  rocketImage.css('background-image', backgroundUrl);
  //rocketSmoke.css('background-image', ' url("pictures/rectangle.png")');
  logoName.hide();
  var nowDate = new Date();
  var bornDate = new Date(2002, 10, 5, 0, 0);
  ageDisplay.html((Math.floor((nowDate.getTime() - bornDate.getTime()) / 365 / 24 / 36) / 100000).toFixed(4));

})

$(document).ready(function() {
  logoName.fadeIn(1200);
  clockAnimate();
});
$(window).resize(function() {
  sizeReset();
})
