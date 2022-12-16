import { Col, Container, Row } from "react-bootstrap";
import CreateFolder from "../../containers/createFolder/createFolder";
import SavePin from "../../containers/modalSavePin/savePin";
import Notification from "../../components/notification/notification";
import { CardContainer } from "../../containers/card/cardContainer";
import { useAppContext } from "../../store/AppContext";
import { saveFolderSuccessType } from "../../store/types";
import { useEffect, useState } from "react";
import { fetchPinsAction } from "../../store/actions";

const Home = () => {
	const { state, dispatch } = useAppContext();
	const [showNotification, setShowNotification] = useState(false);

	const pinsNormalized = state.pins.map(pin => ({
			...pin,
			total: state.folders.filter(folder => (
					folder.pins.includes(pin.pinId)
				)).length
		})
	)

	useEffect(() => {
		fetchPinsAction(dispatch)
	}, [])

	useEffect(() => {
		if (state.type === saveFolderSuccessType) {
			setShowNotification(true);
		}
	}, [state.type]);

	return (
		<>
			<SavePin open={state.mode === "savePin"} />
			<CreateFolder open={state.mode === "createFolder"} />

			{showNotification && (
				<Notification
					message="Criado com sucesso"
					onClose={() => setShowNotification(false)}
				/>
			)}
			<Container fluid>
				<Row>
					{pinsNormalized.map(pin => (
						<Col xs={12} md={3} key={pin.pinId}>
							<CardContainer {...pin}/>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Home;
