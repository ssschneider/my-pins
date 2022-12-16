import { Modal } from "react-bootstrap";
import ButtonComponent from "../button/button";


const ModalComponent = ({ title, children, open, controls = [], onHide }) => {
	return (
		<Modal
			show={open}
			onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer>
				{controls.map((btn, index) => {
					return (
						<ButtonComponent
							key={index}
							{...btn}/>
					);
				})}
			</Modal.Footer>
		</Modal>
	);
};

export default ModalComponent;
