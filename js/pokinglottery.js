$(function () {
    // 戳戳樂開啟彈窗
    $('.poking_select').click(function (e) {
        e.preventDefault(); 
        $(this).addClass('current')
        $('.mask').show();
        $('.check_usebeans').show();
       $('body,html').css('overflow', 'hidden')

            
    })
    // x關閉彈窗
    $('.pop_up_close').click(function (e) {
        e.preventDefault();
        $('.current').removeClass('current')
        $('.mask').hide();
        $('.pop_up').hide();
        $('body,html').css('overflow', 'auto')
    })
    $('.check_qrcode_btn').click(function() {
        $('.mask').show();
        $('.check_qrcode').show();
        $('body,html').css('overflow', 'hidden')
    })
    $('.rule_btn').click(function() {
        $('.mask').show();
        $('.rule').show();
        $('body,html').css('overflow', 'hidden')
    })

})
// 獎項隨機位置
function randombox() {
    var str = '';
    var arr = [];
    for (i = 0; i < 9; i++) {
        str = Math.floor(Math.random() * 9) + 1;
        for (j = 0; j < arr.length; j++) {
            if (arr[j] == str) {
                arr.splice(j, 1);
                i--;
            }
        }
        arr.push(str);
    }
    $('.box_s:nth-child(1)').css('order', arr[0]);
    $('.box_s:nth-child(2)').css('order', arr[1])
    $('.box_s:nth-child(3)').css('order', arr[2])
    $('.box_s:nth-child(4)').css('order', arr[3])
    $('.box_s:nth-child(5)').css('order', arr[4])
    $('.box_s:nth-child(6)').css('order', arr[5])
    $('.box_s:nth-child(7)').css('order', arr[6])
    $('.box_s:nth-child(8)').css('order', arr[7])
    $('.box_s:nth-child(9)').css('order', arr[8])
}



function random_hint() {
    var str = '';
    var arr = [];
    for (i = 0; i < 9; i++) {
        str = Math.floor(Math.random() * 9) + 1;
        for (j = 0; j < arr.length; j++) {
            if (arr[j] == str) {
                arr.splice(j, 1);
                i--;
            }
        }
        arr.push(str);
    }
    $('.poking_item').children('span').hide();
    $('.poking_item:nth-child('+arr[0]+')').children('span').show();
  


}
function random_hint_2() {
    var str = '';
    var arr = [];
    for (i = 0; i < 12; i++) {
        str = Math.floor(Math.random() * 12) + 1;
        for (j = 0; j < arr.length; j++) {
            if (arr[j] == str) {
                arr.splice(j, 1);
                i--;
            }
        }
        arr.push(str);
    }
    $('.poking_item').children('span').hide();
    $('.poking_item:nth-child('+arr[0]+')').children('span').show();
  


}
function cal_vh(){
var h =$('.pop_up.type2').height();
$('.wrapper').css('min-height', h+150)
}

function show1() {
    // 點擊消耗豆子
    $('.current').addClass('selected');
    $('.mask').addClass('transparent');//底色隱藏，避免重複點選
    $('.check_usebeans').hide();
    $('body,html').css('overflow', 'auto')

    $('.poking_item').children('span').hide();
}
function show2() {
    // 打開寶物視窗
    setTimeout(function () {
        $('.mask').hide().removeClass('transparent');
        $('.check_prize').fadeIn(500);
        $('.check_poking').hide();
        $(".bg").fireworks();

    }, 1500)
}