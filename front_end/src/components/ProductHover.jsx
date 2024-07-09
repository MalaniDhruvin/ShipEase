import React from 'react'

const ProductHover = ({handleMouseEnter,handleMouseLeave}) => {
    return (
        <div
            className="dropdown-content"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>
                <h6>Shipping</h6>
                <ul>
                    <li>
                        <div class="item-info">
                            <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/h1.svg" alt="menuIcon" width="20" height="28" />
                            <p>Domestic Shipping</p>
                        </div>
                        <p class="des">Automated shipping - faster, cheaper</p>
                    </li>
                    <li>
                        <div class="item-info">
                            <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/h1.svg" alt="menuIcon" width="20" height="28" />
                            <p>International Shipping</p>
                        </div>
                        <p class="des">Reach 220+ countries & territories</p>
                    </li>
                    <li>
                        <div class="item-info">
                            <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/h1.svg" alt="menuIcon" width="20" height="28" />
                            <p>B2B & Bulk Shipping</p>
                        </div>
                        <p class="des">Low-cost cargo shipping across India</p>
                    </li>
                </ul>
            </div>
            <div>
                <h6>Fulfillment</h6>
                <ul>
                    <li>
                        <div class="item-info">
                            <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/h1.svg" alt="menuIcon" width="20" height="28" />
                            <p>Warehousing</p>
                        </div>
                        <p class="des">35+ warehouses, closest-to-buyer storage</p>
                    </li>
                    <li>
                        <div class="item-info">
                            <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/h1.svg" alt="menuIcon" width="20" height="28" />
                            <p>1 Day / 2 Day Delivery</p>
                        </div>
                        <p class="des">Assured same/next day order delivery</p>
                    </li>
                </ul>
            </div>
            <div>
                <h6>Growth</h6>
                <ul>
                    <li>
                        <div class="item-info">
                            <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/h1.svg" alt="menuIcon" width="20" height="28" />
                            <p>Amplify</p>
                        </div>
                        <p class="des">Influencer marketing for everyone</p>
                    </li>
                    <li>
                        <div class="item-info">
                            <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/h1.svg" alt="menuIcon" width="20" height="28" />
                            <p>Delivery Boost</p>
                        </div>
                        <p class="des">AI assistant for undelivered orders</p>
                    </li>
                    <li>
                        <div class="item-info">
                            <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/h1.svg" alt="menuIcon" width="20" height="28" />
                            <p>Sense</p>
                        </div>
                        <p class="des">API Marketplace for Data Intelligence & Insights</p>
                    </li>
                </ul>
            </div>
            <div>
                <h6>Delight</h6>
                <ul>
                    <li>
                        <div class="item-info">
                            <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/h1.svg" alt="menuIcon" width="20" height="28" />
                            <p>PortShip</p>
                        </div>
                        <p class="des">Branded post-purchase experience</p>
                    </li>
                    <li>
                        <div class="item-info">
                            <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/h1.svg" alt="menuIcon" width="20" height="28" />
                            <p>Returns</p>
                        </div>
                        <p class="des">Painless returns & refunds management</p>
                    </li>
                    <li>
                        <div class="item-info">
                            <img src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/h1.svg" alt="menuIcon" width="20" height="28" />
                            <p>Tracking</p>
                        </div>
                        <p class="des">Real-time shipment tracking system</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductHover;