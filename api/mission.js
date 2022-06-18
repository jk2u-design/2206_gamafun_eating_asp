$(function () {
    //按鈕link設定
    var ads = [
        { ad_id: "1", web: "web跳轉網址", app: "app跳轉網址", desc:"beanfun!- 佈告欄" },
        { ad_id: "2", web: "web跳轉網址", app: "app跳轉網址", desc:"beanfun!- 留言板" },
        { ad_id: "3", web: "web跳轉網址", app: "app跳轉網址", desc:"台灣遊戲橘子-零用金轉蛋機" },
        { ad_id: "4", web: "web跳轉網址", app: "app跳轉網址", desc:"台灣遊戲橘子-伍登獎" },
        { ad_id: "5", web: "web跳轉網址", app: "app跳轉網址", desc:"台灣遊戲橘子-遊戲連簽益" },
        { ad_id: "6", web: "web跳轉網址", app: "app跳轉網址", desc:"GASH-每日領豆任務" },
        { ad_id: "7", web: "web跳轉網址", app: "app跳轉網址", desc:"GASH-滿額優惠送金豆" },
        { ad_id: "8", web: "web跳轉網址", app: "app跳轉網址", desc:"有閑購物-天天抽盒拿銀豆" },
        { ad_id: "9", web: "web跳轉網址", app: "app跳轉網址", desc:"有閑購物-消費滿額送金豆" },
        { ad_id: "10", web: "web跳轉網址", app: "app跳轉網址", desc:"橘子支付-筆筆交易拿銀豆" },
        { ad_id: "11", web: "web跳轉網址", app: "app跳轉網址", desc:"橘子支付-橘子滿滿的愛" },
        { ad_id: "12", web: "web跳轉網址", app: "app跳轉網址", desc:"橘子支付-愛用帳戶送金豆" },
        { ad_id: "13", web: "web跳轉網址", app: "app跳轉網址", desc:"bf!文學星-橘門頁說收藏篇" },
        { ad_id: "14", web: "web跳轉網址", app: "app跳轉網址", desc:"bf!文學星-橘門頁說閱讀篇" },
        { ad_id: "15", web: "web跳轉網址", app: "app跳轉網址", desc:"bf!文學星-橘門頁說加碼篇" },
        { ad_id: "16", web: "web跳轉網址", app: "app跳轉網址", desc:"bf!漫畫星-漫畫辦桌桌收藏先" },
        { ad_id: "17", web: "web跳轉網址", app: "app跳轉網址", desc:"bf!漫畫星-漫畫辦桌桌閱讀先" },
        { ad_id: "18", web: "web跳轉網址", app: "app跳轉網址", desc:"bf!漫畫星-辦桌桌百讀不厭" },
        { ad_id: "19", web: "web跳轉網址", app: "app跳轉網址", desc:"原子少年-給少年滿滿的愛" },
        { ad_id: "20", web: "web跳轉網址", app: "app跳轉網址", desc:"原子少年-我挺原子能量盒" },
        { ad_id: "21", web: "web跳轉網址", app: "app跳轉網址", desc:"原子少年-為你的少年拚一團" }
    ]
    if (!getbfd()) {
        //未登入
        $('.btn_orange').on("click", function () {
            alert('登入頁')
        })
        return;
    }
    else {
        //已登入
        $('.mission_hint').hide()
        $('.btn_orange').on("click", function () {
            var ad_id = $(this).parent().parent().data('adid')
           debugger
            $.each(ads, function (index, value) {
                if (value.ad_id == ad_id) {
                    if (inapp)
                        location.href = value.app
                    else
                        location.href = value.web
                }
            });
        })
        var data = {}
        data.open_id = getbfd()
        data.brand_id = $('#brand_id').val()
        apt.api.getUserMission(data, function (rs) {
            if (rs) {
                if (rs.code == '0000') {
                    //debugger
                    var retdata = JSON.parse(rs.datas)
                    $.each(retdata, function (index, value) {
                        var item = $('li[data-adid=' + value.ad_id + ']')
                        if (item) {
                            item.addClass('completed')
                            item.find('.rt>a').attr('class', 'btn_green_disab')
                            item.find('.rt>a>.text').html('完成任務')
                        }
                    });
                }
            }
        })
    }

  

})

