import React from 'react'
import Carousel from "./Carousel"
import "./Store.css"

function Store() {

    const images = [
        'https://www.aesop.com/u1nb1km7t5q7/6C6iFts3YUrQYUIWsdE8tq/67fb24784093a24a66c575d2b9ff4746/Aesop_Fashion_Walk_II_Mid_Tablet_1440x788px.jpg',
        'https://www.aesop.com/u1nb1km7t5q7/21dOpCEbgZrBdZNtlTVV9W/02ae5460fe94fa23dd2c91d21c1462e2/Aesop_MOKO_II_Mid_Tablet_1440x788px.jpg',
        'https://www.aesop.com/u1nb1km7t5q7/7a8FlmY12ZQS53gi73SWKo/eeb33cdf220d33186edeba730a3ac371/Aesop_HK_Store_IFC_III_Hero_Bleed_Tablet_1536x864px.jpg',
    ];

    return (
        <div className='store'>
            <div className='storebox'>
                <div className='stdetail'>
                    <div id='stdescr'>Store locator</div>
                    <div id='stpara'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </div>
                    <div id='stbutton'><button>Find a nearby store</button></div>
                </div>
            </div>
            <div className='storeimage'>
                <Carousel images={images} />
            </div>
        </div>
    )
}

export default Store