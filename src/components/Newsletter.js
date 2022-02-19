import { render } from '@testing-library/react';
import react, { useState } from 'react';
import "./newsletter.css";


const axios = require('axios').default;


function Newsletter() {
  const [email, setEmail] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const sendPostRequest = () => {
    const emailJson = JSON.stringify({email: email})
    axios.post('https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php', {
      data: emailJson,
    }, { headers: {
      'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      window.alert(response)
    })
    .catch((error) => {
      window.alert(error)
    })
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
        <button type="button" onClick={() => sendPostRequest() }  className="news-button">cadastrar</button>
      </div>
    </div>
  )
}

export default Newsletter;