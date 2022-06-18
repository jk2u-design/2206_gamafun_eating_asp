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
        $(".se-pre-con").delay(0).fadeOut("slow");
    }


$(function(){

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

    //menu --------------------------------------------
    $('header #mnu').click(function(){
        $(this).toggleClass('open');
        $('header #nav').slideToggle();
	});

    //解決menu展開後背景滑動問題 --------------------------------------------
    /*var mobile_flag = ifisMobile();
    if (mobile_flag) {
        // 手機開啟
        //menu展開body鎖住
        var scrollTop = -1; // 滑鼠進入到區域後，則儲存當前window滾動條的高度
        $('#nav').hover(function(){
            scrollTop = $(window).scrollTop();
        }, function(){
            scrollTop = -1;
        });
        // 滑鼠進入到區域後，則強制window滾動條的高度
        $(window).scroll(function(){
            scrollTop!==-1 && $(this).scrollTop(scrollTop);
        });
    } else {
        // 不是手機開啟
        $('body').css({'overflow':'auto'});
    }*/

    function ifisMobile() {
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




})