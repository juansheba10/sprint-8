import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ShipList from './Components/ShipList/ShipList';
import ShipDetails from './Components/ShipDetails/ShipDetails';
import Welcome from './Components/Welcome/Welcome';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { AuthContext } from './auth-context';
import './App.css';

function PrivateRoute() {
  const { isLoggedInUser } = useContext(AuthContext);

  return useRoutes([
    {
      path: '/',
      element: <Welcome />,
    },
    {
      path: '/starships',
      element: isLoggedInUser ? <ShipList /> : <Login />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/starships/:id',
      element: isLoggedInUser ? <ShipDetails /> : <Login />,
    },
  ]);
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main className="App-main">
          <Routes>
            <Route path="*" element={<PrivateRoute />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
