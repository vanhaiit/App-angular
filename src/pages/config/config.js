import React, { Component } from 'react';
import HeaderComponent from '../../components/headerComponent';
import ImageRenderComponent from '../../components/imageRenderComponent';
import ActionFabricInfoComponent from '../../components/actionFabricInfoComponent';
import data from '../../utils/propertiesClothes';
import { connect } from 'react-redux';


class ConfigPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: [],
            key: null,
            style: null,
            active: null
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
                            <div id="sidebar_menu-left" className="col-md-12 scrollbox-content">
                                <div id="transfer_scrollbar">
                                    <div className="accordian sidebarNav  scrollbox-content">
                                        <ul className="sidebarNav">
                                            {this.showPropertiesClothes(data)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
                    <ImageRenderComponent style={this.state.style} category={this.state.category}
                        passRefUpward={ref => (this.imageRender = ref)} />
                    {/**END::Hiển hị kế quả khi lựa chọn */}

                    {/**BIGIN::Hiên thị giá tiền và chi tiết thiết kế đã chọ  */}
                    <ActionFabricInfoComponent />
                    {/**END::Hiên thị giá tiền và chi tiết thiết kế đã chọ  */}

                </div>
                {/**END::Phân body */}
            </div>
        );
    }

    showPropertiesClothes = data => {
        let result = null;
        if (data.length > 0) {
            result = data.map((item, index) => {
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
        return result;
    }

    showSubMenuProperties(data) {

        let sub_result = null;
        if (data.length > 0) {
            sub_result = data.map((item, index) => {
                return (
                    <li id="list_unstyled-item" className="list_unstyled-item" key={index} onClick={() => this.selectPropertiesClothes(item.props_name, item.short_key)}>
                        <div className="list_unstyled-link option_title"><i className={`icon-${item.img_icon}`} ></i></div>
                        <div className="option_title title-mobile">{item.displayname}</div>
                    </li>
                )
            });
        }
        return sub_result;
    }

    showPropertiesContent = () => {
        var result = null;
        if (this.state.properties.length > 0) {
            result = this.state.properties.map((item, index) => {
                return (
                    <div className={`col-md-6 col-6 option_trigger ${item.id == this.state.active ? 'active_trigger' : ''}`} key={index} onClick={() => this.optionStyleTrigger(item)} >
                        <i className={`icon-${item.img_icon} large-icon`} ></i>
                        <div className="text-uppercase">{item.value}</div>
                    </div>
                )
            });
        }
        return result;
    }

    selectPropertiesClothes = (name, key) => {
        var result = data.find(x => x.short_key === key).properties;
        var properties_value = result.find(x => x.props_name === name).values;
        this.setState({
            properties: properties_value,
            category: key,
            style: properties_value[0]
        });
    }

    optionStyleTrigger = properties => {
        this.imageRender.setProperties(properties)
        this.setState({
            style: properties,
            active: properties.id
        });

    }
}



export default connect(null, null)(ConfigPage);
