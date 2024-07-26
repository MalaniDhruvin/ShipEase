import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { AuthContext } from '../store/AuthContext';

const Pricing = () => {
  const {isLoggedIn} =useContext(AuthContext)
  return (<>
    <Navbar></Navbar>
    <div className="container py-3">
      <header>

        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal text-body-emphasis" style={{
            background: 'transparent linear-gradient(99deg, #ffc465, #5338ff) 0 0 no-repeat padding-box',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            'background-clip': 'text',
            color: 'transparent',
            fontWeight: 300
          }}>Choose a plan</h1>
          <h1 style={{ fontSize: '60px', color: '#0B0757', fontWeight: '700' }}>that works best for you</h1>
        </div>
      </header>

      <main className='price-container'>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col price-card">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Lite</h4>
              </div>
              <div className="card-body">
                <h4 className="card-title pricing-card-title">Rs. 26/500gms</h4>
                <p style={{ fontSize: '16px', fontWeight: 500, color: '#333333' }}>A free and simplified plan best for social, small and medium e-commerce sellers</p>
                {isLoggedIn?<button type="button" className="w-100 btn btn-lg btn-outline-primary">Select to Shipping</button>:<button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>}
                <ul style={{ textAlign: 'left', fontWeight: 400 }} className="list-unstyled mt-3 mb-4">
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />1 Ecommerce Channel Integration</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Chat, Call &amp; Email Support</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Automated Channel Order Sync</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Domestic and International Shipping</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Priority Support</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Dedicated Account Manager</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Professional</h4>
              </div>
              <div className="card-body">
                <h4 className="card-title pricing-card-title">Rs. 20/500gms</h4>
                <p style={{ fontSize: '16px', fontWeight: 500, color: '#333333' }}>Dynamic plans for sellers who sell on multiple marketplaces and websites</p>

                <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                <ul style={{ textAlign: 'left', fontWeight: 400 }} className="list-unstyled mt-3 mb-4">
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Multiple Ecommerce Channel Integrations</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Priority Support</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Automated Channel Order Sync</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Domestic &amp; International Shipping</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Channel Price &amp; Inventory Sync</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Free NDR Call Center Setup</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h4 className="card-title pricing-card-title">Shipping solution</h4>
                <p style={{ fontSize: '16px', fontWeight: 500, color: '#333333' }}>Get an exclusive plan tailored to meet your business needs</p>
                <Link to='/contactUs'><button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button></Link>
                <ul style={{ textAlign: 'left', fontWeight: 400 }} className="list-unstyled mt-3 mb-4">
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Customized Integrations</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Dedicated Account Manager</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Automated Channel Order Sync</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Domestic &amp; International Shipping</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Multi Channel Price &amp; Inventory Sync</li>
                  <li><FaCheck style={{ color: '#5EC93C', marginRight: '6px' }} />Free NDR Call Center Setup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer></Footer>
  </>
  )
}

export default Pricing;