import React from 'react'
import "./Menus.css"

const Menus = () => {
  return (
    <div className='menus-section'>
      <div className="search-area">
        <input type="search" placeholder='Search' />
      </div>
      <div className="menus-area">
        <div className="menu-category">
          <button className='btn-red'>Starter</button>
          <button className='btn-red'>Main Course</button>
          <button className='btn-red'>Hot Beverages</button>
          <button className='btn-red'>Cold Beverages</button>
          <button className='btn-red'>Beer</button>
          <button className='btn-red'>Dessert</button>
          <button className='btn-gray'>More</button>
        </div>
        <div className="menu-items"></div>
      </div>
    </div>
  )
}

export default Menus