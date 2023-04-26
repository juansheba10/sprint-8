import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ShipList from './Components/ShipList/ShipList';
import ShipDetails from './Components/ShipDetails/ShipDetails';
import './App.css';

function Welcome() {
  return (
    <div>
      <h1>Bienvenido a la página de Star Wars Ships</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main className="App-main">
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/starships" element={<ShipList />} />
            <Route exact path="/starships/:id" element={<ShipDetails />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}


export default App;

