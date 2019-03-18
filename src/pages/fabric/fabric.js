import React, { Component } from 'react';
import HeaderComponent from '../../components/headerComponent';
import ImageRenderComponent from '../../components/imageRenderComponent';
import ActionFabricInfoComponent from '../../components/actionFabricInfoComponent';
import { actFetchFabricRequest } from '../../actions/fabric';
import { connect } from 'react-redux';
class FabricPage extends Component {

    componentDidMount() {
        this.props.fetchAllFabrics();
    }
    render() {
        var { fabrics } = this.props;
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
                        <div className="row " id="scrollbar_custom">
                            {this.showFabricList(fabrics)}
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

    showFabricList = fabrics => {
        let result = null;
        if (fabrics.length > 0) {
            result = fabrics.map((fabric, index) => {
                if (fabric.price) {
                    return (
                        <div id="item-show_part" className="col-md-4 col-4 scrollbox-content" key={index} >
                            <img src={fabric.images.length > 0 ? fabric.images[0] : 'http://www.grondals.com/wp-content/themes/Anchor/images/bolg_noimage.jpg'} onClick={() => this.selectFabric(fabric)} className="rounded zoom" alt="Cinque Terre" style={{ width: '100%' }} />
                            <a href="#" className="thumb_preview"><i className="fa fa-search"></i></a>
                            <a>{fabric.name}</a><br></br>
                            <label style={{ color: 'red' }}>{fabric.price}</label>
                        </div>
                    )
                }
            })
        }
        return result;
    }

    selectFabric = fabric => {
        alert(fabric.name)
    }
}


const mapStateToProps = state => {
    return {
        fabrics: state.fabrics
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllFabrics: () => {
            dispatch(actFetchFabricRequest())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FabricPage);
