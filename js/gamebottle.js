(function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
})();

//loading bar --------------------------------------------
load();
function load(){
	function id(v){return document.getElementById(v); }
	function loadbar() {
		var ovrl = id("overlay"),
			prog = id("progress"),
			stat = id("progstat"),
			img = document.images,
			c = 0;
			tot = img.length;
			
		function imgLoaded(){
			c += 1;
			var perc = ((100/tot*c) << 0) +"%";
			prog.style.width = perc;
			stat.innerHTML = "Loading "+ perc;
			if(c===tot) return doneLoading();
		}
		function doneLoading(){
			ovrl.style.opacity = 0;
			setTimeout(function(){
				ovrl.style.display = "none";
			}, 1200);
		}
		for(var i=0; i<tot; i++) {
			var tImg     = new Image();
				tImg.onload  = imgLoaded;
                tImg.onerror = imgLoaded;
                tImg.src     = img[i].src;
        }
    }
	document.addEventListener('DOMContentLoaded', loadbar, false);
};

window.onload = function() {
	$(".se-pre-con").delay(1000).fadeOut("slow");
}

$(function(){


    $('header').load('include_files/header.html');    
    
    sessionStorage.setItem('game', '1')//YT add
    sessionStorage.setItem('bean1', 0)//YT add
    sessionStorage.setItem('bean2', 0)//YT add

    //禁用右鍵、文字選擇功能、複製按鍵
    //$(document).bind("contextmenu",function(){return false;});
    //$(document).bind("selectstart",function(){return false;});
    //$(document).keydown(function(){return key(arguments[0])}); 

    //手機vh --------------------------------------------
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

})
    //切版用暫時隱藏 --------------------------------------------
    //$('#start').hide(0);
    //$("#fireworks").hide(0);
    //$('#games').hide(0);

    //初始隱藏 --------------------------------------------
    $("#start_count").hide(0);
    $("#gameover").hide(0);

    //煙火 --------------------------------------------
    $("#fireworks").fireworks();
    jQuery("#fireworks").before(jQuery("canvas"));

    //開場瓶子 --------------------------------------------
    $('.bottles').append( $('.bottles img').clone() );
    tl = new TimelineMax({repeat: -1});
    tl.to( $('.bottles'), 10, { x:-($('.bottles').width()/2), ease: Power0.easeNone });

    
    //開始遊戲 --------------------------------------------

    function iwannaplayagame() {
        $('#start').fadeOut(500);
        $("#fireworks").fadeOut(500);
        $("#start_count").fadeIn(0);
        setTimeout( function() {
            readystart()
        }, 1000);
    }

    $('#replay_game').click(function(){
        console.log('restart')
        window.location.reload();
    })

    var startcount = 3;
    function readystart() {
        document.getElementById("readystart").innerHTML=startcount;
        setTimeout(readystart,1000);
        startcount -= 1;
        if(startcount == -1) {
            $('#readystart').text('START');
        }
        if(startcount == -2) {
            $('#start_count').remove();
            $("#games").css('opacity','1');
            reciprocal();
            gamerun();
        }

    }
    //readystart();



    //罐子射擊 --------------------------------------------
    var randombottle = ['bt_a','bt_b','bt_c'];
    var bottlecount = 1;
    function addbottle() {
        $("#gamestage").append('<div class="bt_'+ (bottlecount++) +'"></div>');
    }
    addbottle(); addbottle(); addbottle(); addbottle(); addbottle(); addbottle(); addbottle(); /*addbottle(); addbottle(); addbottle();*/

    $('#gamestage div').each(function(i) { // the element(s) you want to add the class to.
        $(this).addClass(randombottle[ Math.floor( Math.random()*randombottle.length ) ] );
    });

    var width = $(window).innerWidth() * 2;

    function pcbottle_a() {
        gsap.to(".bt_1", {x:-width, duration: 4, ease:'none', repeat: -1});
        gsap.to(".bt_2", {x:-width, duration: 4, delay:0.7, ease:'none', repeat: 3});
        gsap.to(".bt_3", {x:-width, duration: 4, delay:2, ease:'none', repeat: -1});
        gsap.to(".bt_4", {x:-width, duration: 4, delay:2.7, ease:'none', repeat: -1});
        gsap.to(".bt_5", {x:-width, duration: 4, delay:4.4, ease:'none', repeat: -1});
        gsap.to(".bt_6", {x:-width, duration: 4, delay:5.2, ease:'none', repeat: 1});
    }
    function pcbottle_b() {
        gsap.to(".bt_1", {x:-width, duration: 4, ease:'none', repeat: -1});
        gsap.to(".bt_2", {x:-width, duration: 4, delay:0.5, ease:'none', repeat: -1});
        gsap.to(".bt_3", {x:-width, duration: 4, delay:1.8, ease:'none', repeat: 1});
        gsap.to(".bt_4", {x:-width, duration: 4, delay:3, ease:'none', repeat: -1});
        gsap.to(".bt_5", {x:-width, duration: 4, delay:5.3, ease:'none', repeat: -1});
        gsap.to(".bt_6", {x:-width, duration: 4, delay:6.5, ease:'none', repeat: -1});
        gsap.to(".bt_7", {x:-width, duration: 4, delay:8.8, ease:'none'});
    }
    function pcbottle_c() {
        gsap.to(".bt_1", {x:-width, duration: 4, ease:'none', repeat: 2});
        gsap.to(".bt_2", {x:-width, duration: 4, delay:0.3, ease:'none', repeat: -1});
        gsap.to(".bt_3", {x:-width, duration: 4, delay:1.5, ease:'none', repeat: 2});
        gsap.to(".bt_4", {x:-width, duration: 4, delay:2.8, ease:'none', repeat: -1});
        gsap.to(".bt_5", {x:-width, duration: 4, delay:5, ease:'none', repeat: 1});
        gsap.to(".bt_6", {x:-width, duration: 4, delay:10.2, ease:'none', repeat: -1});
    }

    function mbbottle_a() {
        gsap.to(".bt_1", {x:-width, duration: 1.5, ease:'none', repeat: -1});
        gsap.to(".bt_2", {x:-width, duration: 1.5, delay:0.4, ease:'none', repeat: 5});
        gsap.to(".bt_3", {x:-width, duration: 1.5, delay:9.9, ease:'none', repeat: 3});
        gsap.to(".bt_4", {x:-width, duration: 1.5, delay:4, ease:'none'});
        gsap.to(".bt_5", {x:-width, duration: 1.5, delay:8.6, ease:'none'});
        gsap.to(".bt_6", {x:-width, duration: 1.5, delay:10.9, ease:'none'});
    }
    function mbbottle_b() {
        gsap.to(".bt_1", {x:-width, duration: 1.5, ease:'none', repeat: -1});
        gsap.to(".bt_2", {x:-width, duration: 1.5, delay:0.8, ease:'none', repeat: 2});
        gsap.to(".bt_3", {x:-width, duration: 1.5, delay:5, ease:'none', repeat: 3});
        gsap.to(".bt_4", {x:-width, duration: 1.5, delay:11.3, ease:'none', repeat: 2});
        gsap.to(".bt_5", {x:-width, duration: 1.5, delay:5.5, ease:'none'});
        gsap.to(".bt_6", {x:-width, duration: 1.5, delay:10, ease:'none'});
    }
    function mbbottle_c() {
        gsap.to(".bt_1", {x:-width, duration: 1.5, ease:'none', repeat: -1});
        gsap.to(".bt_2", {x:-width, duration: 1.5, delay:2, ease:'none', repeat: 3});
        gsap.to(".bt_3", {x:-width, duration: 1.5, delay:7, ease:'none', repeat: 3});
        gsap.to(".bt_4", {x:-width, duration: 1.5, delay:0.8, ease:'none'});
        gsap.to(".bt_5", {x:-width, duration: 1.5, delay:9.4, ease:'none'});
        gsap.to(".bt_6", {x:-width, duration: 1.5, delay:12.6, ease:'none'});
        gsap.to(".bt_7", {x:-width, duration: 1.5, delay:14.7, ease:'none'});
    }

    //隨機觸發
    var arr_pc = [pcbottle_a, pcbottle_b, pcbottle_c],
        rand_pc = Math.floor(Math.random() * arr_pc.length),
        func_pc = arr_pc[rand_pc];
    var arr_mb = [mbbottle_a, mbbottle_b, mbbottle_c],
        rand_mb = Math.floor(Math.random() * arr_mb.length),
        func_mb = arr_mb[rand_mb];

    //判斷是否為手機 /開始遊戲
    function gamerun() {
        var mobile_flag = isMobile();
        if (mobile_flag) {
            // 手機開啟
            func_mb();
            $("#shoot").click(function() {
                shoot_mb();
            });
        } else {
            // 不是手機開啟
            func_pc();
            $("#shoot").click(function() {
                shoot_pc();
            });
        }
    }
	
    //偵測裝置
    function isMobile() {
        var userAgentInfo = navigator.userAgent
        var mobileAgents = ['Android','iPhone','SymbianOS','Windows Phone','iPad','iPod'];
        var mobile_flag = false;
        //根據userAgent判斷是否為手機
        for (var v = 0; v < mobileAgents.length; v++) {
            if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
                mobile_flag = true;
                break;
            }
        }
        var screen_width = window.screen.width;
        var screen_height = window.screen.height;
        // //根據螢幕分辨率判斷是否為手機
        if (screen_width < 500 && screen_height < 800) {
            mobile_flag = true
        }
        return mobile_flag;
    }


    var target = $("#target").position().left;
    var score = 0;

    function shoot_pc() {
        var a_left = $('.bt_1').position().left,
            b_left = $('.bt_2').position().left;
            c_left = $('.bt_3').position().left;
            d_left = $('.bt_4').position().left;
            e_left = $('.bt_5').position().left;
            f_left = $('.bt_6').position().left;
            g_left = $('.bt_7').position().left;

        var w = $('#target').width();
        var target_rt = target + w;
        if (a_left < target_rt && a_left >= target) {
            $('.bt_1').fadeOut(50);
            setTimeout( function() {
                    $('.bt_1').show(0);
            }, 2000);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (b_left < target_rt && b_left >= target) {
            $('.bt_2').fadeOut(50);
            setTimeout( function() {
                    $('.bt_2').show(0);
            }, 2000);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (c_left < target_rt && c_left >= target) {
            $('.bt_3').fadeOut(50);
            setTimeout( function() {
                    $('.bt_3').show(0);
            }, 2000);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (d_left < target_rt && d_left >= target) {
            $('.bt_4').fadeOut(50);
            setTimeout( function() {
                    $('.bt_4').show(0);
            }, 2000);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (e_left < target_rt && e_left >= target) {
            $('.bt_5').fadeOut(50);
            setTimeout( function() {
                    $('.bt_5').show(0);
            }, 2000);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (f_left < target_rt && f_left >= target) {
            $('.bt_6').fadeOut(50);
            setTimeout( function() {
                    $('.bt_6').show(0);
            }, 2000);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (g_left < target_rt && g_left >= target) {
            $('.bt_7').fadeOut(50);
            setTimeout( function() {
                    $('.bt_7').show(0);
            }, 2000);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else {
            //外面
        }
        return false;
    };

    function shoot_mb() {
        var a_left = $('.bt_1').position().left,
            b_left = $('.bt_2').position().left;
            c_left = $('.bt_3').position().left;
            d_left = $('.bt_4').position().left;
            e_left = $('.bt_5').position().left;
            f_left = $('.bt_6').position().left;
            g_left = $('.bt_7').position().left;

        var w = $('#target').width();
        var target_rt = target + w;
        if (a_left < target_rt && a_left >= target) {
            $('.bt_1').fadeOut(50);
            setTimeout( function() {
                    $('.bt_1').show(0);
            }, 750);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (b_left < target_rt && b_left >= target) {
            $('.bt_2').fadeOut(50);
            setTimeout( function() {
                    $('.bt_2').show(0);
            }, 750);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (c_left < target_rt && c_left >= target) {
            $('.bt_3').fadeOut(50);
            setTimeout( function() {
                    $('.bt_3').show(0);
            }, 750);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (d_left < target_rt && d_left >= target) {
            $('.bt_4').fadeOut(50);
            setTimeout( function() {
                    $('.bt_4').show(0);
            }, 750);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (e_left < target_rt && e_left >= target) {
            $('.bt_5').fadeOut(50);
            setTimeout( function() {
                    $('.bt_5').show(0);
            }, 750);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (f_left < target_rt && f_left >= target) {
            $('.bt_6').fadeOut(50);
            setTimeout( function() {
                    $('.bt_6').show(0);
            }, 750);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else if (g_left < target_rt && g_left >= target) {
            $('.bt_7').fadeOut(50);
            setTimeout( function() {
                    $('.bt_7').show(0);
            }, 750);
            score++;
            $("#score").text(score);
            $('.finalscore').text(score);
        } else {
            //外面
        }
        return false;
    };
    

    //遊戲時間倒數
    var s = 15;
    function reciprocal(){
        document.getElementById("time").innerHTML=s;
        setTimeout(reciprocal,1000);
        s -= 1;
        if(s == -2) {
            //$('#gamestage').remove();
            //$('#shoot').remove();
            //$('.endhide').remove();
            $('#games').remove();
            setTimeout( function() {
                $("#gameover").fadeIn(500);
                $("#fireworks").fadeIn(500);
                sessionStorage.setItem('game', '1')//YT add
                sessionStorage.setItem('bean1', 0)//YT add
                sessionStorage.setItem('bean2', score)//YT add
            }, 500);
        }
    }
    //reciprocal();



