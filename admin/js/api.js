
function CheckLogin() {
    var uid = localStorage.getItem('UserID');
    var dt = localStorage.getItem('login');
    var now = (new Date).getTime();

    if (uid && dt) {
        var expire = (now - dt) / 1000
        if (expire > 60 * 60) {
            localStorage.clear();
            window.location.href = 'login.html'
        }
        localStorage.setItem('login', (new Date).getTime());
    }
    else {
        window.location.href = 'login.html'
    }
}
var apt = {};
apt.api = {};
var webURL = window.document.location.origin ;
apt.api.ajax = function (url, type, data, _callback) {
    var allUrl = webURL + url;
    $.ajax({
        url: allUrl,
        type: type,
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "JSON",
        success: function (rs) {
            console.log(rs);
            _callback(rs)
        },
        error: function (e) {
            //RebackLogin(e.Code);
            console.log("error")
        }
    });
};

//登入
apt.api.Login = function (data, _cb) {
    var url = '/admin/UserLogin';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};

//取得log明細
apt.api.getUserLog = function (data,  _cb) {
    var url = '/admin/getUserLog';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};

//取得數據追蹤
apt.api.getTrackingLog = function (data, _cb) {
    var url = '/admin/getTrackingLog';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};

//取得邀請碼
apt.api.getInviteLog = function (data, _cb) {
    var url = '/admin/getInviteLog';
    var type = 'POST';
    this.ajax(url, type, data, _cb);
};