import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../photos-and-icons/logo-forever-liss.png';

function Logo() {
  return (
    <Link to="/" className="logo-container">
      <img src={logoImage} alt="logomarca da forever liss"/>
    </Link>
  )
}

export default Logo;