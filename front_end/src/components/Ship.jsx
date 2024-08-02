import { useState, useRef, useContext } from 'react';
import Dropdown from './Dropdown'
import '../style/Ship.css'
import Navbar from './Navbar';
import Footer from './Footer';
import { BookShipment } from '../Global/apiCall';
import { AuthContext } from '../store/AuthContext';

const Ship = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [weight, setWeight] = useState({ origin: { country: "", city: "", streetAddress: "", postalCode: "", state: "" }, destination: { country: "", city1: "", streetAddress1: "", postalCode1: "", state1: "" }, weight: "", cost: "" })
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
      }
      ));
    }
    if (name === 'weight') {
      weight.cost = value * 60;
    }


    return newState;
  };

  const handleCost = () => {
    const cost = weight.weight * 600;
    setWeight(prevState => ({
      ...prevState,
      cost: cost
    }));
  }

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
    e.preventDefault();
    // Prevent default form submission
    const isFormComplete = Object.values(weight.origin).every(field => field !== "") &&
      Object.values(weight.destination).every(field => field !== "") &&
      weight.weight !== "" && weight.cost !== "";

    if (!isFormComplete) {
      alert("Please fill in all fields");
      return;
    }
    
    if (isLoggedIn) {
      BookShipment(weight)
        .then((response) => {
          console.log(response.data);
          alert("Shipment Booked successfully!");
          setWeight({ origin: { country: "", city: "", streetAddress: "", postalCode: "", state: "" }, destination: { country: "", city1: "", streetAddress1: "", postalCode1: "", state1: "" }, weight: "", cost: "" });
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to register user. Please try again.");
        });
    }

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
    </div>
    
    {visible && (<div className="shipment-container" ref={divRef}>
        <div className="ship-head">
          <h1 style={{color:'white'}}>Shipment</h1>
        </div>
        <div className="shipment-form">
          <div className="shipment-content">
            <div className='form-city' style={{ height: '65px', borderRadius: '5px', marginRight: '20px',backgroundColor: '#B3BFFF' }}>
              <div>
                <p>Weight</p>
                <p>(kg)</p>
              </div>
              <input style={{backgroundColor: '#B3BFFF' }} type="text" name='weight' onChange={handleweight} required />
            </div>
            <img src="package_316671.png" width={130} alt="" />
            <div className='form-city' style={{ height: '65px', borderRadius: '5px', marginLeft: '20px',backgroundColor: '#B3BFFF'  }}>
              <div>
                <p>Length</p>
                <p>(cm)</p>
              </div>
              <input style={{backgroundColor: '#B3BFFF' }} type="text" name='lenght' />
            </div>
            <img src="cross_222301.png" width={15} height={15} style={{ margin: '0px 3px' }} alt="" />
            <div className='form-city' style={{ height: '65px', borderRadius: '5px',backgroundColor: '#B3BFFF'  }}>
              <div>
                <p>Width</p>
                <p>(cm)</p>
              </div>
              <input style={{backgroundColor: '#B3BFFF' }} type="text" name='width' />
            </div>
            <img src="cross_222301.png" width={15} height={15} style={{ margin: '0px 3px' }} alt="" />
            <div className='form-city' style={{ height: '65px', borderRadius: '5px',backgroundColor: '#B3BFFF'  }}>
              <div>
                <p>Height</p>
                <p>(cm)</p>
              </div>
              <input style={{backgroundColor: '#B3BFFF' }} type="text" required name='height' />
            </div>
          </div>
          <h1 style={{ fontSize: '1.5vw', marginTop: '19px' }}>Total shipment Weight: {weight.weight != "" ? weight.weight : 0}kg</h1>
          <h1 style={{ fontSize: '1.5vw', marginTop: '19px' }}>Total shipment Cost: {weight.cost != "" ? weight.cost : 0} Rs</h1>
        </div>
        <button style={{backgroundColor:'black',color:'white'}} type='submit' onClick={handleBook}>Ship Now</button>
      </div>)}
    <Footer></Footer>
  </>
  );
};

export default Ship;