import { Button, Spinner } from "react-bootstrap";

const ButtonComponent = ({ loading, label, loadingLabel, ...btnProps}) => {
	return (
		<Button {...btnProps}>
			{loading && (
                <>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true">
                    </Spinner>{''}
                </>
			)}
            {loading ? loadingLabel : label}
		</Button>
	);
};

export default ButtonComponent;
