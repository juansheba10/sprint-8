import React from 'react';
import backgroundImage from '../../assets/5R2EL3.jpg';

function Welcome() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center text-white"
      style={backgroundStyle}
    >
      <div className="text-center px-6">
        <h1 className="text-5xl font-semibold">¡Bienvenido a nuestra página de Star Wars!</h1>
        <p className="text-2xl font-semibold mt-4">
          Si eres un fanático de la legendaria saga de Star Wars, has llegado al lugar correcto. En
          esta página encontrarás todo lo que necesitas saber sobre la galaxia muy, muy lejana
          creada por George Lucas.
        </p>
        <p className="text-xl font-semibold mt-4">
          Explora nuestras secciones dedicadas a cada una de las películas de la saga, desde la
          trilogía original hasta la última trilogía. Encontrarás información detallada sobre los
          personajes, las tramas y los lugares emblemáticos de cada episodio.
        </p>
        <p className="text-xl font-semibold mt-4">
          También puedes descubrir más sobre el universo expandido de Star Wars, que incluye
          libros, cómics, series animadas y videojuegos que se extienden más allá de las películas.
          Podrás conocer más sobre tus personajes favoritos y explorar historias nunca antes vistas
          en la pantalla grande.
        </p>
        <p className="text-xl font-semibold mt-4">
          En nuestra página también encontrarás noticias y novedades sobre futuros proyectos de Star
          Wars, como nuevas películas y series de televisión. Mantente al día con las últimas
          noticias y rumores sobre la franquicia y comparte tus teorías y expectativas con otros
          fans.
        </p>
        <p className="text-xl font-semibold mt-4">
          ¡Únete a nuestra comunidad de fans de Star Wars y que la Fuerza te acompañe!
        </p>
      </div>
    </div>
  );
}

export default Welcome;
