import React from 'react'
import "./Header.css"



const Header = () => {
  return (
    // <header className='hader'>
    //     <nav>
    //         <ul className='banner'>
    //         <img className='togle' src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png" alt="" />
    //         <h1 className='mane-heading'>shopywell</h1>
    //         <p className='description'>pos</p>

    //         <button className='order-btn'>New Order</button>
    //         <input className='bill-input' type="text" placeholder='Bill No.' />
    //         </ul>
    //     </nav>
    // </header>

    <>

     <nav className='main-nav '>
            <div className="mane-text">
                <h1>S<span>ho</span>pywell</h1>
                <p>pos</p>
            </div>

            <div className="menu-btn">
                 <button className='header-btn'>New Order</button>
                 <input type="text" placeholder='Bill No' />
            </div>
     </nav>
    
    </>
  )
}

export default Header
