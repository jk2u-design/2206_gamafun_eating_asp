
$('#invite_send').on("click", function () {
    if (!getbfd()) {
        alert('請您先進行登入再輸入邀請碼喔！')
        return;
    }
    if ($('#invite_code').val()) {
        var data = {}
        data.open_id = getbfd()
        data.invitecode = $('#invite_code').val()
        apt.api.InviteCodeRecord(data, function (rs) {
            if (rs) {
                if (rs.code != '0000') {
                    alert('Oops！輸入的邀請碼錯誤啦！\n提醒您：\n＊每組邀請碼限輸入1次\n＊每帳號最多可輸入5組邀請碼')
                }
                else {
                    alert('獲得1個金豆啦！')
                    $('#invite_code').val('')
                    $('header').load('include_files/header.html');
                }
            }
        })
    }
});

