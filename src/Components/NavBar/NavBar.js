import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-700 text-gray-300 py-4 px-6">
      <div className="flex items-center justify-between flex-wrap lg:flex-nowrap">
        {/* Logo y título */}
        <div className="flex items-center">
          <Link to="/">
            <img className="w-28 h-auto mr-4" src={logo} alt="Star Wars" />
          </Link>
        </div>

        {/* Botón de menú en dispositivos móviles */}
        <button
          className="lg:hidden block focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Enlaces de navegación y campo de búsqueda en dispositivos grandes */}
        <div className="hidden lg:flex items-center flex-1 justify-end">
          <nav className="flex items-center space-x-6 mr-4">
            <Link
              to="/starships"
              className="text-gray-300 hover:text-yellow-500 transition duration-200"
            >
              STARSHIPS
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-yellow-500 transition duration-200"
            >
              Acerca de
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:text-yellow-500 transition duration-200"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="text-gray-300 hover:text-yellow-500 transition duration-200"
            >
              Registrarse
            </Link>
          </nav>

          <div className="relative">
            <input
              type="search"
              className="bg-gray-700 text-gray-300 placeholder-gray-400 px-4 py-2 rounded-md"
              placeholder="Buscar nave"
              // onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      {/* Enlaces de navegación y campo de búsqueda en dispositivos pequeños */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <nav className="flex flex-col items-center space-y-2">
          <Link
            to="/starships"
            className="text-gray-300 hover:text-yellow-500 transition duration-200 py-2"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-yellow-500 transition duration-200 py-2"
          >
            Acerca de
          </Link>
                    <Link
            to="/login"
            className="text-gray-300 hover:text-yellow-500 transition duration-200 py-2"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/register"
            className="text-gray-300 hover:text-yellow-500 transition duration-200 py-2"
          >
            Registrarse
          </Link>
        </nav>

        <div className="relative mt-4">
          <input
            type="search"
            className="bg-gray-700 text-gray-300 placeholder-gray-400 px-4 py-2 rounded-md w-full"
            placeholder="Buscar nave"
            // onChange={handleSearchChange}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;

