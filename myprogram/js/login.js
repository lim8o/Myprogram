$(function () {

  /*忘记密码*/
  $('.login .pull-left').on('click', function () {
    $('.login').hide()
    $('.forgetPwd').show()
  })

  /*注册*/
  $('.login .pull-right').on('click', function () {
    $('.login').hide()
    $('.regist').show()
  })

  /*已有账户登陆*/
  $('.regist .tolog').on('click', function () {
    $('.regist').hide()
    $('.login').show()
  })
  
  /*忘记密码返回*/
  $('.forgetPwd .back').on('click', function () {
    $('.forgetPwd').hide()
    $('.login').show()
  })





})

















