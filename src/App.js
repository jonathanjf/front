import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
