$(function () {
    $('.notice_sub').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('on')
        $(this).next('.detail').slideToggle();
      setTimeout( bgColor(),100)
    })

    bgColor()
   $(window).resize(function(){
    bgColor()
   }) 

   function bgColor(){
    var win_w = $(window).width(), doc_h = $(document).height(), bg_h = 1100/ 1920;
    var gradient_pos = 100-(win_w * bg_h / doc_h * 100)
    var pos1 = gradient_pos +5 , pos2 = gradient_pos, pos3 = 25, pos4 = 0;
    var bg_css='linear-gradient(0deg,rgba(21,6,34,1)'+ pos4 +'%, rgba(64,19,106,1)' + pos3 + '%, rgba(43,14,64,1) ' + pos2 + '%, rgba(43,14,64,0)' + pos1 + '%),url(images/mission/bg_full.jpg) no-repeat,rgba(43,14,64,100)'
  
    $('.wrapper').css('background',bg_css);
    $('.wrapper').css('background-position','center top');
    $('.wrapper').css('background-size','100vw');
   }
})