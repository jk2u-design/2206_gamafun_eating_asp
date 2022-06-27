$(function () {
  $('.notice_sub').click(function (e) {
    e.preventDefault();
    var target = $(this)
    target.toggleClass('on')
    target.next('.detail').slideToggle()
  })
  $('.btn_popup').click(function (e) {
    e.preventDefault();
    var target = $(this)
    $('.mask').show()
    $('.check_game_login').show()
  })
  $('.pop_up_close').click(function (e) {
    e.preventDefault();
    var target = $(this)
    $('.mask').hide()
    $('.pop_up').hide()
  })
})