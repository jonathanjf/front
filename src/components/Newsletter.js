import { render } from '@testing-library/react';
import react, { useState } from 'react';
import "./newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  return (
    <div className="newsletter-container">
      <h2>newsletter forever baby</h2>
      <p>Cadastre-se agora para não perder nenhuma promoção</p>
      <div className="newsletter-input-container">
        <input type="text" 
          value={email} 
          placeholder="Digite aqui o seu melhor email" 
          onChange={handleEmail}
        />
        <button type="button" className="news-button">cadastrar</button>
      </div>
    </div>
  )
}

export default Newsletter;