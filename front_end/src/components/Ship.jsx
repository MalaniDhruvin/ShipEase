import { useState,useRef } from 'react';
import Dropdown from './Dropdown'
import '../style/Ship.css'
import Navbar from './Navbar';
import Footer from './Footer';

const Ship = () => {
  const [visible, setVisible] = useState(false);
  const [weight, setWeight] = useState({ weight: "", length: "", width: "", height: "" })
  const divRef = useRef(null);
  const handleship = () => {
    setVisible(true)
    setTimeout(() => {
      if (divRef.current) {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
  const handleweight = (i) => {
    setWeight(prevWeight => ({ ...prevWeight, [i.target.name]: i.target.value }));
    // console.log(weight)
    console.log({ ...weight, [i.target.name]: i.target.value });
  }
  return (<>
  <Navbar></Navbar>
    <div className="ship-container">
      <div className="ship-title">
        <h1>
          SHIP NOW
        </h1>
      </div>
      <div className="ship-des">
        <p>
          Packages and pallets, big and small, we can offer you instant delivery options for your shipping needs, both domestically and internationally. Fill out your shipment details below and we’ll provide services tailored to your specific requirements. Simply pick the option that suits you best, and continue to book.
        </p>
      </div>
      <div className="ship-step-container">
        <div className="ship-step">
          <h1>1.</h1>
          <h2>ENTER ORIGIN AND DESTINATION</h2>
        </div>
        <div className="ship-step">
          <h1>2.</h1>
          <h2>DESCRIBE YOUR SHIPMENT</h2>
        </div>
        <div className="ship-step">
          <h1>3.</h1>
          <h2>GET DELIVERY PRICES</h2>
        </div>
        <div className="ship-step">
          <h1>4.</h1>
          <h2>PROCEED WITH ONLINE BOOKING</h2>
        </div>
      </div>
      <div className="ship-form-container">
        <p style={{ 'marginTop': '20px',fontWeight:500 }}>From</p>
        <div className="form-content-container">
          <div className="form-content" >
            <Dropdown></Dropdown>
          </div>
          <div className='form-city'>
            <div>
              <p>City</p>
              <p>(optional)</p>
            </div>
            <input type="text" />
          </div>
          <div className='form-city'>
            <div>
              <p>Pincode</p>
              <p>(optional)</p>
            </div>
            <input type="text" />
          </div>
        </div>

        {/* //second part */}
        <p style={{ 'marginTop': '45px',fontWeight:500 }}>To</p>
        <div className="form-content-container">
          <div className="form-content" >
            <Dropdown></Dropdown>
          </div>
          <div className='form-city'>
            <div>
              <p>City</p>
              <p>(optional)</p>
            </div>
            <input type="text" />
          </div>
          <div className='form-city'>
            <div>
              <p>Pincode</p>
              <p>(optional)</p>
            </div>
            <input type="text" required />
          </div>
        </div>

        <div className="form-button">
          <button role="button"  class="button-name" onClick={handleship}>Describe your shipment</button>
        </div>

      </div>
      {visible && (<div className="shipment-container" ref={divRef}>
        <div className="ship-head">
          <h1>Shipment</h1>
        </div>
        <div className="shipment-form">
          <div className="shipment-content">
            <div className='form-city' style={{ height: '65px', borderRadius: '5px', marginRight: '20px' }}>
              <div>
                <p>Weight</p>
                <p>(kg)</p>
              </div>
              <input type="text" name='weight' onChange={handleweight} required />
            </div>
            <img src="package_316671.png" width={130} alt="" />
            <div className='form-city' style={{ height: '65px', borderRadius: '5px', marginLeft: '20px' }}>
              <div>
                <p>Length</p>
                <p>(cm)</p>
              </div>
              <input type="text" name='lenght' onChange={handleweight} />
            </div>
            <img src="cross_222301.png" width={15} height={15} style={{ margin: '0px 3px' }} alt="" />
            <div className='form-city' style={{ height: '65px', borderRadius: '5px' }}>
              <div>
                <p>Width</p>
                <p>(cm)</p>
              </div>
              <input type="text" name='width' onChange={handleweight} />
            </div>
            <img src="cross_222301.png" width={15} height={15} style={{ margin: '0px 3px' }} alt="" />
            <div className='form-city' style={{ height: '65px', borderRadius: '5px' }}>
              <div>
                <p>Height</p>
                <p>(cm)</p>
              </div>
              <input type="text" required name='height' onChange={handleweight} />
            </div>
          </div>
          <h1 style={{ fontSize: '1.5vw', marginTop: '19px' }}>Total shipment Weight: {weight.weight != "" ? weight.weight : 0}kg</h1>
        </div>
        <button>Ship Now</button>
      </div>)}

    </div>
    <Footer></Footer>
    </>
  );
};

export default Ship;