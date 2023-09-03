import React from 'react'
import "./Shower.css"
import Showerr from "./assets/shower.avif"

function Shower() {
    return (
        <div className='shower'>
            <div className='showerbox'>
                <div className='showerimage'>
                    <img src={Showerr} />
                </div>
                <div className='shdetail'>
                    <div id='shdescr'>Post-Poo Drops has returned</div>
                    <div id='shpara'>Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.</div>
                    <div id='shbutton'><button>Discover Post-Poo Drops</button></div>
                </div>
            </div>
        </div>
    )
}

export default Shower