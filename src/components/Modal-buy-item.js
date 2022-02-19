import react, { useState } from 'react';
import close from '../photos-and-icons/close.png';
import "./modal-buy-item.css";



function ModalBuyItem({setIsBuy, isBuy}) {

  const closePopup = () => {
    isBuy && setIsBuy(false)
  }

  return (
    <div className="product-buy-container">
      <img src={close} className="close-button"  onClick={ () => closePopup() }/>
      <p className="popup-message">Seu produto foi adicionado ao carrinho!!!</p>
    </div>
  )
}

export default ModalBuyItem;