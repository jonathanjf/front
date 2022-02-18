

function DropdownButton({ setMobileMenu, handleMenu }) {
  return (
    <div className="mobile-menu">
      <button type="button" onClick={ () => setMobileMenu(handleMenu) } className="button-mobile-menu">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </button>
    </div>
  )
}

export default DropdownButton;