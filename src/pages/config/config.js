import React, { Component } from 'react';
import HeaderComponent from '../../components/headerComponent';
import ImageRenderComponent from '../../components/imageRenderComponent';
import ActionFabricInfoComponent from '../../components/actionFabricInfoComponent';
import data from '../../utils/propertiesClothes';
import { connect } from 'react-redux';
import { toggleIcon } from '../../demo';

class ConfigPage extends Component {
    items_hide = [];
    menu = [];
    check_null_document = false;
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            key: null,
            style: null,
            active: null,
        }
    }

    componentDidMount() { toggleIcon(); }

    componentWillMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            switch (id) {
                case "v":
                    this.menu = data.filter(x => x.short_key === "V" || x.short_key === "Q" || x.short_key === "G");
                    this.setState({ category: "V" })
                    break;
                case "s":
                    this.menu = data.find(x => x.short_key === "S");
                    this.setState({ category: "S" })
                    break;
                case "m":
                    this.menu = data.find(x => x.short_key === "M");
                    this.setState({ category: "M" })
                    break;
            }
        }
    }

    showMenuSideBarLeft = () => {
        if (this.state.category === "V")
            return (
                <div id="sidebar_menu-left" className="col-md-12 scrollbox-content">
                    <div id="transfer_scrollbar">
                        <div className="accordian sidebarNav  scrollbox-content">
                            <ul className="sidebarNav">
                                {this.showPropertiesClothes(this.menu)}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        return (
            <div id="sidebar_menu-left" className="col-md-12 scrollbox-content">
                <div className="accordian sidebarNav">
                    <ul className="list-unstyled mt-2 mb-2 ">
                        {this.showPropertiesClothes(this.menu)}
                    </ul>
                </div>
            </div>
        )

    }

    hidenSubMenuProperties = style => {
        var data_hide = [];
        if (style.id === "funnel_neck") data_hide = ["coat_lapel_length", "coat_lapel_style", "coat_lapel_wide"];
        if (style.id === "over_coat" || style.id === "double_breasted_coat" || style.id === "pea_coat" || style.id === "duffle_coat") data_hide = [""];

        if (style.id === "neck_mao") data_hide = ["jacket_lapel_type", "jacket_wide_lapel"];
        if (style.id === "single_breasted_buttons_2" || style.id === "single_breasted_buttons_1" || style.id === "single_breasted_buttons_3"
            || style.id === "double_breasted_buttons_2" || style.id === "double_breasted_buttons_4" || style.id === "double_breasted_buttons_6") data_hide = [""];
        if (data_hide.length === 0) data_hide = this.state.data_hide
        this.setState({ style, data_hide }, () => { this.showPropertiesContent(); });
    }

    showSubMenuProperties(data) {
        let sub_result = null;
        if (data.length > 0) {
            sub_result = data.map((item, index) => {
                var check_hide = false;
                if (this.state.data_hide) this.state.data_hide.find(x => x === item.props_name) ? check_hide = true : check_hide = false;
                return (
                    <li id="list_unstyled-item" hidden={check_hide} className="list_unstyled-item" key={index} onClick={() => this.selectPropertiesClothes(item)}>
                        <div className="list_unstyled-link option_title"><i className={`icon-${item.img_icon}`} ></i></div>
                        <div className="option_title title-mobile">{item.displayname}</div>
                    </li >
                )
            });
        }
        return sub_result;
    }

    showPropertiesClothes = menu => {
        let result = null;

        if (this.state.category === "V") {
            if (menu.length > 0) {
                result = menu.map((item, index) => {
                    return (
                        <li id={`sidebar_accordian_list_${index}`} key={index} >
                            <div className="sidebar_title_accordian" id={`title_${index}`} >
                                <h3 id="title-menu" className="text-uppercase "> <span className="arrow" />{item.displayname}</h3>
                            </div>
                            <ul className="list-unstyled mt-2 mb-2 ">
                                {this.showSubMenuProperties(item.properties)}
                            </ul>
                        </li>
                    )
                })
            }
        } else {
            return this.showSubMenuProperties(menu.properties);
        }
        return result;
    }

    removeItemInArray = (array, element) => {
        const index = array.indexOf(element);
        array.splice(index, 1);
    }

    showPropertiesContent = () => {
        var result = null;
        if (this.state.properties.length > 0) {
            result = this.state.properties.map((item, index) => {
                var hide = false;

                /***-----------gile------------------ */
                if (item.id === "waistcoat_no_lapel" && this.state.style.id === "waistcoat_no_lapel") {
                    var checkNull = this.items_hide.find(x => x === "waistcoat_lapel_width")
                    if (!checkNull) this.items_hide.push("waistcoat_lapel_width")
                }

                if (item.id === "waistcoat_no_lapel" && this.state.style.id !== "waistcoat_no_lapel") {
                    this.removeItemInArray(this.items_hide, "waistcoat_lapel_width");
                }

                /***-------------coat---------------- */
                if (item.id === "over_coat" && this.state.style.id === "over_coat") {
                    this.items_hide = [];
                    var checkArray = this.items_hide.filter(x => x === "horn_toogle_with_zipper" || x === "zipper" || x === "horn_toogle");
                    var arraydefault = ["horn_toogle_with_zipper", "zipper", "horn_toogle", "lapel_style_ulster"];
                    arraydefault.forEach(element => {
                        var check = checkArray.find(x => x === element);
                        if (!check) this.items_hide.push(element);
                    });
                }

                if (item.id === "hidden_buttons" && this.state.style.id === "hidden_buttons") {
                    var checkArray = this.items_hide.filter(x => x === "lapel_style_rounded" || x === "lapel_style_ulster");
                    var arraydefault = ["lapel_style_rounded", "lapel_style_ulster"];
                    arraydefault.forEach(element => {
                        var check = checkArray.find(x => x === element);
                        if (!check) this.items_hide.push(element);
                    });
                }

                if (item.id === "double_breasted_coat" && this.state.style.id === "double_breasted_coat") {
                    this.items_hide = [];
                    var checkArray = this.items_hide.filter(x => x === "horn_toogle_with_zipper" || x === "zipper" || x === "horn_toogle" || x === "buttons" || x === "hidden_buttons")
                    var arraydefault = ["horn_toogle_with_zipper", "zipper", "horn_toogle", "buttons", "hidden_buttons"];
                    arraydefault.forEach(element => {
                        var check = checkArray.find(x => x === element);
                        if (!check) this.items_hide.push(element)
                    });
                }

                if (item.id === "funnel_neck" && this.state.style.id === "funnel_neck") {
                    this.items_hide = [];
                    var checkArray = this.items_hide.filter(x => x === "horn_toogle_with_zipper" || x === "horn_toogle")
                    var arraydefault = ["horn_toogle_with_zipper", "horn_toogle", "coat_lapel_length", "coat_lapel_style", "coat_lapel_wide"];
                    arraydefault.forEach(element => {
                        var check = checkArray.find(x => x === element);
                        if (!check) this.items_hide.push(element)
                    });
                }

                if (item.id === "pea_coat" && this.state.style.id === "pea_coat") {
                    this.items_hide = [];
                    var checkArray = this.items_hide.filter(x => x === "horn_toogle_with_zipper" || x === "zipper" || x === "horn_toogle" || x === "buttons" || x === "hidden_buttons")
                    var arraydefault = ["horn_toogle_with_zipper", "zipper", "horn_toogle", "buttons", "hidden_buttons"];
                    arraydefault.forEach(element => {
                        var check = checkArray.find(x => x === element);
                        if (!check) this.items_hide.push(element)
                    });
                }

                if (item.id === "duffle_coat" && this.state.style.id === "duffle_coat") {
                    this.items_hide = [];
                    var checkArray = this.items_hide.filter(x => x === "horn_toogle_with_zipper" || x === "zipper" || x === "horn_toogle" || x === "buttons" || x === "hidden_buttons")
                    var arraydefault = ["horn_toogle_with_zipper", "zipper", "horn_toogle", "buttons", "hidden_buttons"];
                    arraydefault.forEach(element => {
                        var check = checkArray.find(x => x === element);
                        if (!check) this.items_hide.push(element)
                    });
                }

                var check_hiden = this.items_hide.find(x => x === item.props_name || x === item.id)
                if (check_hiden) hide = true;
                if (!hide) {
                    return (
                        <div className={`col-md-6 col-6 option_trigger ${item.id === this.state.active ? 'active_trigger' : ''}`} key={index} onClick={() => this.optionStyleTrigger(item)} >
                            <i className={`icon-${item.img_icon} large-icon`} ></i>
                            <div className="text-uppercase">{item.value}</div>
                        </div>
                    )
                }
            });

        }
        return result;
    }

    selectPropertiesClothes = (data) => { this.setState({ properties: data.values, style: data.values[0] }); }

    optionStyleTrigger = properties => {
        this.imageRender.setProperties(properties)
        this.setState({
            style: properties,
            active: properties.id
        });
    }

    render() {
        return (
            <div>
                {/**BIGIN::Phầng header */}
                <HeaderComponent />
                {/**END::Phần header */}

                {/**BIGIN::Phân body */}
                <div className="row container-fluid">

                    {/**BIGIN :: Phần menu bên trái  */}
                    <div className="col-md-4" id="sidebarLeft">
                        <div className="title_sidebar_mobile-left">
                            <label className="subtitle_sidebar_mobile">THIẾT KẾ</label>
                            <span className="btn_sidebar-hide"><i className="fa fa-arrow-left icon_back" aria-hidden="true"></i></span>
                        </div>
                        <div className="row" id="scrollbar_custom" >
                            {this.showMenuSideBarLeft()}
                            <div id="sidebar_menu_content-left" className="col-md-9">
                                <div className="back-sub-menu">
                                    <p style={{ width: "90%" }}>TÙY CHỌN</p>
                                    <i className="fa fa-angle-left icon_back" aria-hidden="true" ></i>
                                </div>
                                <div className="row ">
                                    {this.showPropertiesContent()}
                                </div>

                            </div>
                        </div>
                    </div>
                    {/**END::Phần menu bên trái */}

                    {/**BIGIN::Hiển hị kế quả khi lựa chọn */}
                    <ImageRenderComponent
                        style={this.state.style}
                        category={this.state.category}
                        passRefUpward={ref => (this.imageRender = ref)}
                        hidenSubMenuProperties={this.hidenSubMenuProperties}

                    />
                    {/**END::Hiển hị kế quả khi lựa chọn */}

                    {/**BIGIN::Hiên thị giá tiền và chi tiết thiết kế đã chọ  */}
                    <ActionFabricInfoComponent />
                    {/**END::Hiên thị giá tiền và chi tiết thiết kế đã chọ  */}

                </div>
                {/**END::Phân body */}
            </div>
        );
    }

}




export default connect(null, null)(ConfigPage);
