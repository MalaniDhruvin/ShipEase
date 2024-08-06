import React, { useEffect, useState, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/OrderTracking.css'
import { Getshipment } from '../Global/apiCall';
import Tracking from './Tracking';
import { Link } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';


const OrderTracking = () => {
  const [shipment, setShipment] = useState([]);
  const [tracking, setTracking] = useState(null);
  const [ship, setShip] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      if (isLoggedIn) {
        try {
          const response = await Getshipment();
          console.log(response.data.data);
          setShipment(response.data.data);
        } catch (error) {
          console.error('Error fetching shipment data:', error);
        }
      }
    };

    fetchData();
  }, [isLoggedIn]);

  useEffect(() => {
  }, [shipment]);

  const handleShip = () => {
    setShip(!ship);
  }

  const handleTracking = (index) => {
    setTracking(index === tracking ? null : index);
  }

  return (
    <>
      <Navbar />
      <div className="tracking-container">
        <div className="flex-shrink-0 p-3" style={{ width: '280px',height:'87vh', boxShadow: '0px 6px 10px 5px rgba(0, 0, 0, 0.185)' }}>
          <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
            <svg className="bi pe-none me-2" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-5 fw-semibold">Overview</span>
          </a>
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button
                onClick={handleShip}
                style={{ marginTop: '-19px' }}
                className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="false"
              >
                Shipments {Array.isArray(shipment) ? (
                  <p
                    style={{ marginTop: '19px', marginLeft: '5px', borderRadius: '50px', padding: '1px 8px', backgroundColor: '#6140B4', color: 'white', fontSize: '12px' }}
                  >
                    {shipment.length}
                  </p>
                ) : ""}
              </button>
            </li>
            <li style={{ marginLeft: '12px', marginTop: '-10px'}}>
            {ship && (
                Array.isArray(shipment) && shipment.length > 0 ? (
                  shipment.map((item, index) => (
                    <div  key={index}>
                      <p style={{ cursor: 'pointer',border:'0px solid black' ,marginTop:'-10px' }} onClick={() => handleTracking(index)}>
                        shipment {index + 1}
                      </p>
                    </div>
                  ))
                ) : ""
              )}
            </li>
          </ul>
        </div>
        {Array.isArray(shipment) && shipment.length == 0 ? <div style={{width:'10000%', border: '0px solid black', marginRight: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ color: "#0B0757" }}>There is no Shipping Details</h1>
          <h4 style={{ color: '#636478', fontWeight: '400' }}>Start Shipping Now</h4>
          <Link to='/shipping'><button className='tracking-btn'>Ship now</button></Link>
        </div> :tracking===null && <div style={{width:'10000%', border: '0px solid black', marginRight: '290px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '250px' }}>
          <h1 style={{ fontSize: '28px', color: '#0B0757' }}>Your details have been successfully retrieved. Sidebar you will find the latest status and information for your order:</h1>
        </div>} 
        <div className='testing'>
        {ship && (
                Array.isArray(shipment) && shipment.length > 0 ? (
                  shipment.map((item, index) => (
                    <div  key={index}>
                      {tracking === index && <Tracking Steps={index - 1} data={item} />}
                    </div>
                  ))
                ) : ""
              )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderTracking;
