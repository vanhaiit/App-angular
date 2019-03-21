const initPropeties = {
    jacket: {
        index: {
            giua_ao_vest: [0, 1, 2],
            ong_tay_ao: [0],
            tui_nguc_ao_vest: [0],
            vat_ao_vest: [0],
            tui_ao_vest: [0, 1],
            tui_thu3_ao_vest: [0, 1, 2],
            bop_ao_vest: [0],
            giua_ao_vest_sau: [0],
            vat_ao_vest_sau: [0],
            ong_tay_ao_sau: [0],
        },
        value: [
            {
                key: "giua_ao_vest",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["neck_single_breasted+buttons_2", "lapel_narrow", "style_lapel_notch"]
            },
            {
                key: "ong_tay_ao",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["sleeves"]
            },
            {
                key: "tui_nguc_ao_vest",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["breast_pocket_classic"]
            },
            {
                key: "vat_ao_vest",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["bottom_single_breasted+length_long+hemline_open"]
            },
            {
                key: "tui_ao_vest",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["hip_pockets_with_flap", "fit_slim"]
            },
            {
                key: "tui_thu3_ao_vest",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 150,
                element: []
            },
            {
                key: "bop_ao_vest",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: []
            },
            {
                key: "giua_ao_vest_sau",
                fabric: "1645_fabric/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["neck"]
            },
            {
                key: "vat_ao_vest_sau",
                fabric: "1645_fabric/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["bottom+length_long+back_style_side_vents"]
            },
            {
                key: "ong_tay_ao_sau",
                fabric: "1645_fabric/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["sleeves+buttons_4"]
            },
            {
                key: "caravat",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 37,
                element: ["corbata_estrecha"]
            },

        ]
    },
    pants: {
        index: {
            ong_quan: [0],
            cap_quan: [0],
            tui_quan: [0],
            gau_quan: [0, 1],
            vien_quan: [0],
            gau_quan_sau: [0, 1],
            ong_quan_sau: [0],
            tui_quan_sau: [0]
        },
        value: [
            {
                key: "ong_quan",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'pants',
                opacity: 1,
                className: 'man_pant',
                zIndex: 31,
                element: ["length_long+cut_slim"]
            },
            {
                key: "cap_quan",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'pants',
                opacity: 1,
                className: 'man_pant',
                zIndex: 31,
                element: ["fastening_moved+visible_button"]
            },
            {
                key: "tui_quan",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'pants',
                opacity: 1,
                className: 'man_pant',
                zIndex: 31,
                element: ["front_pocket+diagonal"]
            },
            {
                key: "gau_quan",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'pants',
                opacity: 1,
                className: 'man_pant',
                zIndex: 31,
                element: ["empty", "cut_slim"]
            }, {
                key: "vien_quan",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'pants',
                opacity: 1,
                className: 'man_pant',
                zIndex: 31,
                element: ["empty"]
            }, {
                key: "gau_quan_sau",
                fabric: "1645_fabric/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'pants',
                opacity: 1,
                className: 'man_pant',
                zIndex: 31,
                element: ["empty", "cut_slim"]
            }, {
                key: "ong_quan_sau",
                fabric: "1645_fabric/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'pants',
                opacity: 1,
                className: 'man_pant',
                zIndex: 31,
                element: ["length_long+cut_slim"]
            }, {
                key: "tui_quan_sau",
                fabric: "1645_fabric/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'pants',
                opacity: 1,
                className: 'man_pant',
                zIndex: 31,
                element: ["back_pocket+2+type_button"]
            }
        ]
    },
    gile: {
        index: {
            ao_gile: [0, 2],
            vat_ao_gile: [0, 1],
            tui_ao_gile: [0],
            tui_thu3_ao_gile: [0, 1],
            tui_nguc_ao_gile: [0],
            ao_gile_sau: [0],
        },
        value: [
            {
                key: "ao_gile",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'waistcoat',
                opacity: 1,
                className: 'waistcoat',
                zIndex: 100,
                element: ["neck_single_breasted+buttons_5", "style_lapel_no"],
            },
            {
                key: "vat_ao_gile",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'waistcoat',
                opacity: 1,
                className: 'waistcoat',
                zIndex: 100,
                element: ["bottom_single_breasted", "edge_diagonal"]
            },
            {
                key: "tui_ao_gile",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'waistcoat',
                opacity: 1,
                className: 'waistcoat',
                zIndex: 100,
                element: ["hip_pockets_welt"]
            },
            {
                key: "tui_thu3_ao_gile",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'waistcoat',
                opacity: 1,
                className: 'waistcoat',
                zIndex: 100,
                element: ["empty", "third"]
            },
            {
                key: "tui_nguc_ao_gile",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'waistcoat',
                opacity: 1,
                className: 'waistcoat',
                zIndex: 100,
                element: ["breast_pocket_classic"]
            },
            {
                key: "ao_gile_sau",
                fabric: "1645_fabric/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'waistcoat',
                opacity: 1,
                className: 'waistcoat',
                zIndex: 100,
                element: ["back_lining"]
            }
        ]
    },
    shirt: {
        index: {
            co_ao_somi: [0, 1, 2],
            nep_ao_somi: [0, 1, 2],
            ong_tay_ao_somi: [0],
            tui_ao_somi: [0],
            cuc_tui_ao_somi: [0],
            ao_somi_sau: [0, 1],
            co_ao_somi_sau: [0],
            bac_tay_ao_somi: [0, 1],
            xep_ly_vai_ao_somi: [0],
        },
        value: [
            {
                key: "co_ao_somi",
                fabric: "1737_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'shirt',
                opacity: 1,
                className: 'shirt',
                zIndex: 31,
                element: ["necklines_classic", "number_1", "button_close_standard"]
            },
            {
                key: "nep_ao_somi",
                fabric: "1737_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'shirt',
                opacity: 1,
                className: 'shirt',
                zIndex: 31,
                element: ["fit_fit", "button_close_standard", "inside"]
            },
            {
                key: "ong_tay_ao_somi",
                fabric: "1737_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'shirt',
                opacity: 1,
                className: 'shirt',
                zIndex: 31,
                element: ["sleeves_long+cuffs_classic"]
            },
            {
                key: "tui_ao_somi",
                fabric: "1737_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'shirt',
                opacity: 1,
                className: 'shirt',
                zIndex: 31,
                element: ["empty"]
            },
            {
                key: "cuc_tui_ao_somi",
                fabric: "Botones/1/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'shirt',
                opacity: 1,
                className: 'shirt',
                zIndex: 31,
                element: ["empty"]
            },
            {
                key: "ao_somi_sau",
                fabric: "1737_fabric/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'shirt',
                opacity: 1,
                className: 'shirt',
                zIndex: 31,
                element: ["fit_fit", "inside"]
            },
            {
                key: "co_ao_somi_sau",
                fabric: "1737_fabric/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'shirt',
                opacity: 1,
                className: 'shirt',
                zIndex: 31,
                element: ["necklines_1_button"]
            },
            {
                key: "bac_tay_ao_somi",
                fabric: "1737_fabric/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'shirt',
                opacity: 1,
                className: 'shirt',
                zIndex: 31,
                element: ["sleeves_long", "cuffs_style_cut"]
            },
            {
                key: "xep_ly_vai_ao_somi",
                fabric: "1737_fabric/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'shirt',
                opacity: 1,
                className: 'shirt',
                zIndex: 31,
                element: ["empty"]
            }
        ]
    }

}
export default initPropeties;