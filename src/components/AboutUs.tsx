import React from 'react';
import imgUrl01 from '../../public/media/01.jpg'
import './styles.css'; 

import { Button, Col, Container, Row } from 'react-bootstrap';


function AboutUsSection({ bgImg }) {

    return (
        <Col className="About" style={{backgroundImage: `url("${bgImg}")`}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit rem nihil reprehenderit similique magnam amet deserunt, velit voluptatem provident non iste optio molestiae? Ipsa possimus quasi tempora quisquam fuga?</p>
            <Button> Submit </Button>
        </Col>

    )
}

export default AboutUsSection