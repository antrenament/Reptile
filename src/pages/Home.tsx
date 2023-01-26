import SimpleCarousel from '$components/SimpleCarousel';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <div className="h1">Home</div>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <SimpleCarousel />
      </Container>
    </>
  );
}
