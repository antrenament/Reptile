import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// de aranjat imaginea tre sa fie ceva dinamic in bootstrap

function HomePagePostCard() {
    return (
        <Card style={{ width: 'auto' }} className="my-4">
            <Card.Img variant="top" src="http://via.placeholder.com/414x200" style={{ width: '100%', height: 200, margin: "0 auto" }} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card >
    );
}

export default HomePagePostCard;