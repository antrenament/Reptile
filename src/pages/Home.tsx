import React from 'react';
import { Container, NavbarBrand, Row, CardGroup } from 'react-bootstrap';
import Navigation from "$components/Navigation"
import HeaderCarousel from '$components/SimpleCarousel';

import HomePagePostCard from '$components/PostCard';

export default function Home() {
  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <HeaderCarousel />
        </Row>
        {/* trebuie sa mai vedem cum ne jucam cu padding aici  */}
        <Row>
          <CardGroup>
            <HomePagePostCard />
            <HomePagePostCard />
            <HomePagePostCard />
          </CardGroup>
        </Row>


      </Container>
    </>
  );
}
