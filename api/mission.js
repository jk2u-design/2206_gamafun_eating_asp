$(function () {
    var missions = [
        { done: false, brand_id: "1", ad_id: "1", times: "1", desc: "beanfun!- 佈告欄" },
        { done: false, brand_id: "1", ad_id: "2", times: "1", desc: "beanfun!- 留言板" },
        { done: false, brand_id: "2", ad_id: "3", times: "0", desc: "台灣遊戲橘子-零用金轉蛋機" },
        { done: false, brand_id: "2", ad_id: "4", times: "0", desc: "台灣遊戲橘子-伍登獎" },
        { done: false, brand_id: "2", ad_id: "5", times: "1", desc: "台灣遊戲橘子-遊戲連簽益" },
        { done: false, brand_id: "3", ad_id: "6", times: "1", desc: "GASH-每日領豆任務" },
        { done: false, brand_id: "3", ad_id: "7", times: "1", desc: "GASH-滿額優惠送金豆" },
        { done: false, brand_id: "4", ad_id: "8", times: "1", desc: "有閑購物-天天抽盒拿銀豆" },
        { done: false, brand_id: "4", ad_id: "9", times: "1", desc: "有閑購物-消費滿額送金豆" },
        { done: false, brand_id: "5", ad_id: "10", times: "0", desc: "橘子支付-筆筆交易拿銀豆" },
        { done: false, brand_id: "5", ad_id: "11", times: "10", desc: "橘子支付-橘子滿滿的愛" },
        { done: false, brand_id: "5", ad_id: "12", times: "0", desc: "橘子支付-愛用帳戶送金豆" },
        { done: false, brand_id: "6", ad_id: "13", times: "1", desc: "bf!文學星-橘門頁說收藏篇" },
        { done: false, brand_id: "6", ad_id: "14", times: "1", desc: "bf!文學星-橘門頁說閱讀篇" },
        { done: false, brand_id: "6", ad_id: "15", times: "0", desc: "bf!文學星-橘門頁說加碼篇" },
        { done: false, brand_id: "7", ad_id: "16", times: "1", desc: "bf!漫畫星-漫畫辦桌桌收藏先" },
        { done: false, brand_id: "7", ad_id: "17", times: "1", desc: "bf!漫畫星-漫畫辦桌桌閱讀先" },
        { done: false, brand_id: "7", ad_id: "18", times: "0", desc: "bf!漫畫星-辦桌桌百讀不厭" },
        { done: false, brand_id: "8", ad_id: "19", times: "10", desc: "原子少年-給少年滿滿的愛" },
        { done: false, brand_id: "8", ad_id: "20", times: "0", desc: "原子少年-我挺原子能量盒" },
        { done: false, brand_id: "8", ad_id: "21", times: "0", desc: "原子少年-為你的少年拚一團" }
    ]
    $('.mission_done').hide()
    if (!getbfd()) {
        $('.btn_orange').on("click", function () {
            setData('redirect_uri', location.href)
            location.href = getLoginURL()
        })
        return;
    }
    else {
        //已登入
        $('.mission_hint').hide()
        var data = {}
        data.open_id = getbfd()
        data.brand_id = $('#brand_id').val() ? $('#brand_id').val() : ''
        apt.api.getUserMission(data, function (rs) {
            if (rs) {
                if (rs.code == '0000') {
                    var retdata = JSON.parse(rs.datas)
                    //brand mission
                    $.each(retdata, function (i1, value) {
                        $.each(missions, function (i2, mission) {
                            if (mission.ad_id == value.ad_id) {
                                if (mission.times > 0 && value.cnt >= mission.times) {
                                    mission.done = true
                                    var item = $('li[data-adid=' + value.ad_id + ']')
                                    if (item) {
                                        item.addClass('completed')
                                        item.find('.rt>a').attr('class', 'btn_green_disab')
                                        item.find('.rt>a>.text').html('完成任務')
                                    }
                                }
                            }
                        })
                    });
                    //index
                    $("[data-brand]").each(function () {
                        var dom = $(this)
                        if (missions.filter(e => e.done === false && e.brand_id == dom.data('brand')).length == 0) {
                            dom.show()
                        }
                    });
                    $("[data-ad]").each(function () {
                        var dom = $(this)
                        if (retdata.filter(e => e.ad_id == dom.data('ad')).length > 0) {
                            dom.show()
                        }
                    });
                }
            }
        })
    }



})

