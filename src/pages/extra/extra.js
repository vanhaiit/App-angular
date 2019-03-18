import React, { Component } from 'react';
import HeaderComponent from '../../components/headerComponent';
import ImageRenderComponent from '../../components/imageRenderComponent';
import ActionFabricInfoComponent from '../../components/actionFabricInfoComponent';

class ExtraPage extends Component {

    render() {
        return (
            <div>

                {/*BIGIN: hiển thị header */}
                <HeaderComponent />
                {/*END: hiển thị header */}

                {/**BIGIN::Phần body */}
                <div className="row container-fluid" >

                    {/**BIGIN::Hiển hị menu bên phải */}
                    <div className="col-md-4" id="sidebarLeft">
                        <div className="title_sidebar_mobile-left">
                            <label className="subtitle_sidebar_mobile">MỞ RỘNG</label>
                            <span className="btn_sidebar-hide"><i className="fa fa-arrow-left icon_back" aria-hidden="true" ></i></span>
                        </div>
                        <div className="row" id="scrollbar_custom" >
                            <div id="sidebar_menu-left" className="col-md-12 scrollbox-content">
                                <div className="accordian sidebarNav">
                                    <ul className="list-unstyled mt-2 mb-2 ">
                                        <li id="list_unstyled-item" className="list_unstyled-item">
                                            <div className="list_unstyled-link option_title"><i className="icon-v-36" ></i></div>
                                            <div className="option_title title-mobile">LÓT ÁO </div>
                                        </li>
                                        <li className="list_unstyled-item">
                                            <div className="list_unstyled-link option_title"><i className="icon-v-37" ></i></div>
                                            <div className="option_title title-mobile">THÊU TÊN </div>
                                        </li>
                                        <li className="list_unstyled-item">
                                            <div className="list_unstyled-link option_title"><i className="icon-v-40" ></i></div>
                                            <div className="option_title title-mobile">VIỀN TÚI </div>
                                        </li>
                                        <li className="list_unstyled-item">
                                            <div className="list_unstyled-link option_title"><i className="icon-v-43" ></i></div>
                                            <div className="option_title title-mobile">KHUY</div>
                                        </li>
                                        <li className="list_unstyled-item">
                                            <div className="list_unstyled-link option_title"><i className="icon-v-42" ></i></div>
                                            <div className="option_title title-mobile">KHUYẾT</div>
                                        </li>
                                        <li className="list_unstyled-item">
                                            <div className="list_unstyled-link option_title"><i className="icon-v-44" ></i></div>
                                            <div className="option_title title-mobile">LÓT CỔ</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="sidebar_menu_content-left" className="col-md-9">
                                <div className="back-sub-menu">
                                    <p style={{ width: "90%" }}>TÙY CHỌN</p>
                                    <i className="fa fa-angle-left icon_back" aria-hidden="true" ></i>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-6 option_trigger active_trigger" >
                                        <i className="icon-v-34 large-icon" ></i>
                                        <div className="text-uppercase"> Single-breasted</div>
                                    </div>
                                    <div className="col-md-6 col-6 option_trigger" >
                                        <i className="icon-v-35 large-icon" ></i>
                                        <div className="text-uppercase"> Single-breasted</div>
                                    </div>
                                    <div className="col-md-6 col-6 option_trigger" >
                                        <i className="icon-v-33 large-icon" ></i>
                                        <div className="text-uppercase"> Single-breasted</div>
                                    </div>
                                    <div className="col-md-6 col-6 option_trigger" >
                                        <i className="icon-v-36 large-icon" ></i>
                                        <div className="text-uppercase"> Single-breasted</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    {/**END::Hiển hị menu bên phải */}

                    {/**BIGIN::Hiển hị kế quả khi lựa chọn */}
                    <ImageRenderComponent />
                    {/**END::Hiển hị kế quả khi lựa chọn */}

                    {/**BIGIN::Hiên thị giá tiền và chi tiết thiết kế đã chọ  */}
                    <ActionFabricInfoComponent />
                    {/**END::Hiên thị giá tiền và chi tiết thiết kế đã chọ  */}

                </div>
                {/**END::Phần body */}
            </div>
        );
    }

}

export default ExtraPage;
