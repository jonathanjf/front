import react, { useState } from 'react';
import ModalBuyItem from '../components/Modal-buy-item';
import ProductCard from './ProductCard';
import "./destaques.css";

function Destaques() {
  const [isBuy, setIsBuy] = useState(false)

  const buyItem = () => {
    if (isBuy == false) setIsBuy(true)
  }

  if (window.innerWidth < 750) {
    return (
      <div className="destaques-container">
        {isBuy && <ModalBuyItem setIsBuy={setIsBuy} isBuy={isBuy} /> }
        <div className="baby-destaque">
          <h2>Forever baby <span className="destaque-text">destaques</span></h2>
          <div className="products-grid">
            <ProductCard buyItem={buyItem}/>
            <ProductCard buyItem={buyItem}/>
          </div>
        </div>
        <div className="baby-destaque">
          <h2>Forever baby <span className="destaque-text">destaques</span></h2>
          <div className="products-grid">
            <ProductCard buyItem={buyItem}/>
            <ProductCard buyItem={buyItem}/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="destaques-container">
      {isBuy && <ModalBuyItem setIsBuy={setIsBuy} isBuy={isBuy} /> }
      <div className="baby-destaque">
        <h2>Forever baby <span className="destaque-text">destaques</span></h2>
        <div className="products-grid">
          <ProductCard buyItem={buyItem}/>
          <ProductCard buyItem={buyItem}/>
          <ProductCard buyItem={buyItem}/>
          <ProductCard buyItem={buyItem}/>
        </div>
      </div>
      <div className="baby-destaque">
        <h2>Forever baby <span className="destaque-text">destaques</span></h2>
        <div className="products-grid">
          <ProductCard buyItem={buyItem}/>
          <ProductCard buyItem={buyItem}/>
          <ProductCard buyItem={buyItem}/>
          <ProductCard buyItem={buyItem}/>
        </div>
      </div>
    </div>
  )


}

export default Destaques;