$(function () {
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
})

