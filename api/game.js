$('#start_game').on("click", function () {
    if (!getbfd()) {
        alert('請您先進行登入喔！')
        return;
    }
    var data = {}
    data.open_id = getbfd()
    data.game = getSessionData('game')
    apt.api.GameCheck(data, function (rs) {
        if (rs) {
            if (rs.code == '0000') {
                //紀錄遊戲時間
                setData('startTime', rs.gametime)
                setData('gametimeSHA', rs.gametimeSHA)
                $('#btn_gameover').show()
                $('#btn_repeat').hide()
                iwannaplayagame()
            }
            else {
                if (rs.code == 'E999') {
                    //尚未開放遊戲
                    alert(rs.msg)
                }
                else {
                    iwannaplayagame()
                }
                $('#btn_gameover').hide()
                $('#btn_repeat').show()
            }
        }
    })
});
$('#btn_gameover').on("click", function () {
    if (!getbfd()) {
        alert('請您先進行登入喔！')
        return;
    }
    var data = {}
    data.open_id = getbfd()
    data.game = getSessionData('game')
    data.startTime = getData('startTime')
    data.gametimeSHA = getData('gametimeSHA')
    data.beans1 = getSessionData('bean1')
    data.beans2 = getSessionData('bean2')
    apt.api.GameRecord(data, function (rs) {
        if (rs) {
            if (rs.code != '0000') {
                alert(rs.msg)
            }
            else {
                $('#btn_gameover').hide()
                $('#btn_repeat').show()
                $('header').load('include_files/header.html');
            }
        }
    })
});

