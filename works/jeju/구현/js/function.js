$(document).ready(function(){

  const $mnu = $('header > nav > .gnb > li > a');

  const arrTopVal = [];
  let nowIdx = null;

  for(let i=0;i<$mnu.length;i++){
    arrTopVal[i] = $('article').eq(i).offset().top;
  }

  //메뉴클릭 article top으로 이동
  $mnu.on('click', function(evt){
    evt.preventDefault();

    nowIdx = $mnu.index(this);

    $('html, body').stop().animate({
      scrollTop : arrTopVal[nowIdx]
    }, 400);
  });

  //스크롤시 메뉴 on
  $(window).on('scroll', function(){

    const scrollTop = $(this).scrollTop();

    for(let i=0;i < arrTopVal.length;i++){
      if(scrollTop >= arrTopVal[i]){
        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
      } else if(scrollTop < arrTopVal[0]){
        $mnu.parent().removeClass('on');
      };
    };
  });

  //빛의벙커 버튼클릭 이미지변경
  const arrImg = [
    './images/bunker1.jpg',
    './images/bunker2.jpg',
    './images/bunker3.jpg'
  ]; 
  
  const $btn = document.querySelectorAll('.btn > li');
  const $screen = document.querySelector('.screen > img');
  
  $btn.forEach(function($image, idx){
    $image.addEventListener('click', function(evt){
      evt.preventDefault();

      $screen.setAttribute('src', arrImg[idx]);
    });
  });

  //aside 클릭 top이동
  $('aside > a').on('click', function(evt){
    evt.preventDefault();

    $('html, body').stop().animate({
      scrollTop: 0
    });
  });

});