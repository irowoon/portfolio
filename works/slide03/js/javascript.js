$(function(){

  const $container = $('#slides > .screen > .slides-container');
  const $slides = $container.children('li');

  
  const $btnPrev = $('#slides > a.prev');
  const $btnNext = $('#slides > a.next');
  
  let lock = false;
  let nowIdx = 2; //최초 3번째 슬라이드에 on이 붙어 있게 설계했으므로

  //다음
  $btnNext.on('click', function(evt){
    evt.preventDefault();

    if(lock===false){//잠겨있지않으면
      //들어가서 잠그기
      lock = true;

      //인덱스 추출
      if(nowIdx<4){
        nowIdx++;
      }else{
        nowIdx=0;
      }
  
      //활성카드 처리
      $slides.removeClass('on').eq(nowIdx).addClass('on');
  
      //컨테이너 이동
      $container.stop().animate({left:-480},function(){
        //맨위 $slides에는 [라이언, 어피치, 콘, 무지, 블랙카드] > appendTo > 카드순서가 바뀌면서 배열순서도 바뀌어야함
        //그러나 $slides를 이용하면 배열의 순서가 바뀌지않고 라이언을 계속 이동시키려하게 됨
        //따라서 매번 새로운 카드 배열을 붙러 와야 하기 때문에 $slides를 사용 X
        $('#slides > .screen > .slides-container > li').first().appendTo($container);
        $container.css({left:-240});
        lock = false;
      });
    }
    
  });
  
  //이전
  $btnPrev.on('click', function(evt){
    evt.preventDefault();
    
    if(lock===false){
      lock = true;
      
      if(nowIdx>0){
        nowIdx--;
      }else{
        nowIdx=4;
      }
  
      $slides.removeClass('on').eq(nowIdx).addClass('on');
  
      $container.stop().animate({left:0},function(){
        $('#slides > .screen > .slides-container > li').last().prependTo($container);
        $container.css({left:-240});
        lock = false;
      });
    }
    
  });

});