var logoName = $(".logoName");
var logoSub = $(".logoSub");
$(function() {
  logoSub.hide();
})

$(document).ready(function() {
  setTimeout(function() {
    var logoNameStretch = parseInt(logoName.css('font-stretch'));
    var logoSubStretch = parseInt($(window).width()) / 4.6;
    var above = parseInt($(window).width()) - logoSubStretch - logoNameStretch;
    logoName.animate({
      right: above / 2 + logoSubStretch
    }, 3000, "easeOutQuart");

  }, 1500);
  setTimeout(function() {
    var logoNameLeft = parseInt(logoName.css('left'));
    var logoNameStretch = parseInt(logoName.css('font-stretch'));
    var logoNameWidth = parseInt(logoName.css('width'));
    var logoNameAbove = (logoNameWidth - logoNameStretch) / 2;
    logoSub.css('left', logoNameWidth);
    /*var granimInstance = new Granim({
      element: '#home-wallpaper',
      name: 'basic-gradient',
      direction: 'diagonal',
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ['#ffffff', '#ffffff'],
            ['#36e4e4', '#9d15bf']
          ],
          loop: false,
          transitionSpeed: 700
        }
      }
    });*/
    logoSub.fadeIn(700);
  }, 3000);
});
$(window).resize(function() {
  var logoNameStretch = parseInt(logoName.css('font-stretch'));
  var logoSubStretch = parseInt($(window).width()) / 4.6;
  var above = parseInt($(window).width()) - logoSubStretch - logoNameStretch;
  logoName.css('right', above / 2 + logoSubStretch);
  logoSub.css('left', logoName.css('width'));
})
