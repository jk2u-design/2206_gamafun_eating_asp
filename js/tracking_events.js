const pageMission = 'acg_mission';
const pageGamecatch = 'acg_catch_game';
const getEvent = eventNoId => {
    let events = {

        '31': {
            eventId: 5009,
            event: 'gamania_acg_mission_page_view',
            pageInfo: {
                page: pageMission,
                name: 'beanfun'
            }
        },
        '32': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'beanfun'
            },
            clickInfo: {
                sec: ['bulletin', 'comment'],
                name: 'execute',
                url: ''
            }
        },
        '33': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'beanfun'
            },
            clickInfo: {
                name: 'back',
            }
        },
        '41': {
            eventId: 5009,
            event: 'gamania_acg_mission_page_view',
            pageInfo: {
                page: pageMission,
                name: 'gtw'
            }
        },
        '42': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'gtw'
            },
            clickInfo: {
                sec: ['vip', 'gacha', 'login', 'sign'],
                name: 'execute',
                url: '',
                content: ''
            }
        },
        '43': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'gtw'
            },
            clickInfo: {
                name: 'back',
            }
        },
        '51': {
            eventId: 5009,
            event: 'gamania_acg_mission_page_view',
            pageInfo: {
                page: pageMission,
                name: 'gash'
            }
        },
        '52': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'gash'
            },
            clickInfo: {
                sec: ['receive', 'reward'],
                name: 'execute',
                url: ''
            }
        },
        '53': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'gash'
            },
            clickInfo: {
                name: 'back',
            }
        },
        '61': {
            eventId: 5009,
            event: 'gamania_acg_mission_page_view',
            pageInfo: {
                page: pageMission,
                name: 'jollybuy'
            }
        },
        '62': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'jollybuy'
            },
            clickInfo: {
                sec: ['blind', 'consume'],
                name: 'execute',
                url: ''
            }
        },
        '63': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'jollybuy'
            },
            clickInfo: {
                name: 'back',
            }
        },
        '71': {
            eventId: 5009,
            event: 'gamania_acg_mission_page_view',
            pageInfo: {
                page: pageMission,
                name: 'gamapay'
            }
        },
        '72': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'gamapay'
            },
            clickInfo: {
                sec: ['credicard', 'transfer', 'account'],
                name: 'execute',
                url: ''
            }
        },
        '73': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'gamapay'
            },
            clickInfo: {
                name: 'back',
            }
        },
        '81': {
            eventId: 5009,
            event: 'gamania_acg_mission_page_view',
            pageInfo: {
                page: pageMission,
                name: 'novel'
            }
        },
        '82': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'novel'
            },
            clickInfo: {
                sec: ['collect', 'read', 'bonus'],
                name: 'execute',
                url: ''
            }
        },
        '83': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'novel'
            },
            clickInfo: {
                name: 'back',
            }
        },
        '91': {
            eventId: 5009,
            event: 'gamania_acg_mission_page_view',
            pageInfo: {
                page: pageMission,
                name: 'comic'
            }
        },
        '92': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'comic'
            },
            clickInfo: {
                sec: ['collect', 'read', 'bonus'],
                name: 'execute',
                url: ''
            }
        },
        '93': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'comic'
            },
            clickInfo: {
                name: 'back',
            }
        },
        '101': {
            eventId: 5009,
            event: 'gamania_acg_mission_page_view',
            pageInfo: {
                page: pageMission,
                name: 'atb'
            }
        },
        '102': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'atb'
            },
            clickInfo: {
                sec: ['vote', 'box', 'consume'],
                name: 'execute',
                url: ''
            }
        },
        '103': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'atb'
            },
            clickInfo: {
                name: 'back',
            }
        },
        '111': {
            eventId: 5009,
            event: 'gamania_acg_mission_page_view',
            pageInfo: {
                page: pageMission,
                name: 'artisit'
            }
        },
        '112': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'artisit'
            },
            clickInfo: {
                name: 'content',
                url: ''
            }
        },
        '113': {
            eventId: 5010,
            event: 'gamania_acg_mission_page_item_click',
            pageInfo: {
                page: pageMission,
                name: 'artisit'
            },
            clickInfo: {
                name: 'back',
            }
        },
        '126_1': {
            eventId: 5017,
            event: 'gamania_acg_game_page_view',
            pageInfo: {
                page: pageGamecatch,
                status:'not_logged_in',
            }
        },
        '126_2': {
            eventId: 5017,
            event: 'gamania_acg_game_page_view',
            pageInfo: {
                page: pageGamecatch,
                status:'logged_in',
            }
        },
        '126_3': {
            eventId: 5017,
            event: 'gamania_acg_game_page_view',
            pageInfo: {
                page: pageGamecatch,
                status:'processing',
            }
        },
        '126_4': {
            eventId: 5017,
            event: 'gamania_acg_game_page_view',
            pageInfo: {
                page: pageGamecatch,
                status:'game_over',
            }
        },
        '127': {
            eventId: 5018,
            event: 'gamania_acg_game_item_click',
            pageInfo: {
                page: pageGamecatch,
                status: ['not_logged_in','logged_in'],
            },
             clickInfo: {
                name: 'start_game',
                type:'start_btn',
            }
        },
        '128': {
            eventId: 5018,
            event: 'gamania_acg_game_item_click',
            pageInfo: {
                page: pageGamecatch,
                status: 'game_over',
            },
             clickInfo: {
                name: 'play_again',
                type:'start_btn',
            }
        },
        '129': {
            eventId: 5018,
            event: 'gamania_acg_game_item_click',
            pageInfo: {
                page: pageGamecatch,
                status: 'game_over',
            },
             clickInfo: {
                name: 'settlement',
                type:'end_btn ',
            }
        },
        '1210': {
            eventId: 5018,
            event: 'gamania_acg_game_item_click',
            pageInfo: {
                page: pageGamecatch,
                status: 'game_over',
            },
             clickInfo: {
                name: 'back_to_market',
                type:'end_btn ',
            }
        },
        '1211_1': {
            eventId: 5017,
            event: 'gamania_acg_game_page_view',
            pageInfo: {
                page: 'acg_poke_game',
                status:'not_logged_in',
            }
        },
        '1211_2': {
            eventId: 5017,
            event: 'gamania_acg_game_page_view',
            pageInfo: {
                page: 'acg_poke_game',
                status: 'logged_in',
            }
        },
        '1211_3': {
            eventId: 5017,
            event: 'gamania_acg_game_page_view',
            pageInfo: {
                page: 'acg_poke_game',
                status: 'game_over',
            }
        },
        '1212': {
            eventId: 5018,
            event: 'gamania_acg_game_item_click',
            pageInfo: {
                page: 'acg_poke_game',
                status: ['not_logged_in','logged_in'],
            },
            clickInfo: {
                name: 'poke_for_prize',
                type:'start_btn',
            }
        },
        '1213': {
            eventId: 5018,
            event: 'gamania_acg_game_item_click',
            pageInfo: {
                page: 'acg_poke_game',
                status: ['not_logged_in','logged_in'],
            },
            clickInfo: {
                name: 'poke_for_treasure',
                type:'start_btn',
            }
        },
        '1214': {
            eventId: 5017,
            event: 'gamania_acg_game_page_view',
            pageInfo: {
                page: 'acg_poke_game_bean',
            },
        },
        '1215': {
            eventId: 5018,
            event: 'gamania_acg_game_item_click',
            pageInfo: {
                page: 'acg_poke_game_bean',
            },
            clickInfo: {
                name: ['gold_bean','silver_bean'],
                type:'start_btn',
            }
        },
        '1216': {
            eventId: 5017,
            event: 'gamania_acg_game_page_view',
            pageInfo: {
                page: 'acg_poke_game_prize',
            },
        },
        '1217': {
            eventId: 5018,
            event: 'gamania_acg_game_item_click',
            pageInfo: {
                page: 'acg_poke_game_prize',
            },
            clickInfo: {
                name: ['open_chest','play_again'],
                type:'end_btn',
            }
        },
    }
    return events[eventNoId]
}


const getUrl = key => {
    let urls = {
        'mission_beanfun_bulletin': {
            web_link: 'https://stg-portal.beanfun.com/app/h5page/6cca98d0ee21473ab1e07fc4ff7e6435_oa?url=https%3A%2F%2Fstg-news.beanfun.com%2Farticles%2Ftw%2F55%2F1535175816294436864%2Fdetail.html%3Futm_source%3Dothers%26utm_term%3Dothers%26utm_medium%3Dnews_game%26utm_campaign%3Dios_share%26utm_content%3Ddetail&theme=1&title=%E9%9B%BB%E7%8E%A9%E6%98%9F',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/6cca98d0ee21473ab1e07fc4ff7e6435_oa?url=https%3A%2F%2Fstg-news.beanfun.com%2Farticles%2Ftw%2F55%2F1535175816294436864%2Fdetail.html%3Futm_source%3Dothers%26utm_term%3Dothers%26utm_medium%3Dnews_game%26utm_campaign%3Dios_share%26utm_content%3Ddetail&theme=1&title=%E9%9B%BB%E7%8E%A9%E6%98%9F',
        },
        'mission_beanfun_comment': {
            web_link: 'https://stg-portal.beanfun.com/app/club/459645002734112768?postId=525677374784671744',
            in_app_link: 'https://stg-portal.beanfun.com/app/club/459645002734112768?postId=525677374784671744',
        },
        'mission_game_gacha': {
            web_link: 'https://bean.fun/RNp3c',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/2387ac2b28b54602aff22115d26b06b1_oa?url=https%3A%2F%2Falpha-bfweb.beanfun.com%2FBonus&theme=1&title=%E9%A0%98%E8%BD%89%E8%9B%8B%E6%8B%BF%E9%87%91%E8%B1%86',
        },
        'mission_game_login': {
            web_link: 'https://tw.newlogin.beanfun.com/loginform.aspx?skey=202205f873ebefcc2c43&display_mode=2',
            in_app_link: '',
        },
        'mission_game_sign': {
            web_link: 'https://bean.fun/cwpCy',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/2387ac2b28b54602aff22115d26b06b1_oa?url=https%3A%2F%2Falpha-bfweb.beanfun.com%2Fdailycheckin&theme=1&title=%E9%81%8A%E6%88%B2%E7%B0%BD%E5%88%B0%E9%A0%98%E9%8A%80%E8%B1%86',
        },
        'mission_gash_receive': {
            web_link: 'https://stg-portal.beanfun.com/app/club/525684534889422848?postId=525685748335120384',
            in_app_link: 'https://stg-portal.beanfun.com/app/club/525684534889422848?postId=525685748335120384',
        },
        'mission_gash_reward': {
            web_link: 'https://stage-ec.gashpoint.com/SalePackage/Index/5?ChargeID=SA00245&EC_ID=EC021120000',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/c264ad2321b24f32b8eb5dfd2deb28b6_oa?url=https%3A%2F%2Fstage-ec.gashpoint.com%2FSalePackage%2FIndex%2F5%3FChargeID%3DSA00245%26EC_ID%3DEC021120000&theme=1&title=%E6%A9%98%E5%AD%90%E5%98%89%E5%B9%B4%E8%8F%AF',
        },
        'mission_jollybuy_blind': {
            web_link: 'https://dev-www.jollybuy.com/act/playground/',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/c264ad2321b24f32b8eb5dfd2deb28b6_oa?url=https%3A%2F%2Fdev-www.jollybuy.com%2Fact%2Fplayground%2F&theme=1&title=%E6%A9%98%E5%AD%90%E5%98%89%E5%B9%B4%E8%8F%AF',
        },
        'mission_jollybuy_consume': {
            web_link: 'https://dev-www.jollybuy.com/act/202207carnival/',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/c264ad2321b24f32b8eb5dfd2deb28b6_oa?url=https%3A%2F%2Fdev-www.jollybuy.com%2Fact%2Fplayground%2F&theme=1&title=%E6%A9%98%E5%AD%90%E5%98%89%E5%B9%B4%E8%8F%AF',
        },
        'mission_gamapay_credicard': {
            web_link: 'https://www.gamapay.com.tw/beanfun/event/202207_live/',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/c264ad2321b24f32b8eb5dfd2deb28b6_oa?url=https%3A%2F%2Fwww.gamapay.com.tw%2Fbeanfun%2Fevent%2F202207_live%2F&theme=1&title=%E6%A9%98%E5%AD%90%E5%98%89%E5%B9%B4%E8%8F%AF',
        },
        'mission_gamapay_transfer': {
            web_link: 'https://www.gamapay.com.tw/beanfun/event/202207_live/',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/c264ad2321b24f32b8eb5dfd2deb28b6_oa?url=https%3A%2F%2Fwww.gamapay.com.tw%2Fbeanfun%2Fevent%2F202207_live%2F&theme=1&title=%E6%A9%98%E5%AD%90%E5%98%89%E5%B9%B4%E8%8F%AF',
        },
        'mission_gamapay_account': {
            web_link: 'https://www.gamapay.com.tw/beanfun/event/202207_live/',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/c264ad2321b24f32b8eb5dfd2deb28b6_oa?url=https%3A%2F%2Fwww.gamapay.com.tw%2Fbeanfun%2Fevent%2F202207_live%2F&theme=1&title=%E6%A9%98%E5%AD%90%E5%98%89%E5%B9%B4%E8%8F%AF',
        },
        'mission_novel': {
            web_link: 'https://stg-portal.beanfun.com/app/explore?tab=planet&target=book',
            in_app_link: 'https://stg-portal.beanfun.com/app/explore?tab=planet&target=book',
        },
        'mission_comic': {
            web_link: 'https://comics-star-web-staging.insowe.tech/',
            in_app_link: 'https://stg-portal.beanfun.com/app/explore?tab=planet&target=comic',
        },
        'mission_atb_vote': {
            web_link: 'https://stg-atomboyz.beanfun.com/',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/c264ad2321b24f32b8eb5dfd2deb28b6_oa?url=https%3A%2F%2Fstg-atomboyz.beanfun.com&theme=1&title=%E6%A9%98%E5%AD%90%E5%98%89%E5%B9%B4%E8%8F%AF',
        },
        'mission_atb_box': {
            web_link: 'https://atbmart.beanfun.com/content/atomboyz/event/index_back.html?shortlink=bultvgxy&c=atomboyz202201_atb_gamafunweb_atbbox&pid=atomboyz202201',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/c264ad2321b24f32b8eb5dfd2deb28b6_oa?url=https%3A%2F%2Fatbmart.beanfun.com%2Fcontent%2Fatomboyz%2Fevent%2Findex_back.html%3Fshortlink%3Dbultvgxy%26c%3Datomboyz202201_atb_gamafunweb_atbbox%26pid%3Datomboyz202201&theme=1&title=%E6%A9%98%E5%AD%90%E5%98%89%E5%B9%B4%E8%8F%AF%E5%8E%9F%E5%AD%90%E5%B0%91%E5%B9%B4%E4%BB%BB%E5%8B%99',
        },
        'mission_atb_consume': {
            web_link: 'https://dev-template01.jollybuy.com/',
            in_app_link: 'https://stg-portal.beanfun.com/app/h5page/c264ad2321b24f32b8eb5dfd2deb28b6_oa?url=https%3A%2F%2Fdev-template01.jollybuy.com%2F&theme=1&title=%E6%A9%98%E5%AD%90%E5%98%89%E5%B9%B4%E8%8F%AF',
        },
    }
    return urls[key];
}