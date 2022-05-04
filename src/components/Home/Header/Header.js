import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary sticky-top" >
                <div className="container">
                    <Link className="navbar-brand" to="/">Amar Cycle</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="items">Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="manageitem">ManageItem</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="additem">AddItem</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="myitem">My Item</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <Link className="nav-link" to="login">Login</Link>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;