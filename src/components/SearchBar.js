import react, { useState, useEffect } from 'react';

function SearchBar() {
  const [input, setInput] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    validateEmail(input)
    console.log(input)
    console.log(isDisable)
  }, [input])

  const validateEmail = (text) => {
    const regex = /[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g;
    if (text.length < 3) {
      setIsDisable(true)
    }
    else {
      text.match(regex) ? setIsDisable(true) : setIsDisable(false)
    }
  }

  const handleChange = ({ target }) => {
    setInput(target.value)
  }

  return (
    <div className="search-bar-container">
      <input type="text" value={input} onChange={handleChange} placeholder="Qual o mimo de hoje para o seu anjinho?"/>
      <button type="button" className="search-button" disabled={isDisable} >Buscar</button>
    </div>
  )
}

export default SearchBar;