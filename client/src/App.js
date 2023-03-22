import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
