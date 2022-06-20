var inApp;
$(async function () {
    const setTrackingRecord = (key) => {
        var expires = "";
        var date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();

        let ob = getTrackingRecords()
        ob.records.push(key)

        document.cookie = "trackingRecords=" + window.btoa(JSON.stringify(ob)) + expires + "; path=/; secure";
    }

    const getTrackingRecords = () => {
        var nameEQ = "trackingRecords=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return JSON.parse(window.atob(c.substring(nameEQ.length, c.length)));
        }
        return { "records": [] };
    }

    const hasRecord = (key) => {
        let ob = getTrackingRecords()
        return ob.records.indexOf(key) !== -1
    }

    window.triggerClickEvent = (eventId, context) => {
        let event = getEvent(eventId)
        event.clickInfo = Object.assign(event.clickInfo, context)
        sender.passEvent(occursEvent('click', event))
    }

    const trackingInit = async () => {
        let trackId = await beanfunWebTraceSDK.status.getTrackId()
        let property = inApp ? 'beanfun' : 'gamania'
        let productName = inApp ? 'beanfun h5活動頁' : '大小網活動頁'

        let sender;
        await beanfunWebTraceSDK.init({
            BUID: 'GAMA-gamania-01',
            property,
            sourceProperty: 'gamania',
            GTMId: 'GTM-MCJ7BK4', // stage:GTM-MCJ7BK4 prod:GTM-KRSWL2M
            productName,
        }).then(senderIns => sender = senderIns);

        return {
            trackId,
            sender
        }
    }

    const BGOInit = () => {
        BGO.check_app_exist(data => {
            inApp = data.result === "ok"
            if (inApp) {
                BGO.init({
                    token: 'c15489c1221846d38a7c2a4bba1a6168_oat',
                    official_account_id: 'c264ad2321b24f32b8eb5dfd2deb28b6_oa'
                });
                // in app hidden
                //$('.addevents').hide()
            }
        })
    }

    const occursEvent = (type, context) => {
        if (!(context.eventId && context.event && context.pageInfo)) {
            console.error('事件缺少必要參數');
            return;
        }

        let params = {
            eventId: context.eventId,
            event: context.event,
            pageInfo: context.pageInfo,
        }

        switch (type) {
            case 'view':
                return new beanfunWebTraceSDK.events.PageViewEvent(Object.assign(params, { pageInfo: context.pageInfo }, { isAdditiveView: false }))
            case 'click':
                return new beanfunWebTraceSDK.events.ClickEvent(Object.assign(params, { clickInfo: context.clickInfo }))
            case 'impression':
                return new beanfunWebTraceSDK.events.ImpressionEvent(Object.assign(params, { impressionInfo: context.impressionInfo }, { isAdditiveView: true }))
        }
    }


    const passLoadedEvents = async () => {
        // 判斷網址
        let pathname = window.location.pathname.split('/');
        let len = pathname.length - 1;
        let target = pathname[len].split('.')[0]

        if (target == 'beanfun') {
            await sender.passEvent(occursEvent('view', getEvent('31')))
        } else if (target == 'game') {
            await sender.passEvent(occursEvent('view', getEvent('41')))
        } else if (target == 'gash') {
            await sender.passEvent(occursEvent('view', getEvent('51')))
        } else if (target == 'jollybuy') {
            await sender.passEvent(occursEvent('view', getEvent('61')))
        } else if (target == 'gamapay') {
            await sender.passEvent(occursEvent('view', getEvent('71')))
        } else if (target == 'novel') {
            await sender.passEvent(occursEvent('view', getEvent('81')))
        } else if (target == 'comics') {
            await sender.passEvent(occursEvent('view', getEvent('91')))
        } else if (target == 'atomboyz') {
            await sender.passEvent(occursEvent('view', getEvent('101')))
        } else if (target == 'artisit') {
            await sender.passEvent(occursEvent('view', getEvent('111')))
        } else if (target == 'game_beans') {
            if (!getbfd()) {
                await sender.passEvent(occursEvent('view', getEvent('126_1')))
            } else {
                await sender.passEvent(occursEvent('view', getEvent('126_2')))
            }
        } else if (target == 'pokinglottery_list') {
            if (!getbfd()) {
                await sender.passEvent(occursEvent('view', getEvent('1211_1')))
            } else {
                await sender.passEvent(occursEvent('view', getEvent('1211_2')))
            }
        }
        else {
            return;
        }

    }

    const { trackId, sender } = await trackingInit()
    BGOInit()
    passLoadedEvents();


    $('body').on('click', '[data-tracking="click"]', async function () {
        // tracking
        let element = $(this)
        let sec = element.data('sec')
        let event_id = element.data('event_id')
        let event = getEvent(event_id)
        let info = element.data('info')
        let url = element.attr('href')
        let urls = {}
        let key = element.data('redirect')
        let name = element.data('name')
        let status = event.pageInfo.status
        if (sec) {
            if (event.clickInfo.sec.indexOf(sec) !== -1) {
                event.clickInfo.sec = sec
            } else {
                console.error('clickInfo.sec 參數錯誤')
                return
            }
        }
        if (name) {
            if (event.clickInfo.name.indexOf(name) !== -1) {
                event.clickInfo.name = name
            } else {
                console.error('clickInfo.name 參數錯誤')
                return
            }
        }
        // game vip邀請碼
        if (element.hasClass('invite_send')) {
            let vipcode = $('.invite_input').val();
            event.clickInfo.content = vipcode
        }
        // 判斷登入
        if (status) {
            if (!getbfd()) {
                event.pageInfo.status = 'not_logged_in'
            } else {
                event.pageInfo.status = 'logged_in'
            }
        }

        if (key !== undefined) {
            event.clickInfo = Object.assign(event.clickInfo, info)
            if (url.indexOf('https') == -1 && key) {
                urls = getUrl(key)
                event.clickInfo.url = inApp ? urls.in_app_link : urls.web_link
            } else {
                event.clickInfo.url = url
            }
        }

        await sender.passEvent(occursEvent('click', event))

        // redirect
        if (key == undefined) {
            return;
        }
        urls = getUrl(key)
        if (getbfd()) {
            if (inApp && urls.in_app_link != '') {
                // leave_webview:bool 是否關閉當前頁面再跳轉
                //  BGO.deeplink_jump(urls.in_app_link, false)
            } else {
                if ($(this).hasClass('btn_qrcode')) {
                    // 大網電腦版彈出qrcode
                    if ($(window).width() >= 768) {
                        var popup_qrcode = $('.check_qrcode .prize_img')
                        $('.mask').show();
                        $('.check_qrcode').show();
                        $('body,html').css('overflow', 'hidden')
                        if (key == 'mission_beanfun_bulletin') {
                            popup_qrcode.attr('src', 'images/mission/qrcode_beanfun_bulletin_stg.png')
                        } else if (key == 'mission_beanfun_comment') {
                            popup_qrcode.attr('src', 'images/mission/qrcode_beanfun_comment_stg.png')
                        } else if (key == 'mission_gash_receive') {
                            popup_qrcode.attr('src', 'images/mission/qrcode_mission_gash_stg.png')
                        } else if (key == 'mission_novel') {
                            popup_qrcode.attr('src', 'images/mission/qrcode_mission_novel_stg.png')
                        }
                    } else {
                        //   location.href = urls.web_link;
                    }
                } else {
                    // location.href = urls.web_link;
                }
            }
        }
    })

    // 戳戳樂頁面
    // $('.use_gold,.use_silver').click(function () {
    //     setTimeout(async function () {
    //         await sender.passEvent(occursEvent('view', getEvent('1216')))
    //     }, 1500)
    // })

    // gamebeans.html view追蹤
    $('#start_game').click(function () {
        setTimeout(async function () {
            await sender.passEvent(occursEvent('view', getEvent('126_3')))
        }, 5000)
        setTimeout(async function () {
            await sender.passEvent(occursEvent('view', getEvent('126_4')))
        }, 21000)

    })

    // 追蹤以外的code
    // x關閉彈窗
    $('.pop_up_close').click(function (e) {
        e.preventDefault();
        $('.mask').hide();
        $('.check_qrcode').hide();
        $('body,html').css('overflow', 'auto')
    })
    // game.html vip邀請碼執行任務提示
    $('.btn_gotoinput.btn_orange').click(function () {
        $('.invite_input,.invite_send ').addClass('shine_ani')
        setTimeout(function () {
            $('.invite_input,.invite_send ').removeClass('shine_ani')
        }, 1500)
    })
});
