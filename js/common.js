var Common = {
	init: function() {
        Common.menu();
        Common.main();
	},
    menu: function() {
        $('.header_top .mob_btn').on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('open');
            $('.header_top_nav').toggleClass('open')
		});
		
		$('.header_top .mob_close').on('click',function(e){
            e.preventDefault();
            $('.header_top_nav,.header_top .mob_btn').removeClass('open')
		});
        
        
        $('.logo span').on('click',function(e){
            e.preventDefault();
            $('.nav_menu').toggleClass('open')
		});
        
        $('.nav_menu_close').on('click',function(e){
            e.preventDefault();
            $('.nav_menu').removeClass('open')
		});
        
        $('.filter_btn').on('click',function(e){
            e.preventDefault();
            $('aside').toggleClass('open')
		});
        
        $('.aside_menu_close').on('click',function(e){
            e.preventDefault();
            $('aside').removeClass('open')
		});
        
        
        
        
    },
	main: function() {
        
        //slider_prod 
        
        let s_p = $('.slider_prod');
        
        if(s_p.length) {
            s_p.owlCarousel({
                loop:true,
                margin:50,
                nav:true,
                dots:false,
//                onInitialized: s_p_callback,
//                onTranslated: s_P_callback,
                responsive:{
                    0:{
                        items:1,
                        loop:false,
                        nav:false,
                    },
                    550:{
                        items:2
                    },
                    830:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            });
        } 
//        function s_p_callback(event) {
//            s_p.parents('.btn_tab_items').find('.slider_prod_bottom').find('div span + span').html('/ '+ event.item.count)
//        }
//        function s_P_callback(event) {
//            s_p.next('.slider_prod_bottom ').children('div').find(' span:first-child').html(event.item.index+1)
//        }
//        
        s_p.on('translated.owl.carousel',function(event){
//            $(this).parents('.btn_tab_items').find('.slider_prod_bottom').find('div span + span').html('/ '+ event.item.count)
            $(this).parents('.btn_tab_items').find('.slider_prod_bottom').find('span:first-child').html(event.item.index+1)
            console.log(event.item.index+1)
        })
//        s_p.on('initialized.owl.carousel',function(event){
//            $(this).parents('.btn_tab_items').find('.slider_prod_bottom').find('div span + span').html('/ '+ event.item.count+1);
//            console.log(event.item.count+1)
//        })
        
        $('.slider_prod_nav .slider_prod_left').on('click',function() {
            $(this).parent('.slider_prod_nav').prev(s_p).trigger('prev.owl.carousel', [300]);
        });
        $('.slider_prod_nav .slider_prod_right').on('click',function() {
            $(this).parent('.slider_prod_nav').prev(s_p).trigger('next.owl.carousel', [300]);
        });
        
        //slider_prod END
        // buy_block
        
        let buy_block = $('.buy_block');
        let card_slider_init = $('.card_slider_init');
        
        function buy_block_init() {
            if($(window).width() <= 750) {
                buy_block.owlCarousel({
                    loop:false,
                    items:1,
                    margin:0,
                    nav:false,
                    dots:false,
                    onInitialized: b_b_callback,
                    onTranslated: b_B_callback,
                }).addClass('owl-carousel');
            }else {
                buy_block.trigger('destroy.owl.carousel').removeClass('owl-carousel'); 
            }
        }
        function card_slider_Init() {
            if($(window).width() <= 720) {
                card_slider_init.owlCarousel({
                    loop:false,
                    items:1,
                    margin:0,
                    nav:false,
                    dots:true,
                    onInitialized: b_b_callback,
                    onTranslated: b_B_callback,
                }).addClass('owl-carousel');
            }else {
                card_slider_init.trigger('destroy.owl.carousel').removeClass('owl-carousel'); 
            }
        }
        
        let buy_block_t;
        $(window).resize( function() {
          clearTimeout(buy_block_t);
          buy_block_t = setTimeout(function() {
              buy_block_init();
              card_slider_Init();
          }, 200);
        });
        
        buy_block_init();
        card_slider_Init();
        
        $('.buy_block_nav .slider_prod_left').on('click',function() {
            buy_block.trigger('prev.owl.carousel', [300]);
        });
        $('.buy_block_nav .slider_prod_right').on('click',function() {
            buy_block.trigger('next.owl.carousel', [300]);
        });
        
        function b_b_callback(event) {
            $('.buy_block_nav div span + span').html('/ '+ event.item.count)
        }
        function b_B_callback(event) {
            $('.buy_block_nav div span:first-child').html(event.item.index+1)
        }
        
        // buy_block END
        
        if($('.slider_manuf').length) {
            $('.slider_manuf').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                dots:false,
                responsive:{
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },
                    700:{
                        items:4
                    },
                    1000:{
                        items:5
                    }
                }
            });
        }
        setTimeout(function() {
            $('select').styler();
        }, 100);
        
        
        $('.mob_icon_header').on('click',function(e){
            e.preventDefault();
            if(!$(this).hasClass('mob_btn_open')) {
                $(this).next('div').slideDown();
                $('.mob_btn_open').removeClass('mob_btn_open').next('div').slideUp();
                $(this).addClass('mob_btn_open');
            }else {
                $(this).next('div').slideUp();
                $('.mob_btn_open').removeClass('mob_btn_open');
            }
        });
        $('.card_tabs_item_head').on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('open').next().slideToggle();
        });
        
        $('.pop_close, .pop_bg').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('pop_active');
            $('.pop').fadeOut(0);
        });
        
        $('.btn_one_click').on('click',function(e){
            e.preventDefault();
            $('body').addClass('pop_active');
            $('.pop').fadeIn();
        });
        
        
                    $('.services_header').on('click',function(e){
						e.preventDefault();
						$(this).next('div').slideToggle();
						var a = '+',
							b = '-';
						if($(this).find('span').text() != a && $(this).find('span').text() != b) {
							$(this).find('span').text(a)
						}else
						if ($(this).find('span').text() == a){
							$(this).find('span').text(b);
						}
						else
						if ($(this).find('span').text() == b){
							$(this).find('span').text(a);
						}
					});
        $('.nav_catalog > a').on('click',function(e){
            if($(window).width() <= 550) {
                e.preventDefault();
            }
        });
        
        $('.form_pl').on('click',function(){
            $(this).addClass('hidden').prev('input').focus();
        });
        
        
        $('input[type="text"]').focusout(function(){
            if(!$(this).val().length >=1 && $(this).next('span.form_pl')) {
                $(this).next('span.form_pl').removeClass('hidden');
                $(this).removeClass('change');
            }else{
                $(this).addClass('change');
            }
        });
        
        $('input[type="text"]').change(function(){
            if(!$(this).val().length >=1) {
                $(this).removeClass('change');
            }else{
                $(this).addClass('change');
            }
        });
        
        
        
        $('.btn_tab .btn').on('click',function(e){
            e.preventDefault();
            $('.btn_tab .btn').removeClass('active');
            $(this).addClass('active')
            $('.btn_tab_items').removeClass('active').eq($(this).index()).addClass('active');
            
        });
        
        
        $('.card_slider_item').on('click',function(e){
            e.preventDefault();
            $('.card_slider_item').removeClass('active');
            $(this).addClass('active');
        });
        $('.size_item').on('click',function(e){
            e.preventDefault();
            $('.size_item').removeClass('active');
            $(this).addClass('active');
        });
        
        
        $('.add_number a').on('click',function(e){
            e.preventDefault();
            
            if($(this).hasClass('plus')) {
                $(this).parents('.add_number').find('input').val(Number($(this).parents('.add_number').find('input').val()) + 1)
            }
            if($(this).hasClass('minus')) {
                $(this).parents('.add_number').find('input').val(Number($(this).parents('.add_number').find('input').val()) - 1)
            }
            if($(this).parents('.add_number').find('input').val() == 0) {
                $(this).parents('.add_number').find('input').val(1)
            }
            
            
        })
        
    },
};

$(function() {
	Common.init();
});
