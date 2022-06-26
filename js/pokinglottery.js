$(function () {
    // 戳戳樂開啟彈窗
    $('.poking_select').click(function (e) {
        e.preventDefault();
        $(this).addClass('current')
        $('.mask').show();
        $('.check_usebeans').show();
        window.triggerClickEvent('1214');
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
    $('.btn_qrcode').click(function () {
        $('.mask').show();
        $('.check_qrcode').show();
        $('body,html').css('overflow', 'hidden')
    })
    $('.rule_btn').click(function () {
        $('.mask').show();
        $('.rule').show();
        $('body,html').css('overflow', 'hidden')
    })

    $('.btn_reload').click(function (e) {
        e.preventDefault();
        location.reload();
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
    $('.opt1 .box_s:nth-child(1)').css('order', arr[0]);
    $('.opt1 .box_s:nth-child(2)').css('order', arr[1])
    $('.opt1 .box_s:nth-child(3)').css('order', arr[2])
    $('.opt1 .box_s:nth-child(4)').css('order', arr[3])
    $('.opt1 .box_s:nth-child(5)').css('order', arr[4])
    $('.opt1 .box_s:nth-child(6)').css('order', arr[5])
    $('.opt1 .box_s:nth-child(7)').css('order', arr[6])
    $('.opt1 .box_s:nth-child(8)').css('order', arr[7])
    $('.opt1 .box_s:nth-child(9)').css('order', arr[8])
}
function randombox1() {
    var str = '';
    var arr = [];
    for (i = 0; i < 18; i++) {
        str = Math.floor(Math.random() * 18) + 1;
        for (j = 0; j < arr.length; j++) {
            if (arr[j] == str) {
                arr.splice(j, 1);
                i--;
            }
        }
        arr.push(str);
    }
    $('.opt2 .box_s').css('order','auto').hide();;
    $('.opt2 .box_s:nth-child(' + arr[0] + ')').css('order', 1).show()
    $('.opt2 .box_s:nth-child(' + arr[1] + ')').css('order', 2).show()
    $('.opt2 .box_s:nth-child(' + arr[2] + ')').css('order', 3).show()
    $('.opt2 .box_s:nth-child(' + arr[3] + ')').css('order', 4).show()
    $('.opt2 .box_s:nth-child(' + arr[4] + ')').css('order', 5).show()
    $('.opt2 .box_s:nth-child(' + arr[5] + ')').css('order', 6).show()
    $('.opt2 .box_s:nth-child(' + arr[6] + ')').css('order', 7).show()
    $('.opt2 .box_s:nth-child(' + arr[7] + ')').css('order', 8).show()
    $('.opt2 .box_s:nth-child(' + arr[8] + ')').css('order', 9).show()

}

// 戳我隨機位置
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
    $('.poking_item:nth-child(' + arr[0] + ')').children('span').show();
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
    $('.poking_item:nth-child(' + arr[0] + ')').children('span').show();
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
        $("#fireworks").fireworks();
		jQuery("#fireworks").before(jQuery("canvas"));

    }, 1500)
}