import React from 'react'
import Soap1 from "./assets/soap1.webp"
import Soap2 from "./assets/soap2.webp"
import Soap3 from "./assets/soap3.webp"
import "./Soaps.css"

function Soaps() {
    return (
        <div className='wholesoap'>
            <div className='soapage'>
                <div className='sdetail'>
                    <div id='stitle'>For the body</div>
                    <div id='sdescr'>An expression of care</div>
                    <div id='spara'>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</div>
                    <div id='sbutton'>See all Body care</div>
                </div>
                <div className='soap1'>
                    <img src={Soap1} alt='' />
                    <div>
                        <p>Nurture Bar soap</p>
                        <p>Offers a mild yet effective cleanse</p>
                    </div>
                </div>
                <div className='soap2'>
                    <img src={Soap2} alt='' />
                    <div>
                        <p>Polish Bar soap</p>
                        <p>Thoroughly cleanses and exfoliates skin</p>
                    </div>
                </div>
                <div className='soap3'>
                    <img src={Soap3} alt='' />
                    <div>
                        <p>Refresh Bar soap</p>
                        <p>Offers a thorough and enlivening cleanse</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Soaps