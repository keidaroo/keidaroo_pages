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
var clock = $(".clock");
var listOpacity = $('#listOpacity');
var hobbyList = $("#hobbyList");
var hobbyTrans = $('#hobbyTrans');
var windowHeight = 0;
var windowWidth = 0;
var scene = $(".scene").get(0);

var rocketSize = 0;

function sizeReset() {

  windowHeight = parseInt($(window).height());
  windowWidth = parseInt($(window).width());


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

  if (windowHeight >= windowWidth) {
    hobbyList.css('height', parseInt(hobbyList.css('width')) * 1.5);
    hobbyTrans.css('top', '20rem');
  } else {
    hobbyList.css('height', '120%');
    hobbyTrans.css('top', '10rem');
    $('#blueScreen').css('bottom', '8%');
    $('#blueScreen').css('right', '5%');
  }
  var printfMainHeight = parseInt($("#printfMain").css('height'));
  $('#printf').css('height', Math.max(parseInt($("#printf").css('height')), 1000));
  $('#hobbyList').css('height', Math.max(parseInt($("#printf").css('height')), 1100));


}

function clockAnimate() {
  var dt = new Date();
  var h = dt.getHours();
  dt.setHours(h + dt.getTimezoneOffset() / 60 + 9);
  var m = dt.getMinutes();
  h = dt.getHours();
  var mRotate = 6.0 * m;
  var hRotate = 30 * h + 0.5 * m;
  minute.animate({
    zIndex: 1
  }, {
    duration: 2000,
    easing: 'easeOutQuart',
    step: function(now) {
      $(this).css({
        transform: 'rotate(' + (now * mRotate) + 'deg)'
      })
    }
  });
  hour.animate({
    zIndex: 1
  }, {
    duration: 2000,
    easing: 'easeOutQuart',
    step: function(now) {
      $(this).css({
        transform: 'rotate(' + (now * hRotate) + 'deg)'
      })
    }
  });

}

$(function() {

  sizeReset();
  var min = 0;
  var max = 3;

  var ran = Math.floor(Math.random() * (max + 1 - min)) + min;
  var rocketName = ['rocketBlue', 'rocketBlue', 'rocketBlue', 'rocketBlue'];
  var backgroundUrl = 'url("pictures/' + rocketName[ran] + '.png ")';
  rocketImage.css('background-image', backgroundUrl);

  var nowDate = new Date();
  var bornDate = new Date(2002, 10, 5, 0, 0);
  ageDisplay.html((Math.floor((nowDate.getTime() - bornDate.getTime()) / 365 / 24 / 36) / 100000).toFixed(4));
  var f = false;
  var pf = false,
    cf = false,
    mf = false;
  $(window).scroll(function() {
    listOpacity.each(function() {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      if (scroll > imgPos - windowHeight + windowHeight / 5 && !cf) {
        console.log('a');
        cf = 1;
        $('.listHobby').animate({
          opacity: 1
        }, 3000);
      }
    });
    $('#printfMain').each(function() {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      if (scroll > imgPos - windowHeight + windowHeight / 5 && !pf) {
        console.log('a');
        pf = 1;
        $(this).animate({
          opacity: 1
        }, 3000);
      }
    });
    $('#mailMes').each(function() {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      if (scroll > imgPos - windowHeight + windowHeight / 5 && !mf) {
        console.log('a');
        mf = 1;
        $(this).animate({
          opacity: 1
        }, 2000);
      }
    });
    if (!f) {
      clock.each(function() {
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        if (scroll > imgPos - windowHeight + windowHeight / 5 && !f) {
          clockAnimate();
          f = true;
        }
      });
      $(function() {
        setInterval(function() {
          clockAnimate()
        }, 60000);
      });
    }
  });

})

$(document).ready(function() {
  logoName.fadeIn(1200);
});
$(window).resize(function() {
  sizeReset();
})
