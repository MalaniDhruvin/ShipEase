import React, { useState, useEffect } from 'react'
import '../style/Export.css'

const Export = () => {
    const [Data, setData] = useState('ship')
    const data = [{ img: "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2024/02/shipX.svg", des: "Ship your orders to over 220+ countries and territories with India’s leading cross border shipping solution" }, { img: "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2024/02/cargoX.svg", des: "Access transparent door-to-door B2B deliveries via air from India to anywhere with no weight restrictions" }, { img: "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2024/02/launchX.svg", des: "Take your brand global and start selling to international customers with minimum investment risk" }]
    useEffect(() => {
        let timer;
        if (Data === 'ship') {
            timer = setTimeout(() => setData('cargo'), 4000);
            // console.log(Data);
        } else if (Data === 'cargo') {
            timer = setTimeout(() => setData('launch'), 4000);
            // console.log(Data);
        } else if (Data === 'launch') {
            timer = setTimeout(() => setData('ship'), 4000);
            // console.log(Data);
        }
        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, [Data]);
    return (
        <div className='export-container'>
            <h1 className='export-h1'>Exports</h1>
            <h2>Grow beyond boundaries</h2>
            <div className="export-content-container">
                <div className="content-container">
                    {data.map((value, index) => (
                        <div className="export-content" key={index}>
                            <img src={value.img} alt="" />
                            <p>{value.des}</p>
                            {/* <button className="animated-button">
                                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                                <span className="text">Explore</span>
                                <span className="circle"></span>
                                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                    ></path>
                                </svg>
                            </button> */}
                            <div className='ex-back'></div>
                        </div>
                    ))}

                </div>
                <div className="export-img">
                    {Data == 'ship' && (<img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2024/03/launchx.webp" alt="" />)}
                    {Data == 'cargo' && (<img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/11/cX.png" alt="" />)}
                    {Data == 'launch' && (<img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2024/03/shipx.webp" alt="" />)}

                </div>
            </div>
        </div>
    )
}

export default Export;