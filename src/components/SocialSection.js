import { Link } from 'react-router-dom';
import faceIcon from '../photos-and-icons/face-icon.png';
import instaIcon from '../photos-and-icons/insta-icon.png';
import tiktokIcon from '../photos-and-icons/tiktok-icon.png';
import ytbIcon from '../photos-and-icons/ytb-icon.png';
import payment from '../photos-and-icons/payment.png';
import "./social-section.css";

function SocialSection() {
  return (
      <div className="social-section-container">
        <div className="first-section-social">
          <h2 className="subtitle">Visite nossas redes sociais</h2>
          <ul className="social-icons-container">
            <Link to="https://www.facebook.com/foreverliss">
              <li className="icon-container">
                <img src={faceIcon} alt="facebook"/>
              </li>
            </Link>
            <Link to="https://www.instagram.com/foreverliss/">
              <li className="icon-container">
                <img src={instaIcon} alt="instagram"/>
              </li>
            </Link>
            <Link to="https://www.tiktok.com/@foreverlissprofessional">
              <li className="icon-container">
                <img src={tiktokIcon} alt="tiktok"/>
              </li>
            </Link>
            <Link to="https://www.youtube.com/c/ForeverLissOficial">
              <li className="icon-container">
                <img src={ytbIcon} alt="youtube"/>
              </li>
            </Link>
          </ul>
        </div>
        <div className="categorie-products">
          <Link to="/"><p className="categorie-product-link">perfume infantil</p></Link>
          <Link to="/"><p className="categorie-product-link">sabonetes</p></Link>
          <Link to="/"><p className="categorie-product-link">pós-banho</p></Link>
          <Link to="/"><p className="categorie-product-link">assaduras</p></Link>
          <Link to="/"><p className="categorie-product-link">hidratantes</p></Link>
          <Link to="/"><p className="categorie-product-link">lenços umedecidos</p></Link>
        </div>
        <div className="second-section-social">
          <h2 className="subtitle">Formas de pagamento</h2>
          <img src={payment} alt="formas de pagamento"/>
        </div>
      </div>
  )
}

export default SocialSection;