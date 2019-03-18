import React, { Component } from 'react';
import HeaderComponent from '../../components/headerComponent';
import ImageRenderComponent from '../../components/imageRenderComponent';
import ActionFabricInfoComponent from '../../components/actionFabricInfoComponent';

class FabricPage extends Component {

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
                <HeaderComponent />
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

    showPartsList = parts => {
        let result = null;
        if (parts.length > 0) {
            result = parts.map((part, index) => {
                return (
                    <div id="item-show_part" className="col-md-4 col-4" key={index} onClick={() => this.selectPart(part)}>
                        <img src="https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/482_huge_c300.jpg" className="rounded zoom" alt="Cinque Terre" style={{ width: '100%' }} />
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

export default FabricPage;
