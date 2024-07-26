import { useState, useRef } from 'react';
import Dropdown from './Dropdown'
import '../style/Ship.css'
import Navbar from './Navbar';
import Footer from './Footer';
import { BookShipment } from '../Global/apiCall';

const Ship = () => {
  const [visible, setVisible] = useState(false);
  const [weight, setWeight] = useState({ origin: { country: "", city: "", streetAddress: "", postalCode: "", state: "" }, destination: { country: "", city1: "", streetAddress1: "", postalCode1: "", state1: "" }, weight: "" })
  const divRef = useRef(null);
  const handleship = () => {
    setVisible(true)
    setTimeout(() => {
      if (divRef.current) {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
  const handleweight = (e) => {
    const { name, value } = e.target;
    if (name in weight.origin) {
      setWeight(prevState => ({
        ...prevState,
        origin: {
          ...prevState.origin,
          [name]: value
        }
      }));
    }
    else if (name in weight.destination) {
      setWeight(prevState => ({
        ...prevState,
        destination: {
          ...prevState.destination,
          [name]: value
        }
      }));
    }

    else {
      setWeight(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };


  const handleSelectCountry = (target, country) => {
    // Assuming you want to update the origin country
    setWeight(prevState => ({
      ...prevState,
      [target]: {
        ...prevState[target],
        country: country
      }
    }));
    console.log(target, country)
  };


  const handleBook = (e) => {
    e.preventDefault(); // Prevent default form submission
    BookShipment(weight)
        .then((response) => {
            console.log(response.data);
            alert("Shipment Booked successfully!");
            setWeight({ origin: { country: "", city: "", streetAddress: "", postalCode: "", state: "" }, destination: { country: "", city1: "", streetAddress1: "", postalCode1: "", state1: "" }, weight: "" });
            // login()
            // window.location.href = "/";
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Failed to register user. Please try again.");
        });
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
        <p style={{ 'marginTop': '20px', fontWeight: 500 }}>From</p>
        <div className="form-content-container">
          <div className="form-content" >
            <Dropdown selectCountry={handleSelectCountry} target='origin'></Dropdown>
            <div style={{ width: "200px" }} className='form-city'>
              <div>
                <p>Street</p>
                {/* <p>(optional)</p> */}
              </div>
              <input type="text" onChange={handleweight} name='streetAddress' required />
            </div>
            <div className='form-city'>
              <div>
                <p >State</p>
                {/* <p>(optional)</p> */}
              </div>
              <input type="text" onChange={handleweight} name='state' required />
            </div>
          </div>
          <div className='form-city'>
            <div>
              <p>City</p>
              {/* <p>(optional)</p> */}
            </div>
            <input type="text" onChange={handleweight} name='city' required />
          </div>
          <div className='form-city'>
            <div>
              <p>Pincode</p>
              {/* <p>(optional)</p>? */}
            </div>
            <input type="text" onChange={handleweight} name='postalCode' required />
          </div>
        </div>

        {/* //second part */}
        <p style={{ 'marginTop': '45px', fontWeight: 500 }}>To</p>
        <div className="form-content-container">
          <div className="form-content" >
            <Dropdown selectCountry={handleSelectCountry} target='destination'></Dropdown>
            {/* <input type="text" style={{border:'1px solid #6364789a'}} /> */}
            <div style={{ width: "200px" }} className='form-city'>
              <div>
                <p>Street</p>
                {/* <p>(optional)</p> */}
              </div>
              <input type="text" onChange={handleweight} name='streetAddress1' required />
            </div>
            <div className='form-city'>
              <div>
                <p>State</p>
                {/* <p>(optional)</p> */}
              </div>
              <input type="text" onChange={handleweight} required name='state1' />
            </div>
            {/* <input type="text" style={{border:'1px solid #6364789a'}} /> */}
          </div>
          <div className='form-city'>
            <div>
              <p>City</p>
              {/* <p>(optional)</p> */}
            </div>
            <input type="text" onChange={handleweight} name='city1' required />
          </div>
          <div className='form-city'>
            <div>
              <p>Pincode</p>
              {/* <p>(optional)</p> */}
            </div>
            <input type="text" onChange={handleweight} name='postalCode1' required />
          </div>
        </div>

        <div className="form-button">
          <button role="button" type='submit' class="button-name" onClick={handleship}>Describe your shipment</button>
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
              <input type="text" name='lenght' />
            </div>
            <img src="cross_222301.png" width={15} height={15} style={{ margin: '0px 3px' }} alt="" />
            <div className='form-city' style={{ height: '65px', borderRadius: '5px' }}>
              <div>
                <p>Width</p>
                <p>(cm)</p>
              </div>
              <input type="text" name='width' />
            </div>
            <img src="cross_222301.png" width={15} height={15} style={{ margin: '0px 3px' }} alt="" />
            <div className='form-city' style={{ height: '65px', borderRadius: '5px' }}>
              <div>
                <p>Height</p>
                <p>(cm)</p>
              </div>
              <input type="text" required name='height' />
            </div>
          </div>
          <h1 style={{ fontSize: '1.5vw', marginTop: '19px' }}>Total shipment Weight: {weight.weight != "" ? weight.weight : 0}kg</h1>
        </div>
        <button type='submit' onClick={handleBook}>Ship Now</button>
      </div>)}

    </div>
    <Footer></Footer>
  </>
  );
};

export default Ship;