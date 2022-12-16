import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ModalComponent from "../../components/modal/modal";
import { closeModalAction, saveFolderAction } from "../../store/actions";
import { useAppContext } from "../../store/AppContext";
import { saveFolderInitType, saveFolderSuccessType } from "../../store/types";

const CreateFolder = ({ open }) => {
	const { state, dispatch } = useAppContext()
    const [ folderName, setFolderName ] = useState ("")

	const handleClose = () => {
		dispatch (closeModalAction())
	}

    const handleSubmit = (e) => {
        e.preventDefault()
		saveFolderAction(dispatch, folderName, state.activePinId);
    }

    const handleChange = (e) => {
        setFolderName(e.target.value)
    }

	useEffect(() => {
		if (state.type === saveFolderSuccessType) {
			handleClose()
		}
	}, [state.type]);

	return (
		<ModalComponent
			title="Criar Pasta"
			onHide={handleClose}
			controls={[
				{
					label: "Criar e Salvar",
					variant: "dark",
					loading: false,
					loadingLabel: "Criando",
					loading: state.type === saveFolderInitType,
                    type: "submit",
                    form: "createFolderForm",
				},
			]}
			open={open}>

			<Form onSubmit={handleSubmit} id="createFolderForm">
				<Form.Group
					className="mb-3"
					controlId="formBasicEmail">
					<Form.Label>Nome da Pasta</Form.Label>
					<Form.Control
						type="text"
						placeholder="Ex: Top 10 do Mês"
                        value={folderName}
                        onChange={handleChange}
					/>
					<Form.Text className="text-muted">
						O nome da pasta não poderá ser alterado depois.
					</Form.Text>
				</Form.Group>
			</Form>
		</ModalComponent>
	);
};

export default CreateFolder;
