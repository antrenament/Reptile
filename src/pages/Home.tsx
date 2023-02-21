import React from 'react';
import { Container, NavbarBrand, Row, CardGroup } from 'react-bootstrap';
import Navigation from "$components/Navigation"
import HeaderCarousel from '$components/SimpleCarousel';

import HomePagePostCard from '$components/PostCard';
import AboutUsSection from '$components/AboutUs';

import imgUrl01 from '../../public/media/01.jpg'


export default function Home() {
  return (
    <>
      <Navigation />
      <Container>
     
        <Row my={4} className="my-4">
          <HeaderCarousel />
        </Row>
        {/* trebuie sa mai vedem cum ne jucam cu padding aici  */}
        <Row xs={1} md={2} className="g-4 my-4">
          {Array.from({ length: 4 }).map((_, idx) => (
             <HomePagePostCard />
          ))}
        </Row>

        <Row style={{height: 300}} my={2}>
          <AboutUsSection bgImg={imgUrl01}/>
         </Row>

      </Container>
    </>
  );
}
