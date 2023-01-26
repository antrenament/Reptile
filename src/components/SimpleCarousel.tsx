import Carousel from 'react-bootstrap/Carousel';

const SimpleCarousel = () => {
  return (
    <Carousel variant="light" className="w-100 h-50" style={{maxWidth: 780}}>
      <Carousel.Item >
        <img
          className="d-block w-30"
          src="/media/01.jpg"
          alt="First slide"
          style={{width: '100%', maxHeight: 300}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="/media/02.jpg"
          alt="Second slide"
          style={{width: '100%', maxHeight: 300}}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-30"
          src="/media/03.jpg"
          alt="Third slide"
          style={{width: '100%', maxHeight: 300}}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SimpleCarousel;