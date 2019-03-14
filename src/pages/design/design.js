import React, { Component } from 'react';

class DesignPage extends Component {

    render() {
        return (
            <div>
                {/**BIGIN::Phầng header */}
                <div className="row dunnio_navbar">
                    <div className="dunnio_navbar-collapse col-md-6 text-center">
                        <ul className="dunnio_nav" style={{ margin: '0 auto' }}>
                            <li className="dunnio_nav-item">
                                <a className="dunnio_nav-link" href="#">VẢI<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="dunnio_nav-item">
                                <a className="dunnio_nav-link" href="#"> <i className="fa fa-chevron-right" aria-hidden="true"></i> <span className="sr-only"></span></a>
                            </li>
                            <li className="dunnio_nav-item active-navbar_link" >
                                <a className="dunnio_nav-link" href="#">THIẾT KẾ</a>
                            </li>
                            <li className="dunnio_nav-item">
                                <a className="dunnio_nav-link" href="#"> <i className="fa fa-chevron-right" aria-hidden="true"></i> <span className="sr-only"></span></a>
                            </li>
                            <li className="dunnio_nav-item">
                                <a className="dunnio_nav-link " href="#" tabIndex={-1} aria-disabled="true">MỞ RỘNG</a>
                            </li>
                        </ul>

                    </div>
                </div>
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
                            <div id="sidebar_menu-left" className="col-md-12">
                                <div className="accordian sidebarNav">
                                    <ul className="sidebarNav">
                                        <li id="sidebar_accordian_list_1" >
                                            <div className="sidebar_title_accordian" id="title_1">
                                                <h3 id="title-menu"> <span className="arrow" /> ÁO VEST </h3>
                                            </div>
                                            <ul className="list-unstyled mt-2 mb-2 ">
                                                <li id="list_unstyled-item" className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-v-8" ></i></div>
                                                    <div className="option_title title-mobile">KIỂU DÁNG  </div>
                                                </li>
                                                <li className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-v-9" ></i></div>
                                                    <div className="option_title title-mobile">BÓP EO  </div>
                                                </li>
                                                <li className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-v-11" ></i></div>
                                                    <div className="option_title title-mobile">VE ÁO  </div>
                                                </li>
                                                <li className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-v-17" ></i></div>
                                                    <div className="option_title title-mobile">TÚI ÁO  </div>
                                                </li>
                                                <li className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-v-23" ></i></div>
                                                    <div className="option_title title-mobile">TAY ÁO  </div>
                                                </li>
                                                <li className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-v-29" ></i></div>
                                                    <div className="option_title title-mobile">SẺ ÁO  </div>
                                                </li>
                                                <li className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-v-31" ></i></div>
                                                    <div className="option_title title-mobile">TÚI NGỰC  </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li id="sidebar_accordian_list_2">
                                            <div className="sidebar_title_accordian" id="title_2">
                                                <h3 id="title-menu">  <span className="arrow" /> QUẦN ÂU </h3>
                                            </div>

                                            <ul className="list-unstyled mt-2 mb-2 ">
                                                <li className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-q-2" ></i></div>
                                                    <div className="option_title title-mobile">KIỂU DÁNG  </div>
                                                </li>
                                                <li className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-q-3" ></i></div>
                                                    <div className="option_title title-mobile">BÓP EO  </div>
                                                </li>
                                                <li className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-v-11" ></i></div>
                                                    <div className="option_title title-mobile">VE ÁO  </div>
                                                </li>
                                                <li className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-v-17" ></i></div>
                                                    <div className="option_title title-mobile">TÚI ÁO  </div>
                                                </li>
                                                <li className="list_unstyled-item">
                                                    <div className="list_unstyled-link option_title"><i className="icon-v-23" ></i></div>
                                                    <div className="option_title title-mobile">TAY ÁO  </div>
                                                </li>

                                            </ul>
                                        </li>
                                        <li id="sidebar_accordian_list_3">
                                            <div className="sidebar_title_accordian" id="title_3">
                                                <h3 id="title-menu"> <span className="arrow" /> GILE </h3>
                                            </div>
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
                                        <i className="icon-v-8 large-icon" ></i>
                                        <div className="text-uppercase"> Single-breasted</div>
                                    </div>
                                    <div className="col-md-6 col-6 option_trigger" >
                                        <i className="icon-v-8 large-icon" ></i>
                                        <div className="text-uppercase"> Single-breasted</div>
                                    </div>
                                    <div className="col-md-6 col-6 option_trigger" >
                                        <i className="icon-v-8 large-icon" ></i>
                                        <div className="text-uppercase"> Single-breasted</div>
                                    </div>
                                    <div className="col-md-6 col-6 option_trigger" >
                                        <i className="icon-v-8 large-icon" ></i>
                                        <div className="text-uppercase"> Single-breasted</div>
                                    </div>
                                    <div className="col-md-6 col-6 option_trigger" >
                                        <i className="icon-v-8 large-icon" ></i>
                                        <div className="text-uppercase"> Single-breasted</div>
                                    </div>
                                    <div className="col-md-6 col-6 option_trigger" >
                                        <i className="icon-v-8 large-icon" ></i>
                                        <div className="text-uppercase"> Single-breasted</div>
                                    </div>
                                    <div className="col-md-6 col-6 option_trigger" >
                                        <i className="icon-v-8 large-icon" ></i>
                                        <div className="text-uppercase"> Single-breasted</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/**END::Phần menu bên trái */}

                    {/**BIGIN::Hiển hị kế quả khi lựa chọn */}
                    <div className="col-md-5" id="dunnio_show-result">
                        <span className="btn_sidebar-show" ><i className="fa fa-bars icon_back" aria-hidden="true"></i></span>
                        <img src='https://fv2-3.failiem.lv/thumb_show.php?i=88z87shy&view' className="rounded" alt="Cinque Terre" width={304} height={236} style={{ width: '100%', height: '100%' }} />
                    </div>
                    {/**END::Hiển hị kế quả khi lựa chọn */}

                    {/**BIGIN::Hiên thị giá tiền và chi tiết thiết kế đã chọ  */}
                    <div className="col-md-3" id="dunnio_show_detail-result">
                        <div className="card-body">
                            <h2 className="card-title pricing-card-title text-center text_bold">CUSTOM</h2>
                            <h2 className="card-title pricing-card-title text-center text_bold">SUITS</h2>
                            <h5 className="font-weight-light text-center text_bold">DKS54544</h5>
                            <h4 className="card-title pricing-card-title text-cente text_boldr" >2 000 000 đ</h4>
                            <button type="button" className="btn btn-block btn-danger" style={{ width: '70%', margin: '0 auto' }}>THÊM VÀO GIỎ HÀNG</button>
                            <br></br>
                            <p className="font-weight-light text-center">Nhận hàng sau 15 ngày bắt đầu từ ngày đặt hàng</p>
                            <br></br>
                            <img id='img_detail-part' src="http://img.vjcamera.com/picture/access/2017/0414/7_3.jpg" className="rounded" alt="Cinque Terre" width={304} height={236} style={{ width: '100%' }} />
                            <br></br>
                            <h4 className="card-title pricing-card-title mt-10 text_bold" style={{ marginTop: '10px' }}>DK125454</h4>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Material : 80% wool & 20% Terylene</li>
                                <li>10 GB of storage</li>
                                <li>Priority email support</li>
                            </ul>
                        </div>
                    </div>
                    {/**END::Hiên thị giá tiền và chi tiết thiết kế đã chọ  */}

                </div>
                {/**END::Phân body */}
            </div>
        );
    }

}

export default DesignPage;
