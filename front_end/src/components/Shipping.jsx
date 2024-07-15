import React from 'react'
import '../style/Shipping.css'

const Shipping = () => {
    const data = [{ img: "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/courier-selection-sr-home-64b8d7e19d8f9.webp", title: "Domestic shipping", des: "Manage all channels in a single view and reach nationwide efficiently with AI-based courier selection" }, { img: "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/shipping-rv-2.webp", title: "B2B shipping", des: "Lower your B2B and cargo shipping costs by upto 40%" }, { img: "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/shipping-rv-1.webp", title: "Hyperlocal delivery", des: "Make intra-city deliveries in hours with our experienced courier partners" }]
    return (
        <div className='shipping-container'>
            <h1 className='content1'>Shipping</h1>
            <h1 className='content2' style={{'marginLeft':'10px'}}>Keep things simple</h1>
            <div className="card-container">
                {data.map((value, index) => (
                    <div className="shipping-card" key={index}>
                        <img src={value.img} alt="" />
                        <h1>{value.title}</h1>
                        <p>{value.des}</p>
                        {/* <button className="animated-button ship-btn">
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shipping;