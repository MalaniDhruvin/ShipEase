import React, { useState } from 'react';
import '../style/Navbar.css';
import ProductHover from './ProductHover';
import PlateformHover from './PlateformHover';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    return (
        <div className="container container-1">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
                <div className="col-md-3 mb-2 mb-md-0">
                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <img src="https://media.istockphoto.com/id/1362037466/photo/3d-delivery-truck.jpg?s=1024x1024&w=is&k=20&c=KC5HB_JVEYqn4i_HmgfbmrQIYJs1aDeXABXRkFi_e8Q=" width={95} alt="img" />
                    </Link>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li
                        className="nav-item"
                    >
                        <Link to="/" className="nav-link px-2 link-secondary">Home</Link>
                    </li>
                    <li><Link to="/pricing" className="nav-link px-2 link-secondary">Pricing</Link></li>
                    <li className="nav-item"
                    >
                        <Link to="/about" className="nav-link px-2 link-secondary">About Us</Link></li>

                    <li><Link to="/trackOrder" className="nav-link px-2 link-secondary">Track Order</Link></li>
                </ul>

                <div className="col-md-3 text-end">
                    <Link to='/login'><button type="button" className="btn btn-outline-primary me-2">Login</button></Link>
                    <Link to='/register'><button type="button" className="btn btn-primary">Sign-up</button></Link>
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
