$('a').on("click", function () {
    var web = $(this).data('Weburl')
    var BGOurl = $(this).data('BGOurl')
    var BGOdeeplink = $(this).data('BGOdeeplink')
    if (inapp) {
        if (BGOdeeplink) BGO.deeplink_jump(BGOdeeplink, false)
        else BGO.redirect_uri_by_default_browser(BGOurl)
    }
    else
        if (web) location.href = web
})