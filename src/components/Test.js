import React, { useEffect, useState } from 'react';
import '../style/Banner.scss'

function Banner(props) {
  const [scrollY, setScrollY] = useState(0);

  // Fonction pour gérer le défilement
  const handleScroll = () => {
    setScrollY(window.scrollY);  // Met à jour la position verticale du défilement
  };

  useEffect(() => {
    // Ajouter l'écouteur d'événement au défilement
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="banner">
      <img
        src={props.src}
        alt="Banner"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`  // Ajuste le facteur de vitesse du mouvement
        }}
      />
    </div>
  );
}

export default Banner;


.banner {
    position: relative;
    width: 100%;
    height: 400px; 
    overflow: hidden;
    margin-top: 20px; 
    img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.1s ease-out;
  }
}