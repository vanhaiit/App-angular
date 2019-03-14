import React, { Component } from 'react';


class HeaderComponent extends Component {

    onChangeLng = (lng) => {
        this.props.onChangeLng(lng)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" style={{ display: 'inline-flex !important' }} id="navbarTogglerDemo03 " >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 " style={{ margin: '0 auto' }}>
                        <li className="nav-item" style={{ borderBottom: '2px solid red', fontWeight: 'bold' }}>
                            <a className="nav-link" href="#">VẢI<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <i class="fa fa-chevron-right" aria-hidden="true"></i> <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">THIẾT KẾ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <i class="fa fa-chevron-right" aria-hidden="true"></i> <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#" tabIndex={-1} aria-disabled="true">MỞ RỘNG</a>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}

export default HeaderComponent;
