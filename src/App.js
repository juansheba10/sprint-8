import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ShipList from './Components/ShipList/ShipList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main className="App-main">
          <Routes>
            <Route exact path="/starships" element={<ShipList/>} />
            {/* Añade aquí otras rutas si es necesario */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
