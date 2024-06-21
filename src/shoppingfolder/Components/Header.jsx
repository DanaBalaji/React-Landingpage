import React from 'react'

const Header = () => {
  return (
    <div className="headersection">
      <div className="left">
        <h2>Trendy Collections</h2>
      </div>
      <div className="center">
        <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Grooming</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder='Search'/>
      </div>
      <div className="right">
        <div className="signin">
            SignIn / SignOut
        </div>
        <div className="cart">Cart</div>
      </div>


    </div>
  )
}

export default Header