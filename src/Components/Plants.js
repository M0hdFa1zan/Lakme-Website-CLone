import React from 'react'
import Plant from "./assets/plant.jpg"
import "./Plants.css"

function Plants() {
    return (
        <div className='plants'>
            <div className='plantbox'>
                <div className='pdetail'>
                    <div id='ptitle'>The Athenaeum</div>
                    <div id='pdescr'>The warm-up</div>
                    <div id='ppara'>In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</div>
                    <div id='pbutton'><button>Read more</button></div>
                </div>
            </div>
            <div className='plantimage'>
                <img src={Plant} />
            </div>
        </div>
    )
}

export default Plants