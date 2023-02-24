import React from 'react';
import { Container, NavbarBrand, Row, CardGroup } from 'react-bootstrap';
import Navigation from '$components/Navigation';
import HeaderCarousel from '$components/SimpleCarousel';

import HomePagePostCard from '$components/PostCard';
import AboutUsSection from '$components/AboutUs';

import imgUrl01 from '/media/01.jpg';
import Footer from '$components/Footer';
import ImageBackground from '$components/ImageBackground';

import Stack from 'react-bootstrap/Stack';

export default function Home() {
  const da = 'dada';
  return (
    <>
      <Navigation />
      <Stack gap={3}>
      <Container>
        <Row my={4} className="my-4">
          <HeaderCarousel />
        </Row>
        {/* trebuie sa mai vedem cum ne jucam cu padding aici  */}
        <Row xs={1} md={2} className="g-4 my-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <HomePagePostCard key={idx}/>
          ))}
        </Row>

        <Row style={{ height: 300 }} my={2}>
          <AboutUsSection bgImg={imgUrl01} />
        </Row>
      </Container>

      <Container>
        <Row my={4} className="my-4">
        <ImageBackground />
      </Row>
      </Container>
      </Stack>
      <Footer />
    </>
  );
}
