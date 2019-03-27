import React, { Component } from 'react';
import HeaderComponent from '../../components/headerComponent';
import ImageRenderComponent from '../../components/imageRenderComponent';
import ActionFabricInfoComponent from '../../components/actionFabricInfoComponent';
import { getListFabricRequest } from '../../actions/fabric';
import { connect } from 'react-redux';
import { toggleIcon } from '../../demo';
class FabricPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fabric: null
        }
    }
    componentDidMount() { toggleIcon(); }

    componentWillMount() {
        var param = { skip: 0, limit: 50, type: 38 }
        this.props.getListFabric(param);
    }


    showFabricList = fabrics => {
        let result = null;
        if (fabrics.length > 0) {


            result = fabrics.map((fabric, index) => {
                if (fabric.price) {
                    var active = '';
                    fabric.partid === this.state.active ? active = "active_img" : active = '';
                    return (
                        <div id="item-show_part" className={`col-md-4 col-4 scrollbox-content ${active}`} key={index} >
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
        this.setState({
            fabric: fabric,
            active: fabric.partid
        })
    }

    searchFabric = e => {
        this.setState({ [e.target.name]: e.target.value });
        var param = { skip: 0, limit: 50, type: 38, keyword: this.state.keyword }
        this.props.getListFabric(param)
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
                            <input id="btn_search" value={this.state.someState} onChange={this.searchFabric} type="text" className="form-control" name="keyword" placeholder="Tìm kiếm vải...." />
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
                    <ActionFabricInfoComponent fabric={this.state.fabric} />
                    {/**END::Hiên thị giá tiền và chi tiết thiết kế đã chọ  */}

                </div>
                {/**END::Phần body */}

            </div>

        );
    }
}


const mapStateToProps = state => { return { fabrics: state.fabrics } }

const mapDispatchToProps = dispatch => { return { getListFabric: param => { dispatch(getListFabricRequest(param)) } } }

export default connect(mapStateToProps, mapDispatchToProps)(FabricPage);
