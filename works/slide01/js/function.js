//준비핸들러
$(function(){

  const $btn = $('section > .slides-btn > li > a');
  const $container = $('section > .slides-container');

  let nowIdx = 0;

   //마우스 클릭했을때
   $btn.on('click', function(evt){
      evt.preventDefault();

      nowIdx = $btn.index(this);

      //활성화표시
      $btn.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

      //컨테이너이동
      $container.stop().animate({
        left:-1130*nowIdx
      });
   });
   
   const $arrowleft = $('section > a.prev');
   const $arrowright = $('section > a.next');

  //이전버튼에 대한 클릭이벤트 구문
   $arrowleft.on('click', function(evt){
      evt.preventDefault();

      if(nowIdx>0){
      nowIdx--;
      }else{
      nowIdx=9
       }

      //활성화표시
      $btn.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

      //컨테이너이동
      $container.stop().animate({
        left:-1130*nowIdx
      });
   });

  //다음버튼에 대한 클릭이벤트 구문
  $arrowright.on('click', function(evt){
      evt.preventDefault();

      if(nowIdx<9){
      nowIdx++;
      }else{
      nowIdx=0
      }

      //활성화표시
      $btn.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

      //컨테이너이동
      $container.stop().animate({
        left:-1130*nowIdx
      });
   });


});
