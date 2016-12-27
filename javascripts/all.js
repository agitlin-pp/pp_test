// This is where it all goes :)

$(document).ready(function(){

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
  // Add hidden css class to objects hidden on initial view
  $('#finish-design, #go-to-card-front').addClass('hidden--opacity');
  //Card sides to hide and show
  $('.back-of-card').addClass("hidden--fromRight");

  // When click on Go to Card Back
  $('#go-to-card-back').on('click', function(e) {
    console.log("go to card back");
    //The card sides
    $('.front-of-card').addClass("hidden--fromLeft");
    $('.back-of-card').removeClass("hidden--fromRight");
    //The arrows
    $('#go-to-card-back').addClass('hidden--opacity');
    $('#finish-design, #go-to-card-front').removeClass('hidden--opacity');
    e.preventDefault();
  });

  // When click on Go to Front of Card
  $('#go-to-card-front').on('click', function(e) {
    console.log("go to card front");
    //The card sides
    $('.back-of-card').addClass("hidden--fromRight");
    $('.front-of-card').removeClass("hidden--fromLeft");
    //The arrows
    $('#go-to-card-back').removeClass('hidden--opacity');
    $('#finish-design, #go-to-card-front').addClass('hidden--opacity');
    e.preventDefault();
  });




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
