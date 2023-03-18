import React from 'react'
import "./Cart.css"
const Cart = () => {
  return (
    <div className="section">
           <div className="cart">
            
                <button className='cart-btne'>Dine</button>
                 <button className='cart-btn'>Dine</button>
                 <button className='cart-btn'>Dine</button>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Amount</th>
                  
                  </tr>
                </thead>
                  
                <tbody >
                    <td>Chiken Burger</td>
                    <td><button>-</button> 1 <button>+</button> </td>
                    <td>$130.00</td>
                    <td>$130.00</td>
                 


                </tbody>

                <tbody>
                <td>Chiken Burger</td>
                    <td><button>-</button> 1 <button>+</button> </td>
                    <td>$130.00</td>
                    <td>$130.00</td>

                </tbody>
              </table>

              


           </div>

           <div className="cart-data">
                  <div className="right-section">
                     <div>
                       <p>Package :</p>
                      <input type="text" placeholder='0.00' />
                     </div>

                     <div>
                       <p>Package :</p>
                      <input type="text" placeholder='0.00' />
                     </div>

                     <div>
                       <p>Package :</p>
                      <input type="text" placeholder='0.00' />
                     </div>
                     
                  </div>
                  <div className="left-secotion">

                  </div>
           </div>
    </div>

  )
}

export default Cart
