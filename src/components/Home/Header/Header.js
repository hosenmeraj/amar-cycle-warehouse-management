import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success p-2 text-white bg-opacity-25"  >
                <div className="container">
                    <Link className="navbar-brand" to="/"><span className='text-danger fw-bold fs-1'>Amar Cycle</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="inventory">Inventory</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="blog">Blog</Link>
                            </li>

                        </ul>
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            {
                                user &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="manageinventory">ManageInventory</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link" to="manageitem">ManageItem</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link" to="additem">AddItem</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="myitem">My Item</Link>
                                    </li>
                                </>
                            }
                        </ul>
                        {user ?
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Logout</button>
                            :
                            <>
                                <span className="navbar-text">
                                    <Link className="nav-link" to="login">Login</Link>
                                </span>
                            </>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;