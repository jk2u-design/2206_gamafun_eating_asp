// setTimeout( function() {
// 	window.location.reload();
// }, 500);

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
	
	$('header').load('include_files/header.html')
	$('footer').load('include_files/footer.html');


	//開場動畫
	$('#kv').addClass('openanim');
	$('header').hide(0);
	$('#kv .btns').hide(0);
	$('#kv .invitation').hide(0);
	$('.kv_dn_mask').hide(0);

	var gamagame = gsap.timeline();
		gamagame.to('.gamagame', {opacity:0, duration:0.15, delay:1});
		gamagame.to('.gamagame', {opacity:1, duration:0.15}).set(".gamagame", {className:"gamagame anim lev_lt_bt"});
		gamagame.to('.gamagame', {opacity:0, duration:0.15});
		gamagame.to('.gamagame', {opacity:1, duration:0.15});

	var gamania = gsap.timeline();
		gamania.to('.gamania', {opacity:0, duration:0.15, delay:1.2});
		gamania.to('.gamania', {opacity:1, duration:0.1});
		gamania.to('.gamania', {opacity:0, duration:0.15});
		gamania.to('.gamania', {opacity:1, duration:0.15, delay:1.5});
		gamania.to('.gamania', {opacity:0, duration:0.15});
		gamania.to('.gamania', {opacity:1, duration:0.15});

	var jollybuy = gsap.timeline();
		jollybuy.to('.jollybuy', {opacity:0, duration:0.15, delay:1.4});
		jollybuy.to('.jollybuy', {opacity:1, duration:0.15});
		jollybuy.to('.jollybuy', {opacity:0, duration:0.15});
		jollybuy.to('.jollybuy', {opacity:1, duration:0.15});

	var gamapay = gsap.timeline();
		gamapay.to('.gamapay', {opacity:0, duration:0.15, delay:1.6});
		gamapay.to('.gamapay', {opacity:1, duration:0.15});
		gamapay.to('.gamapay', {opacity:0, duration:0.15});
		gamapay.to('.gamapay', {opacity:1, duration:0.15});

	var comic = gsap.timeline();
		comic.to('.comic', {opacity:0, duration:0.15, delay:2});
		comic.to('.comic', {opacity:1, duration:0.15});
		comic.to('.comic', {opacity:0, duration:0.15});
		comic.to('.comic', {opacity:1, duration:0.15});

	var group = gsap.timeline();
		group.to('.group', {opacity:0, duration:0.15, delay:2.3});
		group.to('.group', {opacity:1, duration:0.1});
		group.to('.group', {opacity:0, duration:0.15});
		group.to('.group', {opacity:1, duration:0.15, delay:0.5});
		group.to('.group', {opacity:0, duration:0.15});
		group.to('.group', {opacity:1, duration:0.15});

	var gash = gsap.timeline();
		gash.to('.gash', {opacity:0, duration:0.15, delay:2.5});
		gash.to('.gash', {opacity:1, duration:0.15}).set(".gash", {className:"gash anim lev_lt_bt"});
		gash.to('.gash', {opacity:0, duration:0.15});
		gash.to('.gash', {opacity:1, duration:0.15});

	var beanfun = gsap.timeline();
		beanfun.to('.beanfun', {opacity:0, duration:0.15, delay:2.7});
		beanfun.to('.beanfun', {opacity:1, duration:0.15});
		beanfun.to('.beanfun', {opacity:0, duration:0.15});
		beanfun.to('.beanfun', {opacity:1, duration:0.15});

    var signs_aa = gsap.timeline();
        signs_aa.to('#open_anim .aa', {opacity:0, duration:0.15, delay:1.3});
        signs_aa.to('#open_anim .aa', {opacity:1, duration:0.15});
		signs_aa.to('#open_anim .aa', {opacity:0, duration:0.15});
		signs_aa.to('#open_anim .aa', {opacity:1, duration:0.15});

    var signs_bb = gsap.timeline();
        signs_bb.to('#open_anim .bb', {opacity:0, duration:0.15, delay:1.5});
        signs_bb.to('#open_anim .bb', {opacity:1, duration:0.1});
        signs_bb.to('#open_anim .bb', {opacity:0, duration:0.15});
        signs_bb.to('#open_anim .bb', {opacity:1, duration:0.15, delay:0.5});
        signs_bb.to('#open_anim .bb', {opacity:0, duration:0.15});
        signs_bb.to('#open_anim .bb', {opacity:1, duration:0.15});

    var signs_cc = gsap.timeline();
        signs_cc.to('#open_anim .cc', {opacity:0, duration:0.15, delay:1.8});
        signs_cc.to('#open_anim .cc', {opacity:1, duration:0.1});
        signs_cc.to('#open_anim .cc', {opacity:0, duration:0.15});
        signs_cc.to('#open_anim .cc', {opacity:1, duration:0.15, delay:0.5});
        signs_cc.to('#open_anim .cc', {opacity:0, duration:0.15});
        signs_cc.to('#open_anim .cc', {opacity:1, duration:0.15});

    var signs_dd = gsap.timeline();
        signs_dd.to('#open_anim .dd', {opacity:0, duration:0.15, delay:2});
        signs_dd.to('#open_anim .dd', {opacity:1, duration:0.15});
        signs_dd.to('#open_anim .dd', {opacity:0, duration:0.15});
        signs_dd.to('#open_anim .dd', {opacity:1, duration:0.15});

    setTimeout( function() {
        $('.signs_b').css('animation-name','signs_b');
        $('.signs_d').css('animation-name','signs_d');
        $('.signs_e').css('animation-name','signs_e');
        $('.signs_f').css('animation-name','signs_f');
        $('.signs_g').css('animation-name','signs_g');
        $('.signs_i').css('animation-name','signs_i');
        $('.signs_k').css('animation-name','signs_k');
        $('.signs_l').css('animation-name','signs_l');
    },3000);
    

	setTimeout( function() {
        kvopen();
    }, 4500);

	function kvopen() {
		//$('#kv').removeClass('openanim');
		//$('#middle').fadeIn(1000);
		//$('#event').fadeIn(1000);
		//$('#gamashow').fadeIn(1000);
		gsap.to(".lev_lt_tp", {x:-300, y:-50, duration:2, autoAlpha:0, scale:1.5, ease: Power1.easeOut});
		gsap.to(".lev_lt_bt", {x:-300, y:50, duration:2, autoAlpha:0, scale:1.5, ease: Power1.easeOut});
		gsap.to(".lev_rt_tp", {x:200, y:-50, duration:2, autoAlpha:0, scale:1.5, ease: Power1.easeOut});
		gsap.to(".lev_rt_bt", {x:200, y:50, duration:2, autoAlpha:0, scale:1.5, ease: Power1.easeOut});
		gsap.to(".kv_slogan", {duration:1, autoAlpha:1, scale:1, ease: Power1.easeOut});
		gsap.set("#kv", {className:""});
		gsap.to(".kv_left_house", {duration:1, autoAlpha:1});
		gsap.to(".kv_right_house", {duration:1, autoAlpha:1});
		setTimeout( function() {
			$('.kv_slogan').css('z-index','3');
			$('#open_anim').fadeOut(500);
			$('#kv .btns').fadeIn(500);
			$('#kv .invitation').fadeIn(500);
			$('.kv_dn_mask').fadeIn(500);
			$('header').fadeIn(500);
		}, 500);
		tab_hash();
	}

	function tab_hash() {
		var show_tab_a = ('gamashow_0714')
		var show_tab_a_id = ('#' + show_tab_a)
		var not_show_a = ".tab_program a:not(#"+show_tab_a+")"
		var tab_show_a = ".tab_program a#"+show_tab_a+""
		if(window.location.hash === show_tab_a_id) {
			$(not_show_a).removeClass('active');
			$(tab_show_a).addClass('active');
			$("html,body").animate({
				scrollTop: $('#gama_show').offset().top
			})
		};
		var show_tab_b = ('gamashow_0715')
		var show_tab_b_id = ('#' + show_tab_b)
		var not_show_b = ".tab_program a:not(#"+show_tab_b+")"
		var tab_show_b = ".tab_program a#"+show_tab_b+""
		if(window.location.hash === show_tab_b_id) {
			$(not_show_b).removeClass('active');
			$(tab_show_b).addClass('active');
			$("html,body").animate({
				scrollTop: $('#gama_show').offset().top
			})
		};
		var show_tab_c = ('gamashow_0716')
		var show_tab_c_id = ('#' + show_tab_c)
		var not_show_c = ".tab_program a:not(#"+show_tab_c+")"
		var tab_show_c = ".tab_program a#"+show_tab_c+""
		if(window.location.hash === show_tab_c_id) {
			$(not_show_c).removeClass('active');
			$(tab_show_c).addClass('active');
			$("html,body").animate({
				scrollTop: $('#gama_show').offset().top
			})
		};
		var show_tab_d = ('gamashow_0717')
		var show_tab_d_id = ('#' + show_tab_d)
		var not_show_d = ".tab_program a:not(#"+show_tab_d+")"
		var tab_show_d = ".tab_program a#"+show_tab_d+""
		if(window.location.hash === show_tab_d_id) {
			$(not_show_d).removeClass('active');
			$(tab_show_d).addClass('active');
			$("html,body").animate({
				scrollTop: $('#gama_show').offset().top
			})
		};
		var rules_tab_a = ('introduction')
		var rules_tab_a_id = ('#' + rules_tab_a)
		var not_rules_a = ".rules_tab a:not(#"+rules_tab_a+")"
		var tab_rules_a = ".rules_tab a#"+rules_tab_a+""
		if(window.location.hash === rules_tab_a_id) {
			$(not_rules_a).removeClass('active');
			$(tab_rules_a).addClass('active');
			$("html,body").animate({
				scrollTop: $('#rules_board').offset().top
			})
		};
		var rules_tab_b = ('event_rules')
		var rules_tab_b_id = ('#' + rules_tab_b)
		var not_rules_b = ".rules_tab a:not(#"+rules_tab_b+")"
		var tab_rules_b = ".rules_tab a#"+rules_tab_b+""
		if(window.location.hash === rules_tab_b_id) {
			$(not_rules_b).removeClass('active');
			$(tab_rules_b).addClass('active');
			$("html,body").animate({
				scrollTop: $('#rules_board').offset().top
			})
		};
		var rules_tab_c = ('notice')
		var rules_tab_c_id = ('#' + rules_tab_c)
		var not_rules_c = ".rules_tab a:not(#"+rules_tab_c+")"
		var tab_rules_c = ".rules_tab a#"+rules_tab_c+""
		if(window.location.hash === rules_tab_c_id) {
			$(not_rules_c).removeClass('active');
			$(tab_rules_c).addClass('active');
			$("html,body").animate({
				scrollTop: $('#rules_board').offset().top
			})
		};
		var event = ('event')
		var event_id = ('#' + event)
		if(window.location.hash === event_id) {
			$("html,body").animate({
				scrollTop: $('#event').offset().top
			})
		};
		var gamashow = ('gamashow')
		var gamashow_id = ('#' + gamashow)
		if(window.location.hash === gamashow_id) {
			$("html,body").animate({
				scrollTop: $('#gama_show').offset().top
			})
		};
		var rules = ('rules')
		var rules_id = ('#' + rules)
		if(window.location.hash === rules_id) {
			$("html,body").animate({
				scrollTop: $('#rules_board').offset().top
			})
		};
	};



	// kv sign light loop
	var kvtl = gsap.timeline({repeat:-1, repeatDelay:3});
		kvtl.to(".sing_light", {opacity:0, duration:0.2});
		kvtl.to(".sing_light", {opacity:1, duration:0.2});
		kvtl.to(".sing_light", {opacity:0, duration:0.2});
		kvtl.to(".sing_light", {opacity:1, duration:0.2});
		kvtl.to(".sing_light", {opacity:0, duration:0.2});

	
	//錨點
	$('a.gohash').click(function(){
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		}, 500);
		return false;
	});
	$('a.nav_hash').click(function(){
		$('header #mnu').toggleClass('open');
        $('header #nav').slideToggle();
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		}, 500);
		return false;
	});


	// 節目表 tab
	//$( "#program_tab" ).tabs();

	$('.showlist').owlCarousel({
        items:1,
        loop:false,
        margin:10,
		autoHeight: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
        nav:false,
        smartSpeed:50,
        URLhashListener:true,
        autoplay:false,
		startPosition: 'URLHash',
        //startPosition: '#gama_show',
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
    });

	var show_tab_a = ('gamashow_0714')
	var show_tab_a_id = ('#' + show_tab_a)
	var not_show_a = ".tab_program a:not(#"+show_tab_a+")"
	var tab_show_a = ".tab_program a#"+show_tab_a+""
	if(window.location.hash === show_tab_a_id) {
		$(not_show_a).removeClass('active');
		$(tab_show_a).addClass('active');
		$("html,body").animate({
			scrollTop: $('#gama_show').offset().top
		})
	};

	for(i=0;i<$(".tab_program a").length;i++){	
		$(".tab_program a:eq("+i+")").click({id:i},function(e){
            $(".tab_program a:not(:eq("+e.data.id+"))").removeClass('active')
            $(".tab_program a:eq("+e.data.id+")").addClass('active')
            $('html, body').animate({
                scrollTop: $('#gama_show').offset().top
            }, 500);
		})
    };

	// 活動資訊
	$('.news_slide').slick({
		centerMode: true,
		centerPadding: '5px',
		slidesToShow: 3,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		prevArrow: $('.prev'),
      	nextArrow: $('.next'),
		responsive: [
		  {
			breakpoint: 796,
			settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				prevArrow: $('.prev'),
				nextArrow: $('.next'),
			}
		  }
		]
	});


	// 活動辦法
	$('.rules_info').owlCarousel({
        items:1,
        loop:false,
        margin:10,
		autoHeight: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
        nav:false,
        smartSpeed:50,
        URLhashListener:true,
        autoplay:false,
		startPosition: 'URLHash',
        //startPosition: '#rules_board',
		mouseDrag: false,
        touchDrag: false,
        pullDrag: false
    });


	for(i=0;i<$(".rules_tab a").length;i++){	
		$(".rules_tab a:eq("+i+")").click({id:i},function(e){
            $(".rules_tab a:not(:eq("+e.data.id+"))").removeClass('active')
            $(".rules_tab a:eq("+e.data.id+")").addClass('active')
            $('html, body').animate({
                scrollTop: $('#rules_board').offset().top
            }, 500);
		})
    };


	


	


	
});