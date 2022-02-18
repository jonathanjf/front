import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';
import SearchBar from './SearchBar';
import DropdownButton from './DropdownButton';
import IconsHeader from './IconsHeader';

function Header() {
  let [handleMenu, setHandleMenu] = useState(false);

  useEffect(() => {
    
  }, [handleMenu])

  const setMobileMenu = (element) => {
    if (window.innerWidth < 750) {
      element == true ? setHandleMenu(false) : setHandleMenu(true)
      console.log(element)
    }
  }

  if (window.innerWidth < 750) {
    return (
      <div className="header-container">
        <div className="top-side-header">
            <DropdownButton setMobileMenu={ setMobileMenu } handleMenu={ handleMenu } />
            <Logo />
            <IconsHeader />
        </div>
        <SearchBar />
        <nav className={ handleMenu == false ? "nav-bar-container" : "active nav-bar-container "}>
          <Link to="/"><p className="nav-link">perfume infantil</p></Link>
          <Link to="/"><p className="nav-link">sabonetes</p></Link>
          <Link to="/"><p className="nav-link">pós-banho</p></Link>
          <Link to="/"><p className="nav-link">assaduras</p></Link>
          <Link to="/"><p className="nav-link">hidratantes</p></Link>
          <Link to="/"><p className="nav-link">lenços umedecidos</p></Link>
        </nav>
      </div>
    )
  }
  return (
    <div className="header-container">
      <div className="top-side-header">
          <Logo />
          <SearchBar />
          <IconsHeader />
      </div>
      <nav className="nav-bar-container active">
        <Link to="/"><p className="nav-link">perfume infantil</p></Link>
        <Link to="/"><p className="nav-link">sabonetes</p></Link>
        <Link to="/"><p className="nav-link">pós-banho</p></Link>
        <Link to="/"><p className="nav-link">assaduras</p></Link>
        <Link to="/"><p className="nav-link">hidratantes</p></Link>
        <Link to="/"><p className="nav-link">lenços umedecidos</p></Link>
      </nav>
    </div>
  )
}




export default Header;
