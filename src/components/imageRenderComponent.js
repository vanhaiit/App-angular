import React, { Component } from 'react';
import initPropeties from '../utils/defaultPropetiesClothes';

class ImageRenderComponent extends Component {
    isNotExists = false;
    constructor(props) {
        super(props);
        this.state = {
            prefix: true,
            isTrenchcoat: false,
        }
    }

    componentDidMount() {
        if (this.props.passRefUpward) this.props.passRefUpward(this);
    }

    componentWillMount() {
        var images = initPropeties.jacket.value.concat(initPropeties.pants.value)
        this.setState({ initPropeties: images })
    }

    showImageRender = images => {

        var result = images.map((element, index) => {
            var subUrl = "";
            if (element.element.length === 0) return false
            if (element.index) {
                element.index.forEach(ix => {
                    subUrl += element.element[ix] + "+";
                });
            } else {
                element.element.forEach((e, index) => {
                    subUrl += e + "+"
                });
            }
            subUrl = subUrl.slice(0, subUrl.length - 1);
            if (subUrl === "empty+cut_slim" || subUrl === "empty" || subUrl === "cut_slim+cut_slim" || subUrl === "empty+third" || subUrl === "cut_regular+cut_slim") return false;
            if (element.prefix === "front/" && this.state.prefix) {
                switch (element.key) {
                    case "caravat":
                        return <img key={index} name={`image_${index}`} id={`image_${index}_id`} src={`http://cdn.csell.vn/duynguyen/3d/new_man/jacket/STD/ties/1/${subUrl}${element.suffix}`} className={element.className} style={{ zIndex: element.zIndex }} />
                    default:
                        return <img key={index} id={`image_render_${index}`} src={`http://cdn.csell.vn/duynguyen/3d/new_man/${element.ingredient}/STD/${element.fabric}${element.prefix}${subUrl}${element.suffix}`} className={element.className} style={{ zIndex: element.zIndex }} />
                }
            }
            if (element.prefix === "back/" && !this.state.prefix) return <img key={index} id={`image_render_${index}`} src={`http://cdn.csell.vn/duynguyen/3d/new_man/${element.ingredient}/STD/${element.fabric}${element.prefix}${subUrl}${element.suffix}`} className={element.className} style={{ zIndex: element.zIndex }} />
        })

        return result;
    }

    setProperties = (style) => {
        console.log(style);

        if (!style) return false;
        style.short_key === "M" ? this.setState({ isTrenchcoat: true }) : this.setState({ isTrenchcoat: false })
        var indexType; var propetiesUpdate = [];
        /**check index update element */
        switch (style.props_name) {
            case "jacket_wide_lapel":
                indexType = 1;
                break;
            case "jacket_lapel_type":
                indexType = 2;
                break;
            case "waistcoat_lapel":
                indexType = 2;
                break;
            case "waistcoat_lapel_width":
                indexType = 1;
                break;
            case "waistcoat_bottom":
                indexType = 1;
                break;
            case "shirt_cuffs":
                indexType = 1;
                break;
            case "shirt_neck_no_interfacing":
                indexType = 1;
                break;
            case "shirt_neck_buttons":
                indexType = 1;
                break;
            default:
                indexType = 0;
                break;
        }

        if (style.short_key === "V") {
            initPropeties.jacket.value.map(p => {
                style.group.map(g => {
                    if (p.key === g) {
                        if (p.key === 'tui_ao_vest' && style.props_name === "jacket_fit") indexType = 1;
                        p.element[indexType] = style.image[g].front ? style.image[g].front[0] : style.image[g].back[0];
                        p['index'] = style.index[g]
                    }
                });
                propetiesUpdate.push(p)
            });
        }

        if (style.short_key === "V" || style.short_key === "G" || style.short_key === "S" || style.short_key === "Q") {
            initPropeties.pants.value.map(p => {
                style.group.map(g => {
                    if (p.key === g) {
                        p.element[indexType] = style.image[g].front ? style.image[g].front[0] : style.image[g].back[0];
                        p['index'] = style.index[g]
                    }
                });
                propetiesUpdate.push(p)
            });
        }

        if (style.short_key === "G") {
            if (style.id === "waistcoat_lapel_peak" || style.id === "waistcoat_lapel_round" || style.id === "waistcoat_lapel_notch") this.isNotExists = false;
            if (style.id === "waistcoat_no_lapel" || style.id === "waistcoat_piece") this.isNotExists = true;
            initPropeties.gile.value.map(p => {
                if (style.group.length === 0 && p.key === "ao_gile") p['index'] = [0, 1, 2];
                style.group.map(g => {
                    if (p.key === g) {
                        p.element[indexType] = style.image[g].front ? style.image[g].front[0] : style.image[g].back[0];
                        p['index'] = style.index[g];
                    }
                });
                if (this.isNotExists && p.key === "ao_gile" && p.index.length == 3) p.index.splice(1, 1);
                if (!this.isNotExists && p.key === "ao_gile" && p.index.length == 2) p.index.splice(1, 0, 1);

                propetiesUpdate.push(p);
            });
        }

        if (style.short_key === "S") {
            initPropeties.shirt.value.map(p => {
                style.group.map(g => {
                    if (p.key === g) {
                        if (g === "co_ao_somi" && style.props_name === "shirt_neck_no_interfacing") indexType = 2;
                        if (g === "nep_ao_somi") indexType = 1;
                        if (g === "nep_ao_somi" && style.props_name === "shirt_fit") indexType = 0;
                        p.element[indexType] = style.image[g].front ? style.image[g].front[0] : style.image[g].back[0];
                        p['index'] = style.index[g];
                    }
                });

                propetiesUpdate.push(p)
            });
        }

        if (style.short_key === "M") {
            initPropeties.coat.value.map(p => {
                style.group.map(g => {
                    if (p.key === g) {
                        p.element[indexType] = style.image[g].front ? style.image[g].front[0] : style.image[g].back[0];
                        p['index'] = style.index[g]
                    }
                });
                propetiesUpdate.push(p)
            });
        }
        console.log(propetiesUpdate);

        this.setState({
            initPropeties: propetiesUpdate,
            short_key: style.short_key
        })
    }

    showSubImageRender = short_key => {
        switch (short_key) {
            case "V":
                return true;
            case "Q":
                return <img src="http://cdn.csell.vn/duynguyen/3d/new_man/shirt/STD/699_fabric/front/shirt_to_pants.png" alt="" className="shirt" style={{ zIndex: 20 }} />
            case "G":
                return (
                    <div>
                        <img src="http://cdn.csell.vn/duynguyen/3d/new_man/jacket/STD/ties/1/corbata_estrecha.png" alt="" className="shirt" style={{ zIndex: 25 }} />
                        <img src="http://cdn.csell.vn/duynguyen/3d/new_man/shirt/STD/699_fabric/front/shirt_to_pants.png" alt="" className="shirt" style={{ zIndex: 20 }} />
                    </div>
                )
            case "S":
                return true;
            case "M":
                return true;
        }
    }

    revetseImageRender = () => {
        var prefix = !this.state.prefix
        this.setState({
            prefix
        })

    }

    showImageRenderReverse = () => {
        if (this.state.isTrenchcoat) return true;
        if (this.state.prefix) {
            return (
                <div>
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
                        {this.showSubImageRender(this.state.short_key)}
                        {this.showImageRenderReverse()}
                    </div>
                </div>
                <div className="btn_togger_back_front">
                    <span className="btngroup">
                        <button className="btngroup--btn" onClick={() => this.revetseImageRender()}><i className="fas fa-sync-alt"></i></button>
                        <span style={{ color: "#afafaf" }}>reverse</span>
                        <button className="btngroup--btn"><i style={{ paddingLeft: "4px" }} className="fas fa-arrows-alt-v"></i></button>
                        <span style={{ color: "#afafaf" }}>move</span>
                        <button className="btngroup--btn"><i className="fas fa-tshirt"></i></button>
                        <span style={{ color: "#afafaf" }}>jacket</span>
                    </span>
                </div>

            </div>
        );
    }
}


export default ImageRenderComponent;