import { Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const CardComponent = ({image, title, total, label, onClick, pinId}) => {
	return (
		<Card className="bg-light text-dark" style={{ width: '300px', height: '460px' }}>
			<Card.Img
				src={image}
				alt="Card image"
				height={400}
			/>
			<Card.ImgOverlay>
				<Button variant="danger" onClick={() => onClick(pinId)}>
					{label} <Badge bg="dark">{total}</Badge>
				</Button>
			</Card.ImgOverlay>

            <Card.Body>
            <Card.Title>{title}</Card.Title>
            </Card.Body>

		</Card>
	);
};

export default CardComponent;
