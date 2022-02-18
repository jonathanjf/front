import userPng from '../photos-and-icons/user.png';
import cartIcon from '../photos-and-icons/shopping-cart.png';

function IconsHeader() {
  return (
    <div className="icons-container">
      <div className="singular-icon-container">
        <img src={userPng} className="icon-style"/>
        <p>minha conta</p>
      </div>
      <div className="singular-icon-container">
        <img src={cartIcon} className="icon-style"/>
        <p>carrinho</p>
      </div>
    </div>
  )
}

export default IconsHeader;