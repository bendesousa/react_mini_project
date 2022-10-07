import './App.css';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Find my Pokemon</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/pokemon'>Pokemon</Link></li>
      </ul>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/pokemon' element={<Pokemon />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
