// This is where it all goes :)
$(document).ready(function(){
  setTimeout(function(){
    $("body").removeClass("preload");
  },500);

  $('#text-tool-open').on('click', function(e) {
    console.log("text-tool-open");
    $('.toolset--text').addClass('open');
    e.preventDefault();
  });

  $('#text-toolset-close').on('click', function(e) {
    console.log("text-tool-close");
    $('.toolset--text').removeClass('open');
    e.preventDefault();
  });

  $('#finish-design, #back-to-design').one('animationend', function(e) {
    $(this).addClass("hidden");
  });
  // When click on Go to Card Back
  $('#go-to-card-back').on('click', function(e) {
    console.log("go to card back");
    //The card sides
    $('.back-of-card').removeClass("hidden--fromRight fadeOutRightBig").addClass("animated fadeInRightBig");
    $('.front-of-card').addClass("hidden--fromLeft animated fadeOutLeftBig").removeClass("hidden--fromRight fadeInLeftBig");

    //The arrows
    $('#go-to-card-back').addClass('animated fadeOut').one('animationsend', function(e) {
      $(this).addClass("hidden");
    });
    $('#finish-design, #go-to-card-front').removeClass("hidden fadeOut").addClass('animated fadeIn');
    e.preventDefault();
  });

  // When click on Go to Front of Card
  $('#go-to-card-front').on('click', function(e) {
    console.log("go to card front");
    //The card sides
    $('.back-of-card').addClass("hidden--fromRight animated fadeOutRightBig").removeClass("fadeInRightBig");
    $('.front-of-card').removeClass("fadeOutLeftBig").addClass("animated fadeInLeftBig");
    //The arrows
    $('#go-to-card-back').removeClass("fadeOut").addClass("fadeIn").one('animationend', function(e) {
      $(this).removeClass("hidden");
    });
    $('#finish-design, #go-to-card-front').removeClass("fadeIn").addClass('fadeOut').one('animationend', function(e) {
      $(this).addClass("hidden");
    });
    e.preventDefault();
  });

  //When click on Finish Design
  $('#finish-design').on('click', function(e) {
    $('.back-of-card').addClass("animated fadeOutLeftBig").removeClass("fadeInRightBig"); //move final side off to left
    $('.toolbar').addClass("animated fadeOutLeft"); //move the toolbar off to the left
    $('#finish-design').addClass("animated fadeOut"); //fadeout the arrows
    $('#go-to-card-front').addClass("animated fadeOutLeft");
    $('#back-to-design').removeClass("hidden fadeOutLeft fadeOutRight fadeOut").addClass("animated fadeInRight");
    $('#card-type-selection').removeClass("hidden");
    $('.placeholder-card-type-selection').addClass("animated fadeInRight").removeClass("fadeOutRight"); //Fade in the selector from the right
  })

  //When click on Back to Design
  $('#back-to-design').on('click', function(e) {
    $('.back-of-card').removeClass("fadeOutLeftBig").addClass("fadeInLeftBig"); //move final side off to left
    $('.toolbar').removeClass("fadeOutLeft").addClass("fadeInLeft"); //move the toolbar off to the left
    $('#finish-design').removeClass("fadeOut").addClass("fadeIn"); //fadeout the arrows
    $('#go-to-card-front').removeClass("fadeOutLeft").addClass("fadeInLeft");
    $('#back-to-design').removeClass("fadeInRight").addClass("fadeOutRight").one('animationsend', function(e) {
      $(this).addClass('hidden');
    });
    $('#card-type-selection').addClass("hidden");
    $('.placeholder-card-type-selection').removeClass("fadeInRight").addClass("fadeOutRight"); //Fade in the selector from the right
  })



function DropDown(el) {
  this.dd = el;
  this.initEvents();
}
DropDown.prototype = {
  initEvents : function() {
    var obj = this;

    obj.dd.on('click', function(event){
      $(this).toggleClass('active');
      event.stopPropagation();
    });
  }
}

$(function() {

  var dd = new DropDown( $('.dd-wrapper') );

  $(document).click(function() {
    // all dropdowns
    $('.dd-wrapper').removeClass('active');
  });

});

});
