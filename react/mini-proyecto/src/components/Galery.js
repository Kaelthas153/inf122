import React from 'react';
import "../styles/Galery.css";
const Gallery = () => {
  const images = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    // ...agrega más imágenes según sea necesario
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
