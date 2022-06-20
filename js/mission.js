$(function () {
  $('.notice_sub').click(function (e) {
    e.preventDefault();
    var target = $(this)
    target.toggleClass('on')
    target.next('.detail').slideToggle()
  })
if($(window).width()>=820){
  bgColor()
}else{
  bgColor_m()
}

  $(window).resize(function () {
    if($(window).width()>=820){
      bgColor()
    }else{
      bgColor_m()
    }
    
  })


  function bgColor() {
    var doc_h = $(document).height()
    var target_h = $(window).width() * (750 / 1920)
    var gradient_pos = 100 - (target_h / doc_h * 100);
    var pos1 = gradient_pos + 10, pos2 = gradient_pos, pos3 = gradient_pos - 20, pos4 = 0;
    var bg_css = 'linear-gradient(0deg,rgba(21,6,34,1)' + pos4 + '%, rgba(64,19,106,1)' + pos3 + '%, rgba(43,14,64,1) ' + pos2 + '%, rgba(43,14,64,0)' + pos1 + '%)'
    $('.bg').css('background', bg_css);
  }
  function bgColor_m() {
    var doc_h = $(document).height()
    var target_h = $(window).width() * (1200 / 1920)
    var gradient_pos = 100 - (target_h / doc_h * 100);
    var pos1 = gradient_pos + 2, pos2 = gradient_pos, pos3 = gradient_pos - 20, pos4 = 0;
    var bg_css = 'linear-gradient(0deg,rgba(21,6,34,1)' + pos4 + '%, rgba(64,19,106,1)' + pos3 + '%, rgba(43,14,64,1) ' + pos2 + '%, rgba(43,14,64,0)' + pos1 + '%)'
    $('.bg').css('background', bg_css);
  }
})