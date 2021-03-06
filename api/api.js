
var apt = {};
apt.api = {};
var webURL = window.document.location.origin ;
apt.api.ajax = function (url, type, data, _callback, check=true) {
    if (check) {
        if (!getbfd()) {
            console.log('not login ')
            return;
        }
        data.open_id = getData('open_id')
        data.open_Key = getData('open_Key')
    }
    
    var allUrl = webURL + url;
    $.ajax({
        url: allUrl,
        type: type,
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "JSON",
        success: function (rs) {
            //console.log(rs);
            _callback(rs)
        },
        error: function (e) {
            //RebackLogin(e.Code);
            console.log("error")
        }
    });
};
//apt.api.ajax1 = function (url, type, data, _callback) {
//    var allUrl = webURL + url;
//    $.ajax({
//        url: allUrl,
//        type: type,
//        data: JSON.stringify(data),
//        contentType: "application/json",
//        dataType: "JSON",
//        success: function (rs) {
//            console.log(rs);
//            _callback(rs)
//        },
//        error: function (e) {
//            //RebackLogin(e.Code);
//            console.log("error")
//        }
//    });
//};
//登入
apt.api.WebUserLogin = function (data, _cb) {
    var url = '/User/WebUserLogin';
    var type = 'POST';
    this.ajax(url, type, data, _cb, false);
};

//取得用戶資料
apt.api.getUserData = function (data,  _cb) {
    var url = '/User/getUserData';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};

//取得用戶豆子歷程
apt.api.getUserTransLog = function (data, _cb) {
    var url = '/User/getUserTransLog';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};

//取得邀請碼
apt.api.InviteCodeRecord = function (data, _cb) {
    var url = '/User/InviteCodeRecord';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};

//遊戲檢核
apt.api.GameCheck = function (data, _cb) {
    var url = '/User/GameCheck';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};

//遊戲結算
apt.api.GameRecord = function (data, _cb) {
    var url = '/User/GameRecord';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};

//取得用戶任務完成進度
apt.api.getUserMission = function (data, _cb) {
    var url = '/User/getUserMission';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};

//派獎
apt.api.CampaignReceive = function (data, _cb) {
    var url = '/User/CampaignReceive';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};

//QRCode
apt.api.QRCode = function (data, _cb) {
    var url = '/User/QRCode';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};

//BGO資訊
apt.api.getBGO = function (data, _cb) {
    var url = '/User/getBGO';
    var type = 'POST';
    this.ajax(url, type, data, _cb, false);
};

//手機用戶登入
apt.api.APPUserLogin = function (data, _cb) {
    var url = '/User/APPUserLogin';
    var type = 'POST';
    this.ajax(url, type, data, _cb, false);
};