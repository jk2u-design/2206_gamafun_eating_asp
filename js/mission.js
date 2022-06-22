$(function () {
  $('.notice_sub').click(function (e) {
    e.preventDefault();
    var target = $(this)
    target.toggleClass('on')
    target.next('.detail').slideToggle()
  })
})