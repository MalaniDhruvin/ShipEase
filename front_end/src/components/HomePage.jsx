import React from 'react'
import '../style/HomePage.css'
import Marquee from './Marquee';
import Detail from './Detail';
import Shipping from './Shipping';
import Export from './Export';
import {Link} from 'react-router-dom'
import OrderTracking from './OrderTracking';

const HomePage = () => {
    const currentStep = 2;
    return (<>
        <div className='Home-container'>
            <div className="Home-content">
                <h1>Ship your <br/> <span style={{fontSize:'5.9vw'}}>valuables</span></h1>
                <h3>Create a delightful online journey by optimising your<br/>
                shipping process and everything surrounding it.</h3>
                <Link to='/register' ><button>Sign Up for free</button></Link>
            </div>
            <div className="Home-img">
                <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/home-A-trusted-growth-partner-rv.webp" width={600} height={400} alt="" />
            </div>  
        </div>
        <Marquee></Marquee>
        <Detail></Detail>
        <Shipping></Shipping>
        <Export></Export>
        {/* <OrderTracking currentStep={currentStep}></OrderTracking> */}
        </>
    )
}

export default HomePage;