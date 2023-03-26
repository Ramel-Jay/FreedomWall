import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={ <Home/> }/>
          <Route path="/Post" exact element={ <Post/> }/>
          <Route path="/About" exact element={ <About/> }/>
          <Route path="/Contact" exact element={ <Contact/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
