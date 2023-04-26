import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ShipList from './Components/ShipList/ShipList';
import ShipDetails from './Components/ShipDetails/ShipDetails';
import Welcome from './Components/Welcome/Welcome';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main className="App-main">
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/starships" element={<ShipList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/starships/:id" element={<ShipDetails />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
