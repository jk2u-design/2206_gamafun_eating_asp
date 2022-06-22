$(function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
})

// 豆子計算區
var windowW = $('.game .container').width();
var windowH = $('.game .container').height();

var gm1 = $('.gm1');
var gm1W = gm1.width();
var gm1Left = gm1.position().left;
var gm1Top = gm1.position().top;
var gm1Speed = 500;
var gm1NewSpeed = gm1Speed;

var gm2 = $('.gm2');
var gm2W = gm2.width();
var gm2Left = gm2.position().left;
var gm2Top = gm2.position().top;
var gm2Speed = 2000;
var g2NewSpeed = gm2Speed;

var beanRandomNum = 10;
var beanItem1 = '<div class="bean bean1"><img style="width:100%;" src="images/game_beans/bean_silver.svg"></div>';
var beanItem2 = '<div class="bean bean2"><img style="width:100%;" src="images/game_beans/bean_gold.svg"></div>';
var beanMoveSpeed = 1500;
var beanMoveSpeed2 = 1000;
var user = $('.user');
var userWidth = $('.user').width();
var userLeft = user.position().left;

var score1 = parseInt($('.game_num1').text());
var score2 = parseInt($('.game_num2').text());
var gameTime = 15000;
var gameMove;
var getbean1 = 0, getbean2 = 0, lostbean1 = 0, lostbean2 = 0;
// 豆子1得分
function goal1() {
    $.each($('.bean1'), function () {
        var userTop = user.position().top; //上
        var userBottom = user.position().top + user.height(); //下
        var userLeft = user.position().left; //左
        var userRight = user.position().left + user.width(); //右

        var beanTop = $(this).position().top; //上
        var beanBottom = $(this).position().top + $(this).height(); //下
        var beanLeft = $(this).position().left; //左
        var beanRight = $(this).position().left + $(this).width(); //右

        //   
        if (userLeft < beanRight && userRight > beanLeft) { //左右重疊
            if (userTop < beanBottom && userBottom > beanTop) { //上下重疊            
                $('.game_num1').text(score1 + 1)
                score1 = parseInt($('.game_num1').text());
                $(this).remove()
                $('.hint').addClass('on');
                setTimeout(function () { $('.hint').removeClass('on'); }, 500)
            }
        }
    });
}
// 豆子2得分
function goal2() {
    $.each($('.bean2'), function () {
        var userTop = user.position().top,
            userBottom = user.position().top + user.height(),
            userLeft = user.position().left,
            userRight = user.position().left + user.width()

        var beanTop = $(this).position().top,
            beanBottom = $(this).position().top + $(this).height(),
            beanLeft = $(this).position().left,
            beanRight = $(this).position().left + $(this).width();

        if (userLeft < beanRight && userRight > beanLeft) { //左右重疊
            if (userTop < beanBottom && userBottom > beanTop) { //上下重疊              
                $('.game_num2').text(score2 + 1)
                score2 = parseInt($('.game_num2').text());
                $(this).remove(); $('.hint').addClass('on');
                setTimeout(function () { $('.hint').removeClass('on'); }, 500)
            }
        }
    });
}

// 發豆1位置往左
function gm1GoLeft() {
    gm1.animate({ left: 0 }, gm1NewSpeed, function () {
        checkgm1Dir()
    })
}
// 發豆1位置往右
function gm1GoRight() {
    var windowW = $('.game .container').width();
    gm1.animate({ left: windowW - gm1W }, gm1NewSpeed, function () {
        checkgm1Dir()
    })
}
// 確認發豆1位置
function checkgm1Dir() {
    gm1Left = gm1.position().left;
    gm1NewSpeed = Math.floor(Math.random() * gm1Speed) + 1000

    if (gm1Left == 0) {
        gm1GoRight();
    } else {
        gm1GoLeft();
    }
}
// 發豆2位置往左
function gm2GoLeft() {
    gm2.animate({ left: 0 }, gm2NewSpeed, function () {
        checkgm2Dir()
    })
}
// 發豆2位置往右
function gm2GoRight() {
    var windowW = $('.game .container').width();

    gm2.animate({ left: windowW - gm2W }, gm2NewSpeed, function () {
        checkgm2Dir()
    })
}
// 確認發豆2位置
function checkgm2Dir() {
    gm2Left = gm2.position().left;
    gm2NewSpeed = Math.floor(Math.random() * gm2Speed) + 1000

    if (gm2Left == 0) {
        gm2GoRight();
    } else {
        gm2GoLeft();
    }
}

// 發豆1
function inputbean1() {
    gm1Left = gm1.position().left;
    $(beanItem1).css('left', gm1Left).css('top', 50).animate({ top: windowH }, beanMoveSpeed).appendTo('.game .container').queue(function () {
        if ($(this).position().top >= windowH) {
            this.remove();
            lostbean1 = lostbean1 + 1
        }
    });
}
// 發豆2
function inputbean2() {
    gm2Left = gm2.position().left;
    $(beanItem2).css('left', gm2Left).css('top', 50).animate({ top: windowH }, beanMoveSpeed2).appendTo('.game .container').queue(function () {
        if ($(this).position().top >= windowH) {
            this.remove();
            lostbean2 = lostbean2 + 1
        }
    });
}

// 遊戲結束
function gameEnd() {
    sessionStorage.setItem('game', '2')//YT add
    sessionStorage.setItem('bean1', score2)//YT add
    sessionStorage.setItem('bean2', score1)//YT add
    // 頁面切換
    $('.game').hide();
    $('.result').fadeIn();
    // 計分
    $('.game_score1').text(score1);
    $('.game_score2').text(score2);
    // 放煙火
    $('.bean').remove();
    $('#fireworks').fireworks();
    jQuery('#fireworks').before(jQuery("canvas"));
}
// 遊戲開始
function gameStart() {
    if (gameTime <= 0) {
        clearTimeout(gameMove);
        clearTimeout(bean1Go, bean2Go);
        gameEnd();
    } else {
        gameTime = gameTime - 100;
        $('.timeNum').text(Math.floor(gameTime / 1000))
    }
    goal1();
    goal2();
}
var startcount = 5;
function readystart() {
    $('.readystart').html(startcount);
    setTimeout(readystart, 1000);
    startcount -= 1;
    if (startcount == -1) {
        $('.readystart').text('START');
    }
}
$('.start').click(function () {
    iwannaplayagame()
})
function iwannaplayagame() {
    $('.cover').hide();
    $('.start_count').show()

    readystart()
    setTimeout(function () {
        $('.start_count').hide()
        $('.game').fadeIn(0);
        $('html,body').css('overflow', 'hide');
        checkgm1Dir();
        checkgm2Dir();
        gameMove = setInterval(gameStart, 100);
        bean1Go = setInterval(inputbean1, 800)
        bean2Go = setInterval(inputbean2, 8500)
    }, 6000)
}
$(function () {
    sessionStorage.setItem('game', '2')//YT add
    sessionStorage.setItem('bean1', 0)//YT add
    sessionStorage.setItem('bean2', 0)//YT add
    $('.return').click(function () {
        console.log('restart')
        window.location.reload();
    })

    $('.btn_dir').click(function () {
        
        $(this).addClass('on').setTimeout
        setTimeout(function () {$('.btn_dir').removeClass('on')},100)
        

        var con_x = $('.game .container').offset().left;
        var con_w = $('.game .container').width();
        var user_w = user.width();
        var user_x = user.position().left;
        

        if ($(this).hasClass('btn_lt')) {
            var mov = user_x - user_w / 2
            if (user_x - user_w / 2 > 0) {
                user.stop(true, false).animate({ left: mov }, 0)
            }

        } else if ($(this).hasClass('btn_rt')) {
            var mov = user_x + user_w * 1.5
            if (user_x + user_w * 1.5 < con_w) {
                user.stop(true, false).animate({ left: mov }, 0)
            }
        }

    })
    // user移動的部分
    // $('html').mousemove(function (e) {
    //     var mouse_x = e.pageX;
    //     var mouse_y = e.pageY;
    //     var user_w = user.width();
    //     var con_x = $('.game .container').offset().left;
    //     var con_w = $('.game .container').width();

    //     //滑鼠在籃子範圍
    //     if (mouse_x >= con_x + user_w / 2 && mouse_x <= con_x + con_w - user_w / 2) {
    //         //滑鼠在.container之間
    //         var mov = mouse_x - con_x - user_w / 2;
    //         user.stop(true, false).animate({ left: mov }, 0)
    //     }
    //     if (mouse_y >= user.offset().top - 50) {
    //     }
    // })
    // $('html').bind("touchmove", function (e) {
    //     var touch_x = e.touches[0].clientX;
    //     var touch_y = e.touches[0].clientY;
    //     var user_w = user.width();
    //     var con_x = $('.game .container').offset().left;
    //     var con_w = $('.game .container').width();
    //     if (touch_x >= con_x + user_w / 2 && touch_x <= con_x + con_w - user_w / 2) {
    //         //在.container之間
    //         var mov = touch_x - con_x - user_w / 2;
    //         user.stop(true, false).animate({ left: mov }, 0)
    //     }
    // });

})

