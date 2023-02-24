import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { styled } from '@stitches/react'
import imgUrl01 from '/media/01.jpg';

function ImageBackground() {

  const BgImage = styled('div', {
    height: 500,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  })

  const BgOverlay = styled('div', {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  })

  return (
    <Container className='bg-light text-light' fluid>
      <Row>
        <BgImage style={{ backgroundImage: `url(${imgUrl01})` }}>
          <Row>
            {/* <BgOverlay></BgOverlay> */}
            <Container className="bg-text">
              <h1>Lorem Ipsum</h1>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis orci vel velit malesuada ultrices. Nulla fringilla nisi vel tortor euismod, sit amet placerat purus consequat.</h5>
            </Container>
          </Row>
          <Button variant='light' className='btn btn-primary"'> Submit </Button>
        </BgImage>
      </Row>

    </Container>
  );
}

export default ImageBackground;