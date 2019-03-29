import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {

    render() {
        return (
            <div className="dunnio_navbar">
                <div className="dunnio_navbar-collapse col-md-6 text-center">
                    <ul className="dunnio_nav" style={{ margin: '0 auto' }}>
                        <li className="dunnio_nav-item active-navbar_link">
                            <Link to='/fabric/v' className="dunnio_nav-link text-uppercase">vải<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="dunnio_nav-item">
                            <a className="dunnio_nav-link" href="#"> <i className="fa fa-chevron-right" aria-hidden="true"></i> <span className="sr-only"></span></a>
                        </li>
                        <li className="dunnio_nav-item">
                            <Link to='/config/v' className="dunnio_nav-link text-uppercase">thiết kế<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="dunnio_nav-item">
                            <a className="dunnio_nav-link" href="#"> <i className="fa fa-chevron-right" aria-hidden="true"></i> <span className="sr-only"></span></a>
                        </li>
                        <li className="dunnio_nav-item">
                            <Link to='/extra/v' className="dunnio_nav-link text-uppercase">mở rộng<span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
