var ad = ''
$('[data-ad]').on("click", function () {
    ad = $(this).data('ad')
});
$('.use_gold').on("click", function (e) {
    e.preventDefault();
    lottery(1)
});
$('.use_silver').on("click", function (e) {
    e.preventDefault();
    lottery(2)
});
function lottery(bean) {
    if (!getbfd()) {
        alert('請您先進行登入喔！')
        return;
    }
    if (ad) {
        var data = {}
        data.open_id = getbfd()
        data.bean = bean
        data.ad_id = ad
        apt.api.CampaignReceive(data, function (rs) {
            if (rs) {
                if (rs.code == '0000') {
                    show1()
                    if (inapp) {
                        BGO.DEEPLINK_JUMP(isProd ? 'https://portal.beanfun.com/app/backpack/reward' : 'https://stg-portal.beanfun.com/app/backpack/reward', false);
                    }
                    else {
                        $('header').load('include_files/header.html');
                        show2()
                    }
                }
                else {
                    alert(rs.msg)
                }
            }
        })
    }
}
$('[data-href]').on("click", function () {
    if (!getbfd()) {
        alert('請您先進行登入喔！')
        return;
    }
    else {
        location.href = $(this).data('href')
    }
});

