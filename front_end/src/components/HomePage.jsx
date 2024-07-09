import React from 'react'
import '../style/HomePage.css'
import Marquee from './Marquee';
import Detail from './Detail';
import Shipping from './Shipping';
import Export from './Export';

const HomePage = () => {
    return (<>
        <div className='Home-container'>
            <div className="Home-content">
                <h1>Ship your <br/> dream</h1>
                <h3>Create a delightful online journey by optimising your<br/>
                shipping process and everything surrounding it.</h3>
                <button>Sign Up for free</button>
            </div>
            <div className="Home-img">
                <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/home-A-trusted-growth-partner-rv.webp" width={600} height={400} alt="" />
            </div>  
            <p>hola</p>
        </div>
        <Marquee></Marquee>
        <Detail></Detail>
        <Shipping></Shipping>
        <Export></Export>
        </>
    )
}

export default HomePage;