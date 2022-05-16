$(function(){

  //nav
  const $gnb = $('.gnb>li');
  const $lnb = $gnb.children('.lnb');
  const $bglnb = $('.bg-lnb');

  $gnb.on('mouseover', function(){
    $bglnb.stop().slideDown(100);
    $lnb.stop().slideDown(100);

    $(this).children('.lnb').css({
      backgroundColor: '#111',
      borderTop: '1px solid #5865f5'
    });
  });
  
  $gnb.on('mouseout', function(){
    $lnb.stop().slideUp(100);
    $bglnb.stop().slideUp(100);
    
    $(this).children('.lnb').css({
      backgroundColor: 'initial',
      borderTop: 'initial'
    });
  });

  $bglnb.on('mouseover', function(){
    $bglnb.stop().slideDown(100);
    $lnb.stop().slideDown(100);
  });
  
  $bglnb.on('mouseout', function(){
    $lnb.stop().slideUp(100);
    $bglnb.stop().slideUp(100);
  });



  //visual slide
  const $container = $('.visual-container');
  const $text = $('.text > p');

  const $prev = $('.prev');
  const $next = $('.next');

  let idx = 0;
  $text.eq(idx).show().siblings().hide();

  //이전
  $prev.on('click', function(evt){
    evt.preventDefault();
    
    if(idx>0){
       idx--;
    }else{
       idx=4;
    }

    $container.stop().animate({
      left : -1250*4
   },400,function(){
      $('.visual-container > p').last().prependTo($container);
      $container.css({left:-1250*5});
   });

   $text.eq(idx).show().siblings().hide();

   $('.visual-num').text('No.0'+(idx+1));
 });

  //다음
  $next.on('click', function(evt){
    evt.preventDefault();

    if(idx<4){
       idx++;
    }else{
       idx=0;
    }

    $container.stop().animate({
      left : -1250*6
   },400,function(){
      $('.visual-container > p').first().appendTo($container);
      $container.css({left:-1250*5});
   });

   $text.eq(idx).show().siblings().hide();

   $('.visual-num').text('No.0'+(idx+1));
 });



  //sub slide
  const $btnNext = $('.subnext')
  const $slideLeft = $('.slide-container-left');
  const $slideRight = $('.slide-container-right');
  const $subSlide = $('.subslide-container');

  let nowIdx = 0;
  $slideRight.children('ul').eq(nowIdx).show().siblings().hide();

  $btnNext.on('click', function(evt){
    evt.preventDefault();
    
      if(nowIdx<3){
        nowIdx++;
      }else{
        nowIdx=0;
      }
      
      $slideLeft.stop().animate({left:-625},400,function(){
        $('.slide-container-left > p').first().appendTo($slideLeft);
        $slideLeft.css({left:0});
      });

      $slideRight.children('ul').eq(nowIdx).fadeIn(400).siblings().hide();
      
      $subSlide.stop().animate({left:-380},400,function(){
        $('.subslide-container > p').first().appendTo($subSlide);
        $subSlide.css({left:0});
      });
    });



  //EVENT
  const $evtContainer = $('.event-container');
  const $name = $('.event-name>p');

  const $evtPrev = $('.event-slide > .left');
  const $evtNext = $('.event-slide > .right');

  let index = 0;
  $name.eq(index).show().siblings().hide();

  //이전
  $evtPrev.on('click', function(evt){
    evt.preventDefault();
    
    if(index>0){
        index--;
    }else{
        index=1;
    }

    $evtContainer.stop().animate({
      left : -250*1
    },400,function(){
      $('.event-container > p').last().prependTo($evtContainer);
      $evtContainer.css({left:-250*2});
    });

    $name.eq(index).fadeIn(300).siblings().fadeOut(300);
  });

  //다음
  $evtNext.on('click', function(evt){
    evt.preventDefault();

    if(index<1){
        index++;
    }else{
        index=0;
    }

    $evtContainer.stop().animate({
      left : -250*3
    },400,function(){
      $('.event-container > p').first().appendTo($evtContainer);
      $evtContainer.css({left:-250*2});
    });

    $name.eq(index).fadeIn(300).siblings().fadeOut(300);
  });



  //PRODUCT
  const $product = $('section.product>ul>li');

    $product.on('mouseover', function(){
      idx=$product.index(this);

      $product.eq(idx).stop().animate({
        backgroundPositionX: '20px'
      }).siblings().stop().animate({
        backgroundPositionX: '97px'
      });
    });

    $product.on('mouseout', function(){
      idx=$product.index(this);

      $product.eq(idx).stop().animate({
        backgroundPositionX: '97px'
      });
    });



  //aside top btn
  $('aside>a').on('click', function(evt){
    evt.preventDefault();
    
    $('html, body').stop().animate({
      scrollTop:0
    });

  });


  
});