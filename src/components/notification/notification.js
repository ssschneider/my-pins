import { Alert } from "react-bootstrap";
import ReactDOM from "react-dom";
import "./notification.css"

const Notification = ({ message, variant = "success", onClose }) => {
	return ReactDOM.createPortal(
		<div className="notification">
			<Alert variant={variant} onClose={onClose} dismissible>
				{message}
			</Alert>
		</div>,
		document.body
	);
};

export default Notification;
