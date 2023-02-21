import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// de aranjat imaginea tre sa fie ceva dinamic in bootstrap

function HomePagePostCard() {
    return (
        <Col>
        <Card>
          <Card.Img variant="top" data-src="holder.js/100px180/" style={{height: 300}}/>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
}

export default HomePagePostCard;