$('a').on("click", function () {
    debugger
    var web = $(this).data('weburl')
    var BGOurl = $(this).data('bgourl')
    var BGOdeeplink = $(this).data('bgodeeplink')
    var key = $(this).data('redirect') //Qrcode
    console.log(web + '\n' + BGOurl + '\n' + BGOdeeplink + '\n' + key)
    if ($(this).hasClass("btn_green_disab")) {
        //disable的連結要滾回去
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
    else if(web){
        if ($(this).hasClass('btn_qrcode') && $(window).width() >= 768) {
            if (getbfd()) {
                $('.mask').show();
                $('.check_qrcode').show();
                $('body,html').css('overflow', 'hidden')
                var popup_qrcode = $('.check_qrcode .prize_img')
                if (key == 'mission_beanfun_bulletin') {
                    popup_qrcode.attr('src', 'images/mission/qrcode_beanfun_bulletin_stg.png')
                } else if (key == 'mission_beanfun_comment') {
                    popup_qrcode.attr('src', 'images/mission/qrcode_beanfun_comment_stg.png')
                } else if (key == 'mission_gash_receive') {
                    popup_qrcode.attr('src', 'images/mission/qrcode_mission_gash_stg.png')
                } else if (key == 'mission_novel') {
                    popup_qrcode.attr('src', 'images/mission/qrcode_mission_novel_stg.png')
                }
            }
            else{
                location.href = web
            }
        }
        else{
            location.href = web
        }
    }
})