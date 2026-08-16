import React, { useState } from "react";
import { FaCamera, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Gallery.css";

function Gallery() {
  const images = [
    "IMG_0897.JPG",
    "IMG_0882.JPG",
    "IMG_0917.JPG",
    "IMG_0912.JPG",
    "IMG_0714.JPG",
    "IMG_0715.JPG",
    "IMG_0717.JPG",
    "IMG_0719.JPG",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="gallery-page">
      <h2>Campus Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => openLightbox(index)}
          >
            <FaCamera className="gallery-icon" />
            <img src={`/pictures/${img}`} alt={`Campus ${index + 1}`} />
            <p>Campus Life #{index + 1}</p>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <button className="nav-btn left" onClick={prevImage}>
            <FaArrowLeft />
          </button>
          <img
            src={`/pictures/${images[selectedIndex]}`}
            alt={`Campus ${selectedIndex + 1}`}
            className="lightbox-img"
          />
          <button className="nav-btn right" onClick={nextImage}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
