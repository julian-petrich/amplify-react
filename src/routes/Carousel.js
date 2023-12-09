import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css";

function CarouselImages() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePaths = [
      "/GF_Outside.jpeg",
      "/GF_Inside.jpeg",
      "/Paz_Nick_Trophy.png",
      "/mosman_harbord.jpeg",
      "/mosman_manly.jpeg",
      "/mosman_mosman_c.jpeg",
    ];

    const loadImage = (path) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = path;
        img.onload = resolve;
      });
    };

    const loadImages = async () => {
      try {
        await Promise.all(imagePaths.map(loadImage));
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images", error);
      }
    };

    loadImages();
  }, []);

  return (
    <div className='news-container'>
      {!imagesLoaded && <p>Loading...</p>}
      {imagesLoaded && (
        <div>
          <h1> Mosman FC - News</h1>
          <Carousel>
            <Carousel.Item>
              <img src="/GF_Outside.jpeg" alt="First slide" />
              <Carousel.Caption className='carousel-caption-top'>
                <h3>Grand Final Win 26.08.2023</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/GF_Inside.jpeg" alt="Second slide" />
              <Carousel.Caption className='carousel-caption-top'>
                <h3>2-0 against Manly A</h3>
                <p>Goals: Nick, Lucas </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="/Paz_Nick_Trophy.png" alt="Third slide" />
              <Carousel.Caption className='carousel-caption-top'>
                <h3>Masterminds behind the success</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="news-section">
            <div className="news-article">
              <div className="image-container">
                <img src="/mosman_harbord.jpeg" alt="3-1 Win against Harbord" className="news-image" />
                <div className="image-caption-overlay">
                  <h3>3-1 Win against Harbord</h3>
                  <p>Goals: Nick, Thjis, Mark </p>
                </div>
              </div>
            </div>
            <div className="news-article">
              <div className="image-container">
                <img src="/mosman_manly.jpeg" alt="3-1 Win against Manly Vale A" className="news-image" />
                <div className="image-caption-overlay">
                  <h3>3-1 Win against Manly Vale A</h3>
                  <p>Goals: Thjis, Gavin, Sean </p>
                </div>
              </div>
            </div>
            <div className="news-article">
              <div className="image-container">
                <img src="/mosman_mosman_c.jpeg" alt="5-0 Win against Mosman C" className="news-image" />
                <div className="image-caption-overlay">
                  <h3>5-0 Win against Mosman C</h3>
                  <p>Goals: Craig (2), Nick, Thjis, Mark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselImages;
