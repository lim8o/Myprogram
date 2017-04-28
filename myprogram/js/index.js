$(function () {

  /*头部的过渡动画*/
  $(window).scroll(() => {
    let headHeight = $('.transparent').outerHeight()
    let scrollTop = $(window).scrollTop()
    if (headHeight < scrollTop) {
      $('.transparent').addClass('transparent-translation')
    } else {
      $('.transparent').removeClass('transparent-translation')
    }
  })

  /*二级菜单的动画*/
  $('.navname').hover(
    function () {
      $(this).css('background', '#60646D').find('ul').show()
      $(this).find('img').addClass("act").attr('src', '../img/icon1.png');
    },
    function () {
      $(this).css('background', '#757881').find('ul').hide()
      $(this).find('img').removeClass("act").attr('src', '../img/right.png');
    }
  )
  /*二级菜单的文字变色*/
  $(this).find('a').hover(function () {
    $(this).css('color','#e94840').fadeIn()
  },function () {
    $(this).css('color','#121212')
  })


  /*轮播图的动画*/
  var $bdList = $('.bd li')
  var $hdList = $('.hd li')
  var i = 0
  var n

  function time() {
    i++
    i=(i==$bdList.length)?0:i;
    $($bdList[i]).addClass('togglebd').siblings().removeClass('togglebd')
    $($hdList[i]).addClass('on').siblings().removeClass('on');

  }
  var timer = setInterval(time,5000)
  $('.bd-ul').hover(function(){
    clearInterval(timer);
  },function(){
    timer = setInterval(time,5000)
  })

  //同步小圆点
  $hdList.click(function () {
    clearInterval(timer);
    n =  $(this).index()
    $(this).addClass('on').siblings().removeClass('on');
    $($bdList[n]).addClass('togglebd').siblings().removeClass('togglebd')
    i = n
    timer = setInterval(time,5000)
  })





})














