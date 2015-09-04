$( document ).ready(function() {

  $('.cta').on('click', function(){
    $('.overlay').addClass('is-open');
    return false;
  });

  $('.close-btn').on('click', function(){
    $('.overlay').removeClass('is-open');
  });

});
