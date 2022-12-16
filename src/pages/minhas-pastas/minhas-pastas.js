import { Container } from "react-bootstrap";
import ListGroupComponent from "../../components/list-group/list-group";
import { useAppContext } from "../../store/AppContext";

const adaptItems = (items) => {
	return items.map((item) => ({
		title: item.name,
		total: item.pins.length
	}))
}

const MinhasPastas = () => {
	const { state } = useAppContext()
	return (
		<Container>
			<ListGroupComponent
				items={adaptItems(state.folders)}
			/>
		</Container>
	);
};

export default MinhasPastas;
