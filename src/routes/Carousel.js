import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';


function CarouselImages() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Image src="/mosman_harbord.jpeg" text="First slide" />
        <Carousel.Caption>
          <h3>3-1 Win against Harbord </h3>
          <p>Goals: Thjis, </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src="/mosman_manly.jpeg" text="Second slide" />
        <Carousel.Caption>
          <h3>3-1 Win against Manly Vale A</h3>
          <p>Goals: Gavin, Sean </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/mosman_mosman_c.jpeg" text="Third slide" />
        <Carousel.Caption>
          <h3>5-0 Win against Manly Vale A</h3>
          <p>Goals: Plenty</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImages;