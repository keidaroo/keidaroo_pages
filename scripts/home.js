var logoName = $(".logoName");
var wallpaper = $("#home-wallpaper");
var rocketImage = $(".rocketImage");
var windowHeight = 0;
var windowWidth = 0;

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

  logoName.hide();

  var granimInstance = new Granim({
    element: '#rocketCanvas',
    name: 'basic-gradient',
    direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          ['#16d4b7', '#16d4b7'],
          ['#6902b0', '#6902b0'],
          ['#ff22f6', '#ff22f6']
        ],
        transitionSpeed: 2000
      }
    }
  });
})

$(document).ready(function() {
  logoName.fadeIn(1200);
});
$(window).resize(function() {
  sizeReset();
})
