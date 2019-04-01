import React, { Component } from 'react';

class ActionFabricInfoComponent extends Component {

    constructor(props) {
        super(props); this.state = {
            name: null
        }
    }
    componentDidMount() {
        var { pathname } = window.location;
        if (pathname) {
            switch (pathname.split("/")[2]) {
                case 'v':
                    this.setState({ name: "suits" })
                    break;
                case 's':
                    this.setState({ name: "shirt" })
                    break;
                case 'm':
                    this.setState({ name: "coat" })
                    break;
            }
        }
    }
    render() {
        var fabric = this.props.fabric ? this.props.fabric : fabric;
        if (!fabric) {
            fabric = { images: ["http://www.grondals.com/wp-content/themes/Anchor/images/bolg_noimage.jpg"] }
        }

        return (
            <div className="col-md-3 " id="dunnio_show_detail-result">
                <div className="card-body">
                    <h2 className="card-title pricing-card-title text-center text_bold text-uppercase" >CUSTOM {this.state.name}</h2>
                    <h5 className="font-weight-light text-center text_bold">{fabric.partid ? fabric.partid : 'NONE'}</h5>
                    <h4 className="card-title pricing-card-title text-center text_bold">{fabric.price ? fabric.price : "0"}đ</h4>
                    <button type="button" className="btn btn-block btn-danger" style={{ width: '70%', margin: '0 auto' }}>THÊM VÀO GIỎ HÀNG</button>
                    <p className="font-weight-light text-center">Nhận hàng sau 15 ngày bắt đầu từ ngày đặt hàng</p>
                    <img id='img_detail-part' src={fabric.images[0] ? fabric.images[0] : "http://www.grondals.com/wp-content/themes/Anchor/images/bolg_noimage.jpg"} className="rounded" alt="Cinque Terre" width={304} height={236} style={{ width: '100%' }} />
                    <h4 className="card-title pricing-card-title mt-10 text_bold" style={{ marginTop: '10px' }}>{fabric.partid ? fabric.partid : "NONE"}</h4>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>Material : 80% wool & 20% Terylene</li>
                        <li>10 GB of storage</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ActionFabricInfoComponent;
