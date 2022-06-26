var inApp;
$(async function(){

    window.triggerClickEvent = (eventId, context) => {
        let event = getEvent(eventId)
        event.pageInfo = Object.assign(event.pageInfo, context)
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
            GTMId: 'GTM-MCJ7BK4', // env
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
                $('.addevents').hide()
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
            pageInfo: { pageInfo: context.pageInfo },
        }

        switch (type) {
            case 'view':
                return new beanfunWebTraceSDK.events.PageViewEvent(Object.assign(params, {isAdditiveView: false}))
            case 'click':
                return new beanfunWebTraceSDK.events.ClickEvent(Object.assign(params, {clickInfo: context.clickInfo}))
            case 'impression':
                return new beanfunWebTraceSDK.events.ImpressionEvent(Object.assign(params, {impressionInfo: context.impressionInfo}, {isAdditiveView: true}))
        }
    }

    const passLoadedEvents = async () => {
        //判斷網址
        var innerURL = window.location.pathname.split('/');
        var len = innerURL.length - 1;
        var innerTarget =innerURL[len].split('.')[0];;
        console.log(innerTarget)
        if (innerTarget == '') {
            await sender.passEvent(occursEvent('view', getEvent('21')))
        } else if (innerTarget == 'game_bottle') {
            await sender.passEvent(occursEvent('view', getEvent('121')))
        }
    }

    $("#invite_send").click(function(){
        var str = $("#invite_code").val();
        $('#invite_send').data('info', {"content": str});
    });    

    const pageHome = 'acg_home'
    const pageShoot = 'acg_shoot_game'
    const getEvent = eventNoId => {
        let events = {
            '11': {
                eventId: 5016,
                event: 'gamania_acg_global_item_click',
                pageInfo: {
                    page: pageHome,
                },
                clickInfo: {
                    type: 'menu',
                    name: '', //點擊按鈕名稱
                }
            },
            '12': {
                eventId: 5016,
                event: 'gamania_acg_global_item_click',
                pageInfo: {
                    page: pageHome,
                },
                clickInfo: {
                    type: 'bottom',
                    name: '', //點擊按鈕名稱
                }
            },
            '21': {
                eventId: 5008,
                event: 'gamania_acg_home_page_view',
                pageInfo: {
                    page: pageHome,
                },
            },
            '22': {
                eventId: 5000,
                event: 'gamania_acg_home_page_item_click',
                pageInfo: {
                    page: pageHome,
                },
                clickInfo: {
                    name: 'login',
                }
            },
            '23': {
                eventId: 5000,
                event: 'gamania_acg_home_page_item_click',
                pageInfo: {
                    page: pageHome,
                },
                clickInfo: {
                    sec: 'main',
                    name: '', //點擊按鈕名稱
                }
            },
            '24': {
                eventId: 5000,
                event: 'gamania_acg_home_page_item_click',
                pageInfo: {
                    page: pageHome,
                },
                clickInfo: {
                    name: 'invitation', //點擊按鈕名稱
                    content: '',
                }
            },
            '25': {
                eventId: 5000,
                event: 'gamania_acg_home_page_item_click',
                pageInfo: {
                    page: pageHome,
                },
                clickInfo: {
                    sec: 'more',
                    name: '', //點擊按鈕名稱
                }
            },
            '26': {
                eventId: 5000,
                event: 'gamania_acg_home_page_item_click',
                pageInfo: {
                    page: pageHome,
                },
                clickInfo: {
                    sec: 'nightmarket',
                    name: '', //點擊按鈕名稱
                }
            },
            '27': {
                eventId: 5000,
                event: 'gamania_acg_home_page_item_click',
                pageInfo: {
                    page: pageHome,
                    tab: '', //當下日期
                },
                clickInfo: {
                    sec: 'arena',
                    name: '', //點擊按鈕名稱
                }
            },
            '28': {
                eventId: 5000,
                event: 'gamania_acg_home_page_item_click',
                pageInfo: {
                    page: pageHome,
                    tab: '', //當下日期
                },
                clickInfo: {
                    sec: 'arena',
                    name: '', //點擊按鈕名稱
                }
            },
            '29': {
                eventId: 5000,
                event: 'gamania_acg_home_page_item_click',
                pageInfo: {
                    page: pageHome,
                    tab: '', //當下日期
                },
                clickInfo: {
                    sec: 'arena',
                    name: '', //點擊按鈕名稱
                    url: '', //前往網址
                }
            },
            '210': {
                eventId: 5000,
                event: 'gamania_acg_home_page_item_click',
                pageInfo: {
                    page: pageHome,
                },
                clickInfo: {
                    sec: 'campaign',
                    url: '', //前往網址
                }
            },
            '211': {
                eventId: 5000,
                event: 'gamania_acg_home_page_item_click',
                pageInfo: {
                    page: pageHome,
                },
                clickInfo: {
                    sec: 'campaign_info',
                    name: '', //點擊按鈕名稱
                }
            },
            '212': {
                eventId: 5000,
                event: 'gamania_acg_home_page_item_click',
                pageInfo: {
                    page: pageHome,
                },
                clickInfo: {
                    sec: 'card',
                    name: '', //點擊按鈕名稱
                }
            },
            '121': {
                eventId: 5017,
                event: 'gamania_acg_game_page_view',
                pageInfo: {
                    page: pageShoot,
                    status: '',
                },
            },
            '122': {
                eventId: 5018,
                event: 'gamania_acg_game_item_click',
                pageInfo: {
                   page: '',
                   status: '',
                },
                clickInfo: {
                    type: 'start_btn',
                    name: 'start_game', //點擊按鈕名稱
                }
            },
            '123': {
                eventId: 5018,
                event: 'gamania_acg_game_item_click',
                pageInfo: {
                    page: pageShoot,
                    status: 'game_over',
                },
                clickInfo: {
                    type: 'start_btn',
                    name: 'play_again', //點擊按鈕名稱
                }
            },
            '124': {
                eventId: 5018,
                event: 'gamania_acg_game_item_click',
                pageInfo: {
                    page: pageShoot,
                    status: 'game_over',
                },
                clickInfo: {
                    type: 'end_btn',
                    name: 'settlement', //點擊按鈕名稱
                }
            },
            '125': {
                eventId: 5018,
                event: 'gamania_acg_game_item_click',
                pageInfo: {
                    page: pageShoot,
                    status: 'game_over',
                },
                clickInfo: {
                    type: 'end_btn',
                    name: 'back_to_market', //點擊按鈕名稱
                }
            }
        }
        return events[eventNoId]
    }

    const {trackId, sender} = await trackingInit()
    BGOInit()
    passLoadedEvents()

    // Click
    $('body').on('click', '[data-tracking="click"]', async function(){
        // tracking
        let element = $(this)
        let sec = element.data('sec')
        let event_id = element.data('event_id')
        let event = getEvent(event_id)
        let info = element.data('info')
        let pages = element.data('pages')
        let url = element.attr('href')
        
        if (sec) {
            if (event.clickInfo.sec.indexOf(sec) !== -1) {
                event.clickInfo.sec = sec
            }else{
                console.error('clickInfo.sec 參數錯誤')
                return
            }
        }

        if (info !== undefined) {
            event.clickInfo = Object.assign(event.clickInfo, info)
            event.clickInfo.url = url
        }

        if (pages !== undefined) {
            event.pageInfo = Object.assign(event.pageInfo, pages)
        }

        await sender.passEvent(occursEvent('click', event))

        // redirect
        let key = element.data('redirect')
        if (key == undefined) {
            return;
        }
        let urls = getUrl(key)
        if (inApp && urls.in_app_link != '') {
            // leave_webview:bool 是否關閉當前頁面再跳轉
            BGO.deeplink_jump(urls.in_app_link, false)
        }else{
            location.href = urls.web_link;
        }
    })

    // 錨點
    const menu = $('#nav a[href!=\'javascript:void(0);\']')
    menu.click(function() {
        let href = $(this).attr('href')
        
        let name = $(this).data("name");
        let url = href.indexOf('#') === 0 ? '' : href;
        url = url.indexOf('javascript') == 0 ? '' : url;

        let event = getEvent('11')
        event.clickInfo.name = name
        event.clickInfo.url = url
        
        sender.passEvent(occursEvent('click', event))
    })
    const kvhash = $('#kv .btns a[href!=\'javascript:void(0);\']')
    kvhash.click(function() {
        let href = $(this).attr('href')
        
        let name = $(this).data("name");
        let url = href.indexOf('#') === 0 ? '' : href;
        url = url.indexOf('javascript') == 0 ? '' : url;

        let event = getEvent('23')
        event.clickInfo.name = name
        event.clickInfo.url = url
        
        sender.passEvent(occursEvent('click', event))
    })
    const middlehash = $('#middle a.gohash[href!=\'javascript:void(0);\']')
    middlehash.click(function() {
        let href = $(this).attr('href')
        
        let name = $(this).data("name");
        let url = href.indexOf('#') === 0 ? '' : href;
        url = url.indexOf('javascript') == 0 ? '' : url;

        let event = getEvent('25')
        event.clickInfo.name = name
        event.clickInfo.url = url
        
        sender.passEvent(occursEvent('click', event))
    })
    
    
    const getUrl = key => {
	    let urls = {
	        'gamania25_card': {
	            web_link: 'https://antspwmember.gamania.com/MainPage/index.html?utm_campaign=202207_carnival&utm_medium=page_202207carnival_home&utm_source=bfcard',
	            in_app_link: 'https://portal.beanfun.com/app/h5page/3401428c3f2c41a99420e3c17b215f37_oa?url=https%3A%2F%2Fantspwmember.gamania.com%2FMainPage%2Findex.html%3Futm_campaign%3D202207_carnival%26utm_medium%3Dpage_202207carnival_home%26utm_source%3Dbfcard&theme=1&title=%E6%A9%98%E5%AD%9025%E8%AA%8D%E5%90%8C%E5%8D%A1',
	        },
	        'atb_card': {
	            web_link: 'https://antspwmember.gamania.com/ActiveZip/a982316aed394ef89dd0bb303c34e701/index.html?utm_campaign=202207_carnival&utm_medium=page_202207carnival_home&utm_source=bfcard',
	            in_app_link: 'https://portal.beanfun.com/app/h5page/3401428c3f2c41a99420e3c17b215f37_oa?url=https%3A%2F%2Fantspwmember.gamania.com%2FActiveZip%2Fa982316aed394ef89dd0bb303c34e701%2Findex.html%3Futm_campaign%3D202207_carnival%26utm_medium%3Dpage_202207carnival_home%26utm_source%3Dbfcard&theme=1&title=%E5%8E%9F%E5%AD%90%E5%B0%91%E5%B9%B4%E8%AA%8D%E5%90%8C%E5%8D%A1',
	        }
	    }
	    return urls[key];
	}



})