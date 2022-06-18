var inapp = false;
var isProd = false;
function GetToken() {
    if (sessionStorage.getItem('opendata') == null) { return ""; }
    else { return sessionStorage.getItem('opendata'); }
}
function CheckLogin() {
    if (!GetToken()) {
        sessionStorage.clear();
        window.location.href = 'login.html'
    }
}
function CheckInApp() {
    BGO.check_app_exist(function (data) {
        if (data.result && data.result == 'ok') {
            $('#login_bf').hide()
            $('#login_float').hide()
            inapp = true;
        }
    })
}
function urlParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return decodeURI(results[1]) || 0;
    }
}
function getData(key) {
    if (sessionStorage.getItem(key) == null) { return ""; }
    else { return sessionStorage.getItem(key); }
}
function setData(key, data) {
    sessionStorage.setItem(key, data)
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
    if (document.location.hostname.toLowerCase() == "gamafun.beanfun.com") {
        //正式站
        isProd = true;
        loadingJS('https://beangochat.blob.core.windows.net/beango-static-prod/sdk/beanfun.min.js', CheckInApp)
    }
    else {
        isProd = false;
        loadingJS('https://beangostg.blob.core.windows.net/beango-static-stg/sdk/beanfun.min.js', CheckInApp)
    }
    if (getbfd()) {
        $('#login_bf').hide()
        $('#login_float').hide()
    }
};
//取得opendata
function getbfd(){
    //return '2135820757962346496';
    return 'pid0'
    //return getData('bfd');
}