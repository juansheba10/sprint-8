import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    console.error('El correo electrónico ya está en uso.');
  } else {
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Usuario registrado exitosamente.');
  }
};


  return (
    <div className="bg-gray-800 text-gray-300 rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-semibold text-yellow-400 mb-4">Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Correo electrónico</label>
          <input
            className="bg-gray-700 text-gray-300 w-full px-4 py-2 rounded-md"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">Contraseña</label>
          <input
            className="bg-gray-700 text-gray-300 w-full px-4 py-2 rounded-md"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold py-2 px-4 rounded-md"
          type="submit"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;

