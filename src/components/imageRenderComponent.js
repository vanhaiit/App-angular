import React, { Component } from 'react';
import initPropeties from '../utils/defaultPropetiesClothes';
import initPropetiesExtra from '../utils/defaultPropetiesClothesExtra';
import imageError from '../utils/imageEmpty';

class ImageRenderComponent extends Component {
    isNotExists = false;
    designCustom = {}

    constructor(props) {
        super(props); this.state = { prefix: true, inside: false, hide_cavat: false }
    }

    componentWillMount() {

        if (this.props.passRefUpward) this.props.passRefUpward(this);
        //  var design = JSON.parse(localStorage.getItem("design__custom"));
        var images = initPropeties.jacket.value.concat(initPropeties.pants.value);
        this.setState({ initPropeties: images })
    }

    showImageRender = images => {
        var result = images.map((element, index) => {
            var subUrl = "";
            if (element.element.length === 0) return false;
            element.index ? element.index.map(ix => { if (element.element[ix]) subUrl += element.element[ix] + "+"; }) : element.element.map(e => { if (e) subUrl += e + "+" });
            subUrl = subUrl.slice(0, subUrl.length - 1);

            let check = imageError.find(x => x === subUrl);
            if (check) return false;
            if ((element.prefix === "front/" || element.prefix === "") && this.state.prefix) {
                if (element.key === "caravat") return false;
                if (element.inside) return <img key={index} hidden={this.state.inside} id={`image_render_${index}`} src={`http://cdn.csell.vn/duynguyen/3d/new_man/${element.ingredient}/STD/${element.fabric}${element.prefix}${subUrl}${element.suffix}`} className={element.className} style={{ zIndex: element.zIndex }} />
                if (element.inside_extra) return <img key={index} hidden={!this.state.inside} id={`image_render_${index}`} src={`http://cdn.csell.vn/duynguyen/3d/new_man/${element.ingredient}/STD/${element.fabric}${element.prefix}${subUrl}${element.suffix}`} className={element.className} style={{ zIndex: element.zIndex }} />
                return <img key={index} id={`image_render_${index}`} src={`http://cdn.csell.vn/duynguyen/3d/new_man/${element.ingredient}/STD/${element.fabric}${element.prefix}${subUrl}${element.suffix}`} className={element.className} style={{ zIndex: element.zIndex }} />
            }
            if (element.prefix === "back/" && !this.state.prefix) return <img key={index} id={`image_render_${index}`} src={`http://cdn.csell.vn/duynguyen/3d/new_man/${element.ingredient}/STD/${element.fabric}${element.prefix}${subUrl}${element.suffix}`} className={element.className} style={{ zIndex: element.zIndex }} />
        })
        return result;
    }

    setProperties = (style, fabric) => {
        if (!style) return false;
        console.log(style, fabric);
        var propetiesUpdate = [];
        if (style.group_extra) this.props.hidenSubMenuProperties(style)
        if (style.short_key === "V" || style.short_key === "M") {
            initPropetiesExtra.jacket.value.map(p => {
                style.group.map(g => { if (p.key === g) p[style.index[g]] = style.image[g].front ? style.image[g].front : style.image[g].back; });
                if (style.group_to_change) {
                    style.group_to_change.map(g => {
                        if (p.key === g) {
                            if (fabric) p[style.index[g]] = fabric.fabric;
                        }
                        p['inside_extra'] = true;
                        if (p.key === "cuc_boc_vai_sau" || p.key === "cuc_boc_vai_truoc") p.inside_extra = false;
                        if (p.key === "cuc_boc_vai_truoc") p.element = this.state.initPropeties.find(x => x.key === "giua_ao_vest").element;
                        if (p.key === "holes_ban_ve") p.element = this.state.initPropeties.find(x => x.key === "giua_ao_vest").element;
                        if (p.key === "bong_ve_ao_vest") p.element = this.state.initPropeties.find(x => x.key === "giua_ao_vest").element;
                        if (p.key === "holes_kieu_dang") p.element = this.state.initPropeties.find(x => x.key === "giua_ao_vest").element;
                        this.state.inside = true;
                        propetiesUpdate.push(p);
                    });
                    this.setState({ hide_cavat: true })
                }
            });

            initPropeties.jacket.value.map(p => {
                style.group.map(g => {
                    if (p.key === g) {
                        style.index[g].forEach((ix, index) => {
                            if (style.image[g].front) p.element[ix] = style.image[g].front[index] ? style.image[g].front[index] : p.element[ix];
                            if (style.image[g].back) p.element[ix] = style.image[g].back[index] ? style.image[g].back[index] : p.element[ix];
                        });
                        p['index'] = style.index[g];
                    }
                });
                propetiesUpdate.push(p)
            });
        }

        initPropeties.pants.value.map(p => {
            style.group.map(g => {
                if (p.key === g) {
                    style.index[g].forEach((ix, index) => {
                        if (style.image[g].front) p.element[ix] = style.image[g].front[index] ? style.image[g].front[index] : p.element[ix];
                        if (style.image[g].back) p.element[ix] = style.image[g].back[index] ? style.image[g].back[index] : p.element[ix];
                    });
                    p['index'] = style.index[g];
                }
            });
            p['inside'] = true;
            propetiesUpdate.push(p)
        });

        if (style.short_key === "S" || style.short_key === "Q" || style.short_key === "G") {
            initPropeties.shirt.value.map(p => {
                if (style.short_key === "S") {
                    initPropetiesExtra.shirt.value.map(p => {
                        style.group.map(g => { if (p.key === g) p[style.index[g]] = style.image[g].front ? style.image[g].front : style.image[g].back; });
                        if (style.group_to_change) {
                            style.group_to_change.map(g => {
                                if (p.key === g) {
                                    if (fabric) p.fabric = fabric.fabric;
                                    p.element[style.index[g]] = style.image[g].front ? style.image[g].front : style.image[g].back;
                                    propetiesUpdate.push(p);
                                }
                            });
                            this.setState({ hide_cavat: true })
                        }
                    });
                }

                style.group.map(g => {
                    if (p.key === g) {
                        style.index[g].forEach((ix, index) => {
                            if (style.image[g].front) p.element[ix] = style.image[g].front[index] ? style.image[g].front[index] : p.element[ix];
                            if (style.image[g].back) p.element[ix] = style.image[g].back[index] ? style.image[g].back[index] : p.element[ix];
                        });
                        p['index'] = style.index[g];
                    }
                });

                propetiesUpdate.push(p)
            });
        }

        if (style.short_key === "G") {
            if (style.id === "waistcoat_lapel_peak" || style.id === "waistcoat_lapel_round" || style.id === "waistcoat_lapel_notch") this.isNotExists = false;
            if (style.id === "waistcoat_no_lapel" || style.id === "waistcoat_piece") this.isNotExists = true;

            // initPropetiesExtra.gile.value.map(p => {
            //     style.group.map(g => { if (p.key === g) p[style.index[g]] = style.image[g].front ? style.image[g].front : style.image[g].back; });
            //     if (style.group_to_change) {
            //         style.group_to_change.map(g => { if (p.key === g) if (fabric) p[style.index[g]] = fabric.fabric; });
            //         p['inside_extra'] = true;
            //         this.state.inside = true;
            //         propetiesUpdate.push(p);
            //         console.log(p);
            //     }
            // });

            initPropeties.gile.value.map(p => {
                if (style.group.length === 0 && p.key === "ao_gile") p['index'] = [0, 1, 2];
                style.group.map(g => {
                    if (p.key === g) {
                        style.index[g].forEach((ix, index) => {
                            if (style.image[g].front) p.element[ix] = style.image[g].front[index] ? style.image[g].front[index] : p.element[ix];
                            if (style.image[g].back) p.element[ix] = style.image[g].back[index] ? style.image[g].back[index] : p.element[ix];
                            if (style.special && p.key === "ao_gile") if (style.special === "style_lapel_no") p.element[2] = "style_lapel_no";
                        });
                        p['index'] = style.index[g];
                    }
                });
                if (this.isNotExists && p.key === "ao_gile" && p.index.length === 3) p.index.splice(1, 1);
                if (!this.isNotExists && p.key === "ao_gile" && p.index.length === 2) p.index.splice(1, 0, 1);
                propetiesUpdate.push(p);
            });
        }
        if (style.short_key === "M") {

            // initPropeties.coat.value.map(p => {
            //     style.group.map(g => {
            //         if (p.key === g) {

            //             style.index[g].forEach((ix, index) => {
            //                 if (!style.special) {
            //                     (style.image[g].front) ?
            //                         p.element[ix] = style.image[g].front[ix] ? style.image[g].front[ix] : p.element[ix] :
            //                         p.element[ix] = style.image[g].back[ix] ? style.image[g].back[ix] : p.element[ix];
            //                 } else {
            //                     if (style.image[g].front) p.element[ix] = style.image[g].front[index] ? style.image[g].front[index] : p.element[ix];
            //                     if (style.image[g].back) p.element[ix] = style.image[g].back[index] ? style.image[g].back[index] : p.element[ix];
            //                     if (ix > index) p.element[ix] = style.image[g].front[ix];
            //                 }
            //             });
            //             style.special ? p['index'] = style.index[g] : p['index'] = p["index"];

            //         }
            //     });

            //     propetiesUpdate.push(p);
            // });

            initPropetiesExtra.coat.value.map(p => {
                style.group.map(g => { if (p.key === g) p[style.index[g]] = style.image[g].front ? style.image[g].front : style.image[g].back; });
                if (style.group_to_change) {
                    style.group_to_change.map(g => {
                        if (p.key === g) {
                            if (fabric) p.fabric = fabric.fabric;
                            propetiesUpdate.push(p);
                        }
                    });
                    if (p.key === "giua_ao_mangto") {
                        p.element = ["top", "style_simple", "collar_flap", "lapel_lenght_long", "lapel_wide_wide", "lapel_style_notched", "fastening_boton_standard"]
                    }
                    this.setState({ hide_cavat: true, hide_pants: true })
                }
            });
        };

        this.designCustom[style.short_key] = propetiesUpdate;

        localStorage.setItem("design__custom", JSON.stringify(this.designCustom));

        this.setState({ initPropeties: propetiesUpdate, short_key: style.short_key })
    }

    showImageRenderReverse = () => {
        if (this.state.inside) return <img hidden={this.state.hide_pants} className="pants_folded" src="http://cdn.csell.vn/duynguyen/3d/new_man/pants/STD/1645_fabric/folded/length_long+cut_slim.png" style={{ zIndex: 26 }} />;
        if (this.state.prefix) {
            console.log(this.state);
            return (
                <div>
                    <img hidden={this.state.hide_cavat} src="http://cdn.csell.vn/duynguyen/3d/new_man/jacket/STD/ties/1/corbata_estrecha.png" alt="" className="shirt" style={{ zIndex: 31 }} />
                    <img src="http://cdn.csell.vn/duynguyen/3d/new_man/shirt/STD/699_fabric/front/shirt_to_jacket.png" className="shirt" style={{ zIndex: 20 }} />
                    <img src="http://cdn.csell.vn/duynguyen/3d/new_man/models/STD/front/carlos.png" style={{ zIndex: 10 }} />
                    <img src="http://cdn.csell.vn/duynguyen/3d/new_man/pants/STD/zapatos/black/front/zapatos.png" style={{ zIndex: 26 }} />
                </div>
            )
        }
        return (
            <div>
                <img src="http://cdn.csell.vn/duynguyen/3d/new_man/shirt/STD/699_fabric/back/shirt_to_pants.png" className="shirt" style={{ zIndex: 20 }} />
                <img src="http://cdn.csell.vn/duynguyen/3d/new_man/models/STD/back/carlos.png" style={{ zIndex: 10 }} />
                <img src="http://cdn.csell.vn/duynguyen/3d/new_man/pants/STD/zapatos/black/back/zapatos.png" style={{ zIndex: 26 }} />
            </div>
        )
    }

    render() {
        return (
            <div className="col-md-5" id="dunnio_show-result" style={{ height: '700px' }}>
                <span className="btn_sidebar-show" ><i className="fa fa-bars icon_back" ></i></span>
                <div id="available_window" className="image_render man_suit fabric_step">
                    <div className="layers viewport " id="viewport" style={{ width: '250px', left: '-238px', top: '0' }}>
                        {this.showImageRender(this.state.initPropeties)}
                        {this.showImageRenderReverse()}
                    </div>
                </div>
                <div className="btn_togger_back_front">
                    <span className="btngroup">
                        <button className="btngroup--btn" onClick={() => this.setState({ inside: !this.state.inside, prefix: true })}><i className="fas fa-paint-brush"></i></button>
                        <span style={{ color: "#afafaf" }}>accents</span>
                        <button className="btngroup--btn" onClick={() => this.setState({ prefix: !this.state.prefix, inside: false })}><i className="fas fa-sync-alt"></i></button>
                        <span style={{ color: "#afafaf" }}>reverse</span>
                        <button className="btngroup--btn"><i className="fas fa-tshirt"></i></button>
                        <span style={{ color: "#afafaf" }}>jacket</span>
                    </span>
                </div>
            </div>
        );
    }
}


export default ImageRenderComponent;