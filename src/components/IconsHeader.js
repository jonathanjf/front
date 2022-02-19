import userPng from '../photos-and-icons/user.png';
import cartIcon from '../photos-and-icons/cart-svg.svg';
import { Link } from 'react-router-dom'

function IconsHeader() {
  return (
    <div className="icons-container">
      <Link to="/" >
        <div className="singular-icon-container">
          <img src={userPng} className="icon-style"/>
          <p>minha conta</p>
        </div>
      </Link>
       <Link to="/" >
        <div className="singular-icon-container">
          <img src={cartIcon} className="icon-style" />
          <p>carrinho</p>
        </div>
      </Link>
    </div>
  )
}

export default IconsHeader;