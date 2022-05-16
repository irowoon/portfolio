$(function(){

 const $header = $('header');
 const $h1 = $header.find('h1');
 const $btnTop = $('.topbtn');

 $(window).on('scroll', function(){

  let scrollTop = $(this).scrollTop();

  if($(window).width()>640){//PC
 if(scrollTop > 0){
      $header.addClass('fixed');
      $h1.show();
      $btnTop.hide();
    }else{
      $header.removeClass('fixed');
      $h1.show();
      $btnTop.hide();
    }
  }else{//모바일
    if(scrollTop > 0){
      $header.addClass('fixed');
      $h1.hide();
      $btnTop.show();
    }else{
      $header.removeClass('fixed');
      $h1.show();
      $btnTop.hide();
    }
  }

  });

  $btnTop.on('click', function(evt){
    evt.preventDefault();

    $('html, body').stop().animate({
      scrollTop : 0
    });
  });

});
