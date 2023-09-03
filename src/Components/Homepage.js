import React from 'react'
import logo from "./assets/logo.png"
import "./Homepage.css"
import SearchIcon from '@mui/icons-material/Search';

function Homepage() {
  return (
    <div className='home'>
      <div className='hesoyam'>
        <div className='navbar'>

          <div className='lists'>
            <p id='nav_items'>Skin Care</p>
            <p id='nav_items'>Body & Hand</p>
            <p id='nav_items'>Hair</p>
            <p id='nav_items'>Fragrance</p>
            <p id='nav_items'>Home</p>
            <p id='nav_items'>Kits & Travel</p>
            <p id='nav_items'>Gifts</p>

            <p id='nav_items'>Read</p>
            <p id='nav_items'>Stores</p>
            <p id='nav_items'>Facial Appointments</p>
            <p id='nav_items'><SearchIcon /></p>
          </div>

          <div className='lists2'>
            <p id='nav_items'>Login</p>
            <p id='nav_items'>Cabinet</p>
            <p id='nav_items'>Cart</p>
          </div>
        </div>
        <div className='containe'><img src='https://www.aesop.com/u1nb1km7t5q7/1dvhD6dW4gz1ReQeX6AOOu/0cff9578b20343e987e87db82652fa20/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_XL_5120x1856px.jpg' alt=''></img>
          <div id='logo'><img src={logo} id='hemlo' /></div>
          <div className='detail'>
            <div id='title'>Bar Soaps</div>
            <div id='descr'>A body care classic,reimagined </div>
            <div id='para'>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits</div>
            <div><button>Discover Bar Soaps</button></div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Homepage

