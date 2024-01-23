import Login from './components/Login.js';
import Perfil from './components/Perfil.js';
import Navbar from './components/Navbar.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='routes'>
          <Routes>
            <Route path="/" exact Component={Login} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/perfil" Component={Perfil} />
            <Route path="/register" Component={Register} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
