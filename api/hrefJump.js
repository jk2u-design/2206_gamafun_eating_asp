$('a').on("click", function () {
    var web = $(this).data('weburl')
    var BGOurl = $(this).data('bgourl')
    var BGOdeeplink = $(this).data('bgodeeplink')
    var key = $(this).data('redirect') //Qrcode
    if ($(this).hasClass("btn_green_disab")) {
        //disable���s���n�u�^�h
        return;
    }
    if (getData('inapp')) {
        if (BGOdeeplink) {
            BGO.deeplink_jump(BGOdeeplink, true)
        }
        else {
            BGO.redirect_uri_by_default_browser(BGOurl)
        }
    }
    else if (web) {
        if ($(this).hasClass('btn_qrcode') && $(window).width() >= 768) {
            if (getbfd()) {
                $('.mask').show();
                $('.check_qrcode').show();
                $('body,html').css('overflow', 'hidden')
                var popup_qrcode = $('.check_qrcode .prize_img')
                if (key == 'mission_beanfun_comment') {
                    //beanfun留言板
                    popup_qrcode.attr('src', 'images/mission/qrc-1-2.png')
                } else if (key == 'mission_game_gacha') {
                    //game 零用金
                    popup_qrcode.attr('src', 'images/mission/qrc-2-3.png')
                } else if (key == 'mission_game_sign') {
                    //game 連簽益
                    popup_qrcode.attr('src', 'images/mission/qrc-2-5.png')
                } else if (key == 'mission_gash_receive') {
                    //gash 每日領豆任務
                    popup_qrcode.attr('src', 'images/mission/qrc-3-6.png')
                } else if (key == 'mission_novel') {
                    // 文學星
                    popup_qrcode.attr('src', 'images/mission/qrc-6-12.png')
                } else if (key == 'comic1') {
                    // 大手老師 雙馬尾
                    popup_qrcode.attr('src', 'images/ipspecial/qrc-comic1.png')
                }
                else if (key == 'comic2') {
                    // 大手老師 第二遊戲
                    popup_qrcode.attr('src', 'images/ipspecial/qrc-comic2.png')
                }
            }
            else {
                location.href = web
            }
        }
        else {
            location.href = web
        }
    }
})