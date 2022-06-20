var pageMaxLength = 10 //換頁筆數
var transLogData = []
var nowPage = 1;
var totalPages = 0;
$(function () {

    var data = {}
    $('.user_name').text(getData('username'))
    $('[name=goldbeans]').text(getData('beans1'))
    $('[name=silverbeans]').text(getData('beans2'))
    data.open_id = getbfd()
    apt.api.getUserTransLog(data, function (rs) {
        if (rs) {
            if (rs.code == '0000') {
                var retdata = JSON.parse(rs.datas)
                // console.log(retdata)
                transLogData = retdata
                setPage()
                pages(0)
            }
        }
    })
})
function setPage() {
    $('[name=rowPage]').remove()
    var dataLength = transLogData.length;
    totalPages = Math.floor((dataLength - 1) / pageMaxLength) + 1;
    for (var i = 0; i < totalPages; i++) {
        var newRow = $('#sample_Page').clone()
        $(newRow).attr('id', '').attr('style', '').attr('name', 'rowPage')
        $(newRow).find('button').attr('data-page', i + 1).attr('onclick', 'setPageButton(this)').html(i + 1);
        $('.page_list>li:nth-last-child(1)').before(newRow)
    }
}
function pages(step) {
    if (nowPage + step <= totalPages && nowPage + step >= 1) {
        $('button[data-page=' + (nowPage + step)+']').click()
    }
}
function setPageButton(e) {
    $('.page_list>li[name="rowPage"]>button').attr('class', '')
    $(e).attr('class', 'active')
    setTable($(e).attr('data-page'))
}
function setTable(page) {
    nowPage = parseInt(page)
    $('#bean_history>tbody>tr').remove()
    var dataStart = (nowPage - 1) * pageMaxLength;
    var dataEnd = (nowPage) * pageMaxLength;
    for (var i = dataStart; i < transLogData.length && i < dataEnd; i++) {
        var item = transLogData[i]
        var beans1 = ''
        var beans2 = ''
        var ad_name = (item.card1 == '0' && item.card1 == '0') ? item.ad_name : item.ad_name + ' ' + item.memo
        var newRow = $('#sample_row').clone()
        $(newRow).attr('id', '').attr('style', '')
        $(newRow).find('td:eq(0)').html(item.InDBDT);
        $(newRow).find('td:eq(1)').html(ad_name);

        beans1 = item.beans1 > 0 ? '×' + item.beans1 : item.beans1
        beans2 = item.beans2 > 0 ? '×' + item.beans2 : item.beans2
        if (item.beans1 != 0) {
            $(newRow).find('td:eq(2)>div:eq(0)>span').html(beans1);
        }
        else
            $(newRow).find('td:eq(2)>div:eq(0)').attr('style', 'display:none')
        if (item.beans2 != 0)
            $(newRow).find('td:eq(2)>div:eq(1)>span').html(beans2);
        else
            $(newRow).find('td:eq(2)>div:eq(1)').attr('style', 'display:none')
        $(newRow).appendTo($('#bean_history>tbody'))
    }
}

