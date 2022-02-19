import "./product-card.css";
import ratingStar from '../photos-and-icons/star.png';
import cart from '../photos-and-icons/cart-svg.svg';


function ProductCard({ buyItem }) {
  return (
    <div>
      <div className="default-image"></div>
      <div className="product-details-body">
        <p className="product-title">Lorem ipsum</p>
        <p className="product-price">R$ 9,99</p>
        <ul className="rating-stars">
          <li><img src={ratingStar} /></li>
          <li><img src={ratingStar} /></li>
          <li><img src={ratingStar} /></li>
          <li><img src={ratingStar} /></li>
          <li><img src={ratingStar} /></li>
        </ul>
        <button type="button" className="product-button" onClick={ () => buyItem() }>
          <img src={cart} className="cart-image-button"/>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}

export default ProductCard;