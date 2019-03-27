const initPropetiesExtra = {
    jacket: {
        index: {
            default_lot_ao_vest_tren: [0],
            default_lot_ao_vest_duoi: [0],
            lot_ao_vest_tren: [0],
            lot_ao_vest_duoi: [0],
            lot_ao_vest_unlined_tren: [0],
            lot_ao_vest_unlined_duoi: [0],
            unlined_top_x: [0],
            unlined_top: [0],
            unlined_bottom: [0],
            khan_tui_nguc: [0],
            vong_co_sau_ao: [0],
            cuc_boc_vai_truoc: [0, 1, 2],
            cuc_boc_vai_sau: [0],
            holes_ban_ve: [0, 1, 2, 3],
            holes_kieu_dang: [0, 1, 2],
            holes_bac_tay: [0],
            threads_kieu_dang: [0, 1, 2],
            threads_bac_tay: [0],
            bong_ve_ao_vest: [0, 1, 2],
            elbow_patches: [0],
        },
        value: [
            {
                key: "default_lot_ao_vest_tren",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["interior+espalda_arriba"]
            },
            {
                key: "default_lot_ao_vest_duoi",
                fabric: "1645_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["interior+espalda_abajo+length_long"]
            },
            {
                key: "lot_ao_vest_tren",
                fabric: "linings/161_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["interior+espalda_arriba"]
            },
            {
                key: "lot_ao_vest_duoi",
                fabric: "linings/161_fabric/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["interior+espalda_abajo+length_long"]
            },
            {
                key: "lot_ao_vest_unlined_tren",
                fabric: "empty/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["interior+espalda_arriba+unlined_v2"]
            },
            {
                key: "lot_ao_vest_unlined_duoi",
                fabric: "empty/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 150,
                element: ["interior+espalda_abajo+length_long+unlined_v2"]
            },
            {
                key: "unlined_top_x",
                fabric: "empty/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["interior+espalda_arriba+unlined_v2+x"]
            },
            {
                key: "unlined_top",
                fabric: "empty/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["interior+espalda_arriba+unlined_v2"]
            },
            {
                key: "unlined_bottom",
                fabric: "empty/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["interior+espalda_abajo+length_long+unlined_v2"]
            },
            {
                key: "khan_tui_nguc",
                fabric: "empty/",
                prefix: '',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 100,
                element: ["handkerchief_recto"]
            },
            {
                key: "vong_co_sau_ao",
                fabric: "empty/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 37,
                element: ["neck"]
            },
            {
                key: "cuc_boc_vai_truoc",
                fabric: "empty/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 101,
                element: ["neck_single_breasted+buttons_2", "lapel_medium", "style_lapel_notch"]

            },
            {
                key: "cuc_boc_vai_sau",
                fabric: "empty/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 37,
                element: ["sleeves+buttons_4"]
            },
            {
                key: "holes_ban_ve",
                fabric: "empty/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 37,
                element: ["neck_single_breasted+buttons_2", "lapel_medium", "style_lapel_notch", "lapel"]
            },
            {
                key: "holes_kieu_dang",
                fabric: "empty/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 37,
                element: ["neck_single_breasted+buttons_2", "lapel_medium", "style_lapel_notch"]
            },
            {
                key: "holes_bac_tay",
                fabric: "empty/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 37,
                element: ["sleeves+buttons_4"]
            },
            {
                key: "threads_kieu_dang",
                fabric: "empty/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 37,
                element: ["neck_single_breasted+buttons_2", "lapel_medium", "style_lapel_notch"]
            },
            {
                key: "threads_bac_tay",
                fabric: "empty/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 37,
                element: ["sleeves+buttons_4"]
            },
            {
                key: "bong_ve_ao_vest",
                fabric: "empty/",
                prefix: 'front/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 37,
                element: ["neck_single_breasted+buttons_2", "lapel_narrow", "style_lapel_notch"]
            },
            {
                key: "elbow_patches",
                fabric: "empty/",
                prefix: 'back/',
                suffix: '.png',
                ingredient: 'jacket',
                opacity: 1,
                className: 'man_jacket',
                zIndex: 37,
                element: ["elbow_patches"]
            },

        ]
    }
}
export default initPropetiesExtra;