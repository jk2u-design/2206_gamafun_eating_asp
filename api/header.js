
$(function () {
    if (urlParam('code')) {
        apt.api.WebUserLogin({ code: urlParam('code') }, function (rs) {
            if (rs) {
                if (rs.code == '0000') {
                    setData('open_id', rs.datas.open_id)
                    setData('username', rs.datas.username)
                    setData('open_Key', rs.datas.open_Key)
                    setData('login', (new Date).getTime());
                    var redirect_uri = getData('redirect_uri')
                    if (redirect_uri) {
                        setData('redirect_uri', '')
                        location.href = redirect_uri
                    }
                }
            }
        })
    }
    if (getbfd()) {
        var uid = getData("open_id")
        var dt = getData('login');
        var now = (new Date).getTime();

        if (uid && dt) {
            var expire = (now - dt) / 1000
            if (expire > 60 * 60) {
                localStorage.clear();
                //window.location.href = 'login.html'
            }
            setData('login', (new Date).getTime());
        }
        else {
            //window.location.href = 'login.html'
        }
    }
    if (getbfd() || inapp) {
        $('#login_bf').hide()
        $('#login_float').hide()
    }
    $('#login_float, #login_bf').on('click', function () {
        setData('redirect_uri', location.href)
        location.href = getLoginURL()
    })
    if (getbfd()) {
        $('#wallet').attr('href', $('#wallet').data('href'))
        var data = {}
        data.open_id = getbfd()
        apt.api.getUserData(data, function (rs) {
            if (rs) {
                if (rs.code == '0000') {
                    var retdata = JSON.parse(rs.datas)[0]
                    $('#user_name').text(retdata.username.substring(0, 5))
                    $('#goldbeans').text(retdata.beans1)
                    $('#silverbeans').text(retdata.beans2)
                    setData('username', retdata.username)
                    setData('beans1', retdata.beans1)
                    setData('beans2', retdata.beans2)
                }
            }
        })
    }
    else {
        $('#wallet').on('click', function () {
            setData('redirect_uri', location.href)
            location.href = getLoginURL()
        })
    }
})

