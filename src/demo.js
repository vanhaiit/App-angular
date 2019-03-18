
import $ from 'jquery';

export function toggleIcon() {
    /**click show menu li in mobile */
    $('.btn_sidebar-show').on('click', function () {
        document.getElementById("sidebarLeft").style.width = "100%";
        if ($(window).width() <= 992) {
            $('[id="dunnio_show-result"]').hide();
        }

    });
    /**click hide menu li in mobile */
    $('.btn_sidebar-hide').on('click', function () {
        document.getElementById("sidebarLeft").style.width = "0%";
        if ($(window).width() <= 992) {
            $('[id="dunnio_show-result"]').show();
        }
    });

    /**resize of mobile and pc */
    if ($(window).width() <= 992) {

        $('[id="btn_search"]').css({ "margin": "10px" })

        $('[id="sidebarLeft"]').removeClass('col-md-4');
        $('[id="sidebarLeft"]').addClass('overlay');

        $('[id="item-show_part"]').removeClass('col-md-4 col-4');
        $('[id="item-show_part"]').addClass('col-md-6 col-6');

        $('[class="btn_sidebar-hide"]').show();
        $('[class="btn_sidebar-show"]').show();

        $('[class="list-unstyled mt-3 mb-4"]').hide();
        $('[class="card-title pricing-card-title mt-10 text_bold"]').hide();

        $('[ id="viewport"]').css({ 'left': '-350px' })

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

    /**show hide  option in li mobile and pc */
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
            accordian_list.find('h3, h3 span').addClass('closed');

        }
    });

    /**show option in li mobile and pc */
    var check_sub_menu = true;
    $('.list_unstyled-item').on('click', function () {
        if (check_sub_menu) {
            if ($(window).width() <= 992) {
                $('[id="sidebar_menu-left"]').hide(500);
            }

            $('[id="sidebar_menu-left"]').hide();

            $('[id="sidebar_menu-left"]').removeClass('col-md-12');
            $('div.option_title').removeClass('option_title');

            $('[id="sidebar_menu-left"]').addClass('col-md-3');
            $('[id="title-menu"]').addClass('title-navbar_mobile');
            $('[id="title-menu"]').addClass('text_center');

            $('[id = "sidebar_menu_content-left"]').show(1000);

            $('.list_unstyled-item').css({ "display": "block", "height": "auto" });
            $('div.title-mobile').css({ "display": "block", "text-align": "center", "font-size": "12px" });

            $('[id="scrollbar_custom"]').attr('id', 'transfer');
            $('[id="transfer_scrollbar"]').attr('id', 'scrollbar_custom');

            if ($(window).width() >= 992) {
                $('[id="sidebar_menu-left"]').show(200);
            }

            check_sub_menu = false;

        }
    });

    /**hide option in li mobile and pc */
    $('.back-sub-menu').on('click', function () {
        if (!check_sub_menu) {
            if ($(window).width() <= 992) {
                $('[id="sidebar_menu-left"]').show();
            }
            $('[id="sidebar_menu-left"]').hide();

            $('[id="title-menu"]').removeClass('title-navbar_mobile');
            $('[id="title-menu"]').removeClass('text_center');
            $('[id="sidebar_menu-left"]').removeClass('col-md-3');
            $('div.option_title').removeClass('option_title');
            $('[id = "sidebar_menu_content-left"]').hide();

            $('[id="sidebar_menu-left"]').addClass('col-md-12');
            $('div.list_unstyled-link').addClass('option_title')
            $('div.title-mobile').addClass('option_title')

            $('.list_unstyled-item').css({ "display": "flex", "height": "75px" });
            $('div.option_title').css({ "display": "block" });

            $('[id="sidebar_menu-left"]').show(200);

            $('[id="transfer_scrollbar"]').attr('id', 'scrollbar_custom');

            $('[id="scrollbar_custom"]').attr('id', 'transfer_scrollbar');
            $('[id="transfer"]').attr('id', 'scrollbar_custom');

            check_sub_menu = true;


        }

    });
    // Active class adds open class

    if ($('.sidebar_title_accordian')[0]) {
        $('.sidebar_title_accordian')[0].click()
    }

    // jQuery
}