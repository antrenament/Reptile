import React from 'react';
import { Container, NavbarBrand } from 'react-bootstrap';
import Navigation from "$components/Navigation"
import HeaderCarousel from '$components/SimpleCarousel';



export default function Home() {
  return (
    <>
      <Navigation />
      <Container>
        <HeaderCarousel />
      </Container>
    </>
  );
}
