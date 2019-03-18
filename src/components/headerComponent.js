import React, { Component } from 'react';


class HeaderComponent extends Component {


    render() {
        return (
            <div className="dunnio_navbar">
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
        );
    }
}

export default HeaderComponent;
