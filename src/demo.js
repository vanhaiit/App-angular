
import $ from 'jquery';

export function toggleIcon() {
    //click show selct parts
    $('.btn_sidebar-show').on('click', function () {
        document.getElementById("sidebarLeft").style.width = "95%";
    });
    $('.btn_sidebar-hide').on('click', function () {
        document.getElementById("sidebarLeft").style.width = "0%";
    });

    if ($(window).width() <= 992) {

        $('[id="btn_search"]').css({ "margin": "10px" })

        $('[id="sidebarLeft"]').removeClass('col-md-4');
        $('[id="sidebarLeft"]').addClass('overlay');

        $('[id="item-show_part"]').removeClass('col-md-4 col-4');
        $('[id="item-show_part"]').addClass('col-md-6 col-6');

        $('[class="btn_sidebar-hide"]').show();
        $('[class="btn_sidebar-show"]').show();

        $('[class="list-unstyled mt-3 mb-4"]').hide();
        $('[class="card-title pricing-card-title mt-10"]').hide();

        $('[id="img_detail-part"]').hide();
        $('[id="scrollbar_custom"]').addClass('curtain_menu-mobile');

        $('[id="dunnio_show-result"]').removeClass('col-md-5');
        $('[id="dunnio_show-result"]').addClass('col-md-12');

        $('[id="dunnio_show_detail-result"]').removeClass('col-md-3');
        $('[id="dunnio_show_detail-result"]').addClass('col-md-12');

    } else {
        $('[class="btn_sidebar-hide"]').hide();
        $('[class="btn_sidebar-show"]').hide();
        $('[class="title_sidebar_mobile-left"]').hide();
    }

    $('[id="wqaz"]').on('click', function () {
        alert('ok')
    });

    $('.sidebar_title_accordian').on('click', function () {
        var li_number = $(this)[0].id.split('_')[1];
        var accordian_list = $(`[id="sidebar_accordian_list_${li_number}"]`)
        if (accordian_list.find('ul').hasClass('open')) {
            $('ul.open').slideToggle().removeClass('open');
            $('.accordian h3 span').removeClass('closed');
            $('.accordian h3').removeClass('closed');
        } else {
            $('ul.open').slideToggle().removeClass('open');
            accordian_list.find('ul').slideToggle().addClass('open');
            $('.accordian h3, .accordian h3 span').removeClass('closed');
            accordian_list.find('h3, h3 span').addClass('closed')
        }
    });

    var check_sub_menu = true;

    $('.list_unstyled-item').on('click', function () {
        if (check_sub_menu) {
            if ($(window).width() <= 992) {
                $('[id="sidebar_menu-left"]').hide(500);
            }
            $('[id="sidebar_menu-left"]').removeClass('col-md-12');

            $('[id="title-menu"]').addClass('title-navbar_mobile');

            $('[id="sidebar_menu-left"]').addClass('col-md-3');
            $('[id = "sidebar_menu_content-left"]').show(1000);

            $('div.option_title').slideToggle().removeClass('option_title');

            $('div.list_unstyled-link').slideToggle().css("display", "block");
            $('div.title-mobile').slideToggle().css({ "display": "block", "text-align": "center", "font-size": "12px" });

            $('.list_unstyled-item').css({ "display": "block", "height": "auto" });
            check_sub_menu = false;
        }
    });


    $('.back-sub-menu').on('click', function () {
        if (!check_sub_menu) {
            if ($(window).width() <= 992) {
                $('[id="sidebar_menu-left"]').show();
            }
            $('[id="sidebar_menu-left"]').addClass('col-md-12');

            $('[id="title-menu"]').removeClass('title-navbar_mobile');

            $('[id="sidebar_menu-left"]').removeClass('col-md-3');
            $('[id = "sidebar_menu_content-left"]').hide();

            $('div.option_title').slideToggle().removeClass('option_title');

            $('div.list_unstyled-link').slideToggle().addClass('option_title')
            $('div.title-mobile').slideToggle().addClass('option_title')

            $('.list_unstyled-item').css({ "display": "flex", "height": "75px" });

            $('div.option_title').slideToggle().css({ "display": "block" });

            check_sub_menu = true;
        }

    });
    // Active class adds open class
    $('.accordian li.active ul').slideDown().addClass('open');
    $('[id="start_list-design"]').click();
}