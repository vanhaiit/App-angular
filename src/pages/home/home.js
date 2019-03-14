import React, { Component } from 'react';

class HomePage extends Component {

    render() {
        var parts = [
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },
            { id: 'MN64564', price: '2 000 000đ' },]

        return (
            <div>

                {/*BIGIN: hiển thị header */}
                <div className="row dunnio_navbar">
                    <div className="dunnio_navbar-collapse col-md-6 text-center">
                        <ul className="dunnio_nav" style={{ margin: '0 auto' }}>
                            <li className="dunnio_nav-item active-navbar_link">
                                <a className="dunnio_nav-link" href="#">VẢI<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="dunnio_nav-item">
                                <a className="dunnio_nav-link" href="#"> <i className="fa fa-chevron-right" aria-hidden="true"></i> <span className="sr-only"></span></a>
                            </li>
                            <li className="dunnio_nav-item">
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
                {/*END: hiển thị header */}

                {/**BIGIN::Phần body */}
                <div className="row container-fluid">

                    {/**BIGIN::Hiển hị menu bên phải */}
                    <div className="col-md-4" id="sidebarLeft">
                        <div className="title_sidebar_mobile-left">
                            <label className="subtitle_sidebar_mobile">CHỌN VẢI </label>
                            <span className="btn_sidebar-hide"><i className="fa fa-arrow-left icon_back" aria-hidden="true"></i></span>
                        </div>
                        <div className="input-group">
                            <input id="btn_search" type="text" className="form-control" name="search" placeholder="Tìm kiếm vải...." />
                        </div>
                        <br></br>
                        <div className="row" id="scrollbar_custom">
                            {this.showPartsList(parts)}
                        </div>
                    </div>
                    {/**END::Hiển hị menu bên phải */}

                    {/**BIGIN::Hiển hị kế quả khi lựa chọn */}
                    <div className="col-md-5" id="dunnio_show-result">
                        <span className="btn_sidebar-show" ><i className="fa fa-bars icon_back" aria-hidden="true"></i></span>
                        <img src='https://fv2-3.failiem.lv/thumb_show.php?i=88z87shy&view' className="rounded" alt="Cinque Terre" width={304} height={236} style={{ width: '100%', height: '100%' }} />
                    </div>
                    {/**END::Hiển hị kế quả khi lựa chọn */}

                    {/**BIGIN::Hiên thị giá tiền và chi tiết thiết kế đã chọ  */}
                    <div className="col-md-3 " id="dunnio_show_detail-result">
                        <div className="card-body">
                            <h2 className="card-title pricing-card-title text-center text_bold" >CUSTOM</h2>
                            <h2 className="card-title pricing-card-title text-center text_bold">SUITS</h2>
                            <h5 className="font-weight-light text-center text_bold">DKS54544</h5>
                            <h4 className="card-title pricing-card-title text-center text_bold">2 000 000 đ</h4>
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
                {/**END::Phần body */}

            </div>

        );
    }

    showPartsList = parts => {
        let result = null;
        if (parts.length > 0) {
            result = parts.map((part, index) => {
                return (
                    <div id="item-show_part" className="col-md-4 col-4" key={index} onClick={() => this.selectPart(part)}>
                        <img src="http://img.vjcamera.com/picture/access/2017/0414/5.jpg" className="rounded zoom" alt="Cinque Terre" style={{ width: '100%' }} />
                        <a>{part.id}</a>
                        <label style={{ color: 'red' }}>{part.price}</label>
                    </div>
                )
            })
        }
        return result;
    }

    selectPart = part => {
        alert(part.id)
    }
}

export default HomePage;
