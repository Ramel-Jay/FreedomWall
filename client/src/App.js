import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Post from './pages/Post/Post';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={ <Home/> }/>
          <Route path="/Post" exact element={ <Post/> }/>
          <Route path="/About" exact element={ <About/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
