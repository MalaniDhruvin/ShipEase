import React from 'react'
import '../style/Detail.css'
import Detail1 from './Detail1';

const Detail = () => {
    return (
        <>
        <div className='detail-container'>
            <div className="detail-content-container">
                <p>A trusted growth partner</p>
                <h1 className='detail-h1'>Lakhs of eCommerce businesses chose</h1>
                <div className='detail-content'>
                    <h1>EasyShip to streamline their customer<br />
                        journey-from shipping to returns and beyond</h1>
                </div>
            </div>
        </div>
        <Detail1></Detail1>
        </>
    )
}

export default Detail;