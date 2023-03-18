import React from 'react'
import App from '../Navbar/Navbar.css'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'



const Navbar = () => {
  return (
    <div className='container'>
        <div className="wrapper">
          <div className="left wrapper-div">
            <div className="language">EN</div>
            <div className="searchContainer">
              {/* <Input className='Input'/> */}
              <input type="text" />
              <Search style={{color:'gray', fontSize:16}}/>
            </div>
          </div>
          <div className="center wrapper-div"><h1>SHOPSY</h1></div>
          <div className="right wrapper-div">
            <div className="MenuItems">REGISTER</div>
            <div className="MenuItems">SIGN IN</div>
            <div className="MenuItems">
              <Badge badgeContent={4} color='primary'>
                <ShoppingCartOutlined/>
              </Badge>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar