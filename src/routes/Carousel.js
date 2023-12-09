import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import "./Carousel.css";

function CarouselImages() {
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.news-container');

    const handleImageLoad = (event) => {
      if (event.target.tagName === 'IMG') {
        setImagesLoadedCount((prevCount) => prevCount + 1);
      }
    };

    container.addEventListener('load', handleImageLoad);

    return () => {
      container.removeEventListener('load', handleImageLoad);
    };
  }, []);

  useEffect(() => {
    if (imagesLoadedCount === document.querySelectorAll('.news-container img').length) {
      setImagesLoaded(true);
    }
  }, [imagesLoadedCount]);


  return (
 
    <div className='news-container'>
         {!imagesLoaded && <p>Loading...</p>}
    {imagesLoaded && (
      <div>
      <h1> Mosman FC - News</h1>
        
      <Carousel>
        <Carousel.Item>
          <Image src="/GF_Outside.jpeg" text="First slide" />
          <Carousel.Caption className='carousel-caption-top'>
            <h3>Grand Final Win 26.08.2023</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/GF_Inside.jpeg" text="Second slide" />
          <Carousel.Caption className='carousel-caption-top'>
            <h3>2-0 against Manly A</h3>
            <p>Goals: Nick, Lucas </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/Paz_Nick_Trophy.png" text="Third slide" />
          <Carousel.Caption className='carousel-caption-top'>
            <h3>Masterminds behind the success</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="news-section">

      <div className="news-article">
          <div className="image-container">
            <Image src="/mosman_harbord.jpeg" text="Caption for Additional Image 1" className="news-image" />
            <div className="image-caption-overlay">
              <h3>3-1 Win against Harbord</h3>
              <p>Goals: Nick, Thjis, Mark </p>
            </div>
          </div>
        </div>

        <div className="news-article">
          <div className="image-container">
            <Image src="/mosman_manly.jpeg" text="Caption for Additional Image 2" className="news-image" />
            <div className="image-caption-overlay">
              <h3>3-1 Win against Manly Vale A</h3>
              <p>Goals: Thjis, Gavin, Sean </p>
            </div>
          </div>
        </div>

        <div className="news-article">
          <div className="image-container">
            <Image src="/mosman_mosman_c.jpeg" text="Caption for Additional Image 3" className="news-image"  />
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
