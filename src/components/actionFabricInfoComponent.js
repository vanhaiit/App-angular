import React, { Component } from 'react';


class ActionFabricInfoComponent extends Component {


    render() {
        return (
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

        );
    }
}

export default ActionFabricInfoComponent;
