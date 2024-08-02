import React, { useContext } from 'react'
import '../style/HomePage.css'
import Marquee from './Marquee';
import Detail from './Detail';
import Shipping from './Shipping';
import Export from './Export';
import { Link } from 'react-router-dom'
import OrderTracking from './OrderTracking';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../store/AuthContext';

const HomePage = () => {
    const currentStep = 2;
    const { isLoggedIn } = useContext(AuthContext);
    return (<>
        <Navbar></Navbar>
        <div className='Home-container'>
            <div className="Home-content">
                <h1>Ship your <br /> <span style={{ fontSize: '5.9vw' }}>valuables</span></h1>
                <h3>Create a delightful online journey by optimising your<br />
                    shipping process and everything surrounding it.</h3>
                {isLoggedIn ?<Link to='/shipping' ><button>Ship Now</button></Link>:<Link to='/login' ><button>Ship Now</button></Link>}
            </div>
            <div className="Home-img">
                <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/home-A-trusted-growth-partner-rv.webp" width={600} height={400} alt="" />
            </div>
        </div>
        <Marquee></Marquee>
        <Detail></Detail>
        <Shipping></Shipping>
        <Export></Export>
        <div className="home-des-container">
            <div className="home-des-content">
                <h1>From anywhere</h1>
                <h2>to everywhere</h2>
                <p>Our multi-courier network spread across 24000+ pin codes<br />
                    lets you say yes to every order, even from remote areas.</p>
            </div>
        </div>
        <Footer></Footer>
    </>
    )
}

export default HomePage;