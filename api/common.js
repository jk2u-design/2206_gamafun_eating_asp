
var isProd = false;
$(function () {
    if (document.location.hostname.toLowerCase() == "gamafun.beanfun.com") {
        //正式站
        isProd = true;
        loadingJS('https://beangochat.blob.core.windows.net/beango-static-prod/sdk/beanfun.min.js', CheckInApp)
    }
    else {
        isProd = false;
        loadingJS('https://beangostg.blob.core.windows.net/beango-static-stg/sdk/beanfun.min.js', CheckInApp)
    }
})
function urlParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return decodeURI(results[1]) || 0;
    }
}
function getSessionData(key) {
    if (sessionStorage.getItem(key) == null) { return ""; }
    else { return sessionStorage.getItem(key); }
}
function getData(key) {
    if (localStorage.getItem(key) == null) { return ""; }
    else { return localStorage.getItem(key); }
}
function setData(key, data) {
    localStorage.setItem(key, data)
}
function loadingJS(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    if (callback)
        script.onload = function () { callback() }
}
window.onload = function () {
    var qrcode = getSessionData('bfqrcode')
    if (qrcode) {
        sessionStorage.clear()
        getqrcode(qrcode)
    }
};
//取得opendata
function getbfd() {
    return getData('open_id');
}

function getLoginURL() {
    var url = "{0}/oauth2/v1/authorize?response_type=code&prompt={4}&user_level=5&client_id={1}&scope=openid profile&redirect_uri={2}&state={3}&nonce=abba";
    var AccountURL = "";
    var client_id = "";
    var redirect_uri = "";
    var state = "";
    var prompt = ""
    if (isProd) {
        AccountURL = "https://accounts.beanfun.com";
        client_id = "9163F3BD-8C59-4F25-8969-94C62CF374B7";
        redirect_uri = "https://gamafun.beanfun.com";
    }
    else {
        AccountURL = "https://stg-accounts.beanfun.com";
        client_id = "A35DF2D9-9672-46F3-B2CF-C69283CAFC64";
        //redirect_uri = "https://stg-gamafun.beanfun.com";
        //redirect_uri = 'http://34.80.235.122'
        redirect_uri = document.location.origin
    }
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        prompt ="password"
    }
    else {
        prompt = "select_account"
    }
    state = (new Date).getTime()
    url = String.format(url, AccountURL, client_id, redirect_uri, state, prompt)
    return url
}
String.format = function (src) {
    if (arguments.length == 0) return undefined;
    var args = Array.prototype.slice.call(arguments, 1);
    return src.replace(/\{(\d+)\}/g, function (m, i) {
        return args[i];
    });
};

function getqrcode(campaignID) {
    var data = {}
    data.open_id = getbfd()
    data.campaignID = campaignID
    apt.api.QRCode(data, function (rs) {
        if (rs) {
            if (rs.code == '0000') {
                $('header').load('include_files/header.html');
            }
            else {
                alert(rs.msg)
            }
        }
    })
}
function CheckInApp() {
    BGO.check_app_exist(function (data) {
        if (data.result && data.result == 'ok') {
            $('#login_bf').hide()
            $('#login_float').hide()
            setData('inapp', true)
            apt.api.getBGO({}, function (rs) {
                if (rs) {
                    if (rs.code == '0000') {
                        BGO.init({ token: rs.datas.token, official_account_id: rs.datas.accountid });
                        BGO.get_me_openid_access_token(rs.datas.clientid, '', function (data) {
                            if (data.access_token) {
                                apt.api.APPUserLogin({ access_token: data.access_token, username: data.me_profile.nickname }, function (rs) {
                                    if (rs) {
                                        if (rs.code == '0000') {
                                            setData('open_id', rs.datas.open_id)
                                            setData('username', rs.datas.username)
                                            setData('open_Key', rs.datas.open_Key)
                                            setData('login', (new Date).getTime());
                                        }
                                    }
                                })
                            }
                        });
                    }
                }
            })
        }
    })
}
