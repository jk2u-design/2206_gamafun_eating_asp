$(function () {
    if (getbfd() || inapp) {
        $('#login_bf').hide()
        $('#login_float').hide()
    }
    $('#login_float, #login_bf').on('click', function () {
        setData('redirect_uri', location.href)
        location.href = getLoginURL()
    })
    if (getbfd()) {
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
})

