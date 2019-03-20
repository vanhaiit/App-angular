import React, { Component } from 'react';
import initPropeties from '../utils/defaultPropetiesClothes';

class ImageRenderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
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
            element.element.forEach((e, index) => {
                if (element.index) { if (element.index[index] !== undefined) subUrl += e + "+"; } else { subUrl += e + "+"; }
            });
            subUrl = subUrl.slice(0, subUrl.length - 1);
            if (element.prefix === "front/") {
                switch (element.key) {
                    case "caravat":
                        return <img key={index} name={`image_${index}`} id={`image_${index}_id`} src={`http://cdn.csell.vn/duynguyen/3d/new_man/jacket/STD/ties/1/${subUrl}${element.suffix}`} className={element.className} style={{ zIndex: element.zIndex }} />
                    default:
                        return <img key={index} src={`http://cdn.csell.vn/duynguyen/3d/new_man/${element.ingredient}/STD/${element.fabric}${element.prefix}${subUrl}${element.suffix}`} className={element.className} style={{ zIndex: element.zIndex }} />
                }
            }

        })
        return result;
    }

    setProperties = (style) => {
        console.log(style);

        if (!style) return false;
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
            default:
                indexType = 0;
                break;
        }
        if (style.short_key === "V") {
            initPropeties.jacket.value.map(p => {
                style.group.map(g => {
                    if (p.key === g) {
                        if (p.key === 'tui_ao_vest' && style.props_name === "jacket_fit") indexType = 1;
                        p.element[indexType] = style.image[g].front[0];
                        p['index'] = style.index[g]
                    }
                });

                propetiesUpdate.push(p)
            });
        }

        initPropeties.pants.value.map(p => {
            style.group.map(g => {
                if (p.key === g) {
                    if (style.image[g].front) p.element[indexType] = style.image[g].front[0];
                    p['index'] = style.index[g]
                }
            });
            propetiesUpdate.push(p)
        });

        if (style.short_key === "G") {
            initPropeties.gile.value.map(p => {
                style.group.map(g => {
                    if (p.key === g) {
                        if (style.image[g].front) p.element[indexType] = style.image[g].front[0];
                        p['index'] = style.index[g]
                    }
                });
                propetiesUpdate.push(p)
            });
        }

        if (style.short_key === "S") {
            initPropeties.shirt.value.map(p => {
                style.group.map(g => {
                    if (p.key === g) {
                        if (style.image[g].front) p.element[indexType] = style.image[g].front[0];
                        p['index'] = style.index[g]
                    }
                });
                propetiesUpdate.push(p)
            });
        }

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
        }
    }

    render() {
        return (
            <div className="col-md-5" id="dunnio_show-result" style={{ height: '700px' }}>
                <span className="btn_sidebar-show" ><i className="fa fa-bars icon_back" ></i></span>
                <div id="available_window" className="image_render man_suit fabric_step">
                    <div className="layers viewport " id="viewport" style={{ width: '271px', left: '-284px', top: '0' }}>
                        {this.showImageRender(this.state.initPropeties)}
                        {this.showSubImageRender(this.state.short_key)}
                        <img src="http://cdn.csell.vn/duynguyen/3d/new_man/shirt/STD/699_fabric/front/shirt_to_jacket.png" className="shirt" style={{ zIndex: 20 }} />
                        <img src="http://cdn.csell.vn/duynguyen/3d/new_man/models/STD/front/carlos.png" style={{ zIndex: 10 }} />
                        <img src="http://cdn.csell.vn/duynguyen/3d/new_man/pants/STD/zapatos/black/front/zapatos.png" style={{ zIndex: 26 }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageRenderComponent;
