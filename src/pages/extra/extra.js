import React, { Component } from 'react';
import HeaderComponent from '../../components/headerComponent';
import ImageRenderComponent from '../../components/imageRenderComponent';
import ActionFabricInfoComponent from '../../components/actionFabricInfoComponent';
import data from '../../utils/propertiesExtra';
import { extraMan } from '../../utils/extralining';
import { toggleIcon } from '../../demo';

class ExtraPage extends Component {
    menu = data[1].properties;
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            img_properties: []
        }
    }
    componentDidMount() { toggleIcon(); }

    componentWillMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            switch (id) {
                case "v":
                    this.menu = data.filter(x => x.short_key === "V" || x.short_key === "G");
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
        } else return false
        return this.menu
    }

    showMenuSideBarLeftExtra = () => {
        if (this.state.category === "V")
            return (
                <div id="sidebar_menu-left" className="col-md-12 scrollbox-content">
                    <div id="transfer_scrollbar">
                        <div className="accordian sidebarNav  scrollbox-content">
                            <ul className="sidebarNav">
                                {this.showPropertiesClothesExtra(this.menu)}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        return (
            <div id="sidebar_menu-left" className="col-md-12 scrollbox-content">
                <div className="accordian sidebarNav">
                    <ul className="list-unstyled mt-2 mb-2 ">
                        {this.showPropertiesClothesExtra(this.menu)}
                    </ul>
                </div>
            </div>
        )

    }

    showPropertiesClothesExtra = menu => {
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
                                {this.showSubMenuPropertiesExtra(item.properties)}
                            </ul>
                        </li>
                    )
                })
            }
        } else {
            return this.showSubMenuPropertiesExtra(menu.properties);
        }
        return result;
    }

    showSubMenuPropertiesExtra(data) {
        let sub_result = null;
        if (data.length > 0) {
            sub_result = data.map((item, index) => {
                return (
                    <li id="list_unstyled-item" className="list_unstyled-item" key={index} onClick={() => this.selectPropertiesClothesExtra(item)}>
                        <div className="list_unstyled-link option_title"><i className={`icon-${item.img_icon}`} ></i></div>
                        <div className="option_title title-mobile">{item.displayname}</div>
                    </li >
                )
            });
        }
        return sub_result;
    }

    selectPropertiesClothesExtra = data => {
        this.setState({
            properties: data.values,
            props_name: data.props_name,
        });
    }

    optionStyleTriggerExtra = data => {
        console.log(this.state);
        if (!data) return this.setState({ img_properties: [], value_properties: null, style: data });
        this.setState({ img_properties: data.value !== "Mặc định" ? extraMan[data.props_name] : [], value_properties: data ? data.value : null, style: data }, () => {
        }); this.imageRender.setProperties(data, null)
    }

    showPropertiesContentExtra = () => {
        var result = null;
        if (this.state.properties.length > 0) {
            result = this.state.properties.map((item, index) => {
                return (
                    <div hidden={this.state.img_properties.length !== 0} className={`col-md-6 col-6 option_trigger`} key={index} onClick={() => this.optionStyleTriggerExtra(item)} >
                        <i className={`icon-${item.img_icon} large-icon`} ></i>
                        <div className="text-uppercase">{item.value}</div>
                    </div>
                )
            });
        }
        return result;

    }

    showImagePropertiesExtra = () => {
        var list_image = [];
        switch (this.state.props_name) {
            case "lining__contrast":
                (this.state.value_properties === "Mặc định" || !this.state.value_properties && this.state.props_name === "lining__contrast") ? list_image = [] : list_image = extraMan[this.state.props_name];
                break;
            case "metal_buttons__contrast":
                (this.state.value_properties === "Mặc định" || !this.state.value_properties && this.state.props_name === "metal_buttons__contrast") ? list_image = [] : list_image = extraMan[this.state.props_name];
                break;
        }
        var type = (this.state.value_properties === "Lót bông") ? "2" : "1";
        if (!list_image[type]) return false;
        if (list_image[type].length > 0) {
            var result = null;
            switch (this.state.props_name) {
                case "lining__contrast":
                    result = list_image[type].map((item, index) => {
                        return (
                            <div key={index} id="item-show_part" className="col-md-6 col-6 scrollbox-content" onClick={() => (this.imageRender.setProperties(this.state.style, item))}>
                                <img src={item.image} className="rounded zoom" alt="Cinque Terre" style={{ width: '100%' }} />
                                <a className="thumb_preview"> <i className="fa fa-search" /></a> <a>{item.value}</a>  <br />
                                <label style={{ color: 'red' }}>{item.price}</label>
                            </div>)
                    });
                    break;
                case "initials__text":
                    result = list_image[type].map((item, index) => {
                        return (<div key={index} className="col-md-2 col-2 item_show-color" style={{ background: `${item.color}` }}> </div>)
                    });
                    break;
                case "metal_buttons__contrast":
                    result = list_image[type].map((item, index) => {
                        return (
                            <div key={index} id="item-show_part" className="col-md-4 col-4 scrollbox-content" onClick={() => (this.imageRender.setProperties(this.state.style, item))}>
                                <img src={item.image} className="rounded zoom" alt="Cinque Terre" style={{ width: '100%' }} />
                                <label style={{ color: 'red' }}>{item.price}</label>
                            </div>)
                    });
                    break;
            }

        }
        return result;
    }

    showSubPropertiesContentExtra = () => {

        switch (this.state.props_name) {
            case "lining__contrast":
                return (
                    <div className="col-12 col-md-12">
                        <label onClick={() => this.optionStyleTriggerExtra(null)} hidden={this.state.img_properties.length === 0} style={{ cursor: "pointer" }} className="text-uppercase" ><i className="fas fa-caret-left"></i> back</label>
                        <div className="row" id="scrollbar_custom">
                            {this.showImagePropertiesExtra()}
                        </div>
                    </div>
                );
            case "initials__text":
                return (
                    <div className="col-12 col-md-12" >
                        <label className="title-lable_header">BLAZER INITIALS</label>
                        <div className="col-md-12 col-12 option_trigger" >
                            <input id="initial" type="text" className="form-control" name="initial" placeholder="Thiêu tên.." />
                        </div>
                        <label className="title-lable_header">FONT</label>
                        <div className="col-md-12 col-12 option_trigger" >
                            <div className="row">
                                <div className="col-md-6 col-6">
                                    <div className="radio">
                                        <input id="radio-1" name="radio" type="radio" defaultChecked />
                                        <label htmlFor="radio-1" className="radio-label"><i className="icon-v-37 large-icon" ></i></label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-6">
                                    <div className="radio">
                                        <input id="radio-2" name="radio" type="radio" />
                                        <label htmlFor="radio-2" className="radio-label"><i className="icon-v-38 large-icon" ></i></label>
                                    </div>

                                </div>
                                <div className="col-md-6 col-6">
                                    <div className="radio">
                                        <input id="radio-3" name="radio" type="radio" />
                                        <label htmlFor="radio-3" className="radio-label"><i className="icon-v-39 large-icon" ></i></label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-6">
                                    <div className="radio">
                                        <input id="radio-4" name="radio" type="radio" />
                                        <label htmlFor="radio-4" className="radio-label"><i className="icon-v-41 large-icon" ></i></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label className="title-lable_header">MONOGRAM THREAD COLOR:</label>
                        <div className="col-md-12 col-12 option_trigger" >
                            <div className="row" >
                                {this.showImagePropertiesExtra()}
                            </div>
                        </div>
                    </div>
                );
            case "metal_buttons__contrast":
                return (
                    <div className="col-12 col-md-12">
                        <label onClick={() => this.optionStyleTriggerExtra(null)} hidden={this.state.img_properties.length === 0} style={{ cursor: "pointer" }} className="text-uppercase" ><i className="fas fa-caret-left"></i> back</label>
                        <div className="col-md-12 col-12 option_trigger" >
                            <div className="row">
                                {this.showImagePropertiesExtra()}
                            </div>
                        </div>
                    </div>
                );
        }
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
                            {this.showMenuSideBarLeftExtra()}
                            <div id="sidebar_menu_content-left" className="col-md-9">
                                <div className="back-sub-menu">
                                    <p style={{ width: "90%" }}>TÙY CHỌN</p>
                                    <i className="fa fa-angle-left icon_back" aria-hidden="true" ></i>
                                </div>
                                <div className="row ">
                                    {this.showPropertiesContentExtra()}
                                    {this.showSubPropertiesContentExtra()}
                                </div>

                            </div>
                        </div>
                    </div>
                    {/**END::Phần menu bên trái */}

                    {/**BIGIN::Hiển hị kế quả khi lựa chọn */}
                    <ImageRenderComponent
                        category={this.state.category}
                        passRefUpward={ref => (this.imageRender = ref)}
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

export default ExtraPage;
