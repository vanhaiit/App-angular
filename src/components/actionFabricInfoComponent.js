import React, { Component } from 'react';

class ActionFabricInfoComponent extends Component {

    render() {
        var fabric = this.props.fabric ? this.props.fabric : fabric;
        if (!fabric) {
            fabric = { images: ["http://www.grondals.com/wp-content/themes/Anchor/images/bolg_noimage.jpg"] }
        }
        return (
            <div className="col-md-3 " id="dunnio_show_detail-result">
                <div className="card-body">
                    <h2 className="card-title pricing-card-title text-center text_bold" >CUSTOM</h2>
                    <h2 className="card-title pricing-card-title text-center text_bold">SUITS</h2>
                    <h5 className="font-weight-light text-center text_bold">{fabric ? fabric.partid : ""}</h5>
                    <h4 className="card-title pricing-card-title text-center text_bold">{fabric ? fabric.price : ""}</h4>
                    <button type="button" className="btn btn-block btn-danger" style={{ width: '70%', margin: '0 auto' }}>THÊM VÀO GIỎ HÀNG</button>
                    <br></br>
                    <p className="font-weight-light text-center">Nhận hàng sau 15 ngày bắt đầu từ ngày đặt hàng</p>
                    <br></br>
                    <img id='img_detail-part' src={fabric.images[0] ? fabric.images[0] : "http://www.grondals.com/wp-content/themes/Anchor/images/bolg_noimage.jpg"} className="rounded" alt="Cinque Terre" width={304} height={236} style={{ width: '100%' }} />
                    <br></br>
                    <h4 className="card-title pricing-card-title mt-10 text_bold" style={{ marginTop: '10px' }}>{fabric ? fabric.partid : ""}</h4>
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
