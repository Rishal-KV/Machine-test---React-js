import { FC } from "react"
import './NavBar.css'
const NavBar : FC =  () => {
    return (

        <div className="navbar">
        <li className="navbar-item title">
          Choose Your NFT
        </li>
        <li className="navbar-item price-1">
          $99
        </li>
        <li className="navbar-item price-2">
          $199
        </li>
      </div>
      
    )
}

export default NavBar