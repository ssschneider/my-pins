import { Badge, ListGroup } from "react-bootstrap";

const ListGroupComponent = ({ items = [] }) => {
	return (
		<ListGroup as="ul">
			{items.map((folder, index) => {
				return (
					<ListGroup.Item as="li"
						className="d-flex justify-content-between align-items-start">
						<div className="ms-2 me-auto" key={index}>
							<div className="fw-bold">{folder.title}</div>
						</div>
						<Badge bg="danger" pill>
							{folder.total}
						</Badge>
					</ListGroup.Item>
				);
			})}
		</ListGroup>
	);
};

export default ListGroupComponent;
