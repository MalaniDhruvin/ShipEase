import React, { useState, useContext } from 'react';
import '../style/Navbar.css';
import ProductHover from './ProductHover';
import PlateformHover from './PlateformHover';
import { Link } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';
import UserDetails from './UserDetails';
// import { UserProfile } from '../Global/apiCall';


export const Navbar = () => {
    const { isLoggedIn, } = useContext(AuthContext);
    const [dropDown, setdropDown] = useState(false)
    const handleDetails = async () => {
        setdropDown(!dropDown);
    }

    return (
        <div className=" container-1">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                <div className="col-md-3 mb-2 mb-md-0 ">
                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none logo">
                        <img src="log.png" width={35} alt="" />
                        <h1 style={{ fontWeight: 400, fontSize: '2vw' }}>ShipEase</h1>
                    </Link>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li
                        className="nav-item"
                    >
                        <Link to="/" className="nav-link px-2 link-secondary">Home</Link>
                    </li>
                    <li><Link to="/pricing" className="nav-link px-2 link-secondary">Pricing</Link></li>
                    <li><Link to="/trackOrder" className="nav-link px-2 link-secondary">Track Order</Link></li>
                    <li className="nav-item"
                    >
                        <Link to="/contactUs" className="nav-link px-2 link-secondary">Contact Us</Link></li>
                </ul>
                <div className="col-md-3 text-end">
                    {isLoggedIn ? (
                        <>
                            <img src="user.jpg" width={55} className='profile' onClick={handleDetails} alt="" />
                            {dropDown && (
                                <>
                                    <UserDetails></UserDetails>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <Link to='/login'><button type="button" className="btn btn-outline-primary me-2">Login</button></Link>
                            <Link to='/register'><button type="button" className="btn btn-primary">Sign-up</button></Link>
                        </>
                    )}
                </div>

            </header>
            {/* {isDropdownVisible && (
                <ProductHover handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
            )}
            {isdropdownVisible && (
                <PlateformHover handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
            )} */}
        </div>

    );
}

export default Navbar;
