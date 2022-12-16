import { useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import ButtonComponent from "../../components/button/button";
import ModalComponent from "../../components/modal/modal";
import { closeModalAction, fetchFoldersAction, openCreateFolderAction, savePinInFolderAction } from "../../store/actions";
import { useAppContext } from "../../store/AppContext";

const SavePin = ({ open }) => {
	const { state , dispatch } = useAppContext()
	const [ itemsLoading, setItemsLoading ] = useState({ })

	const handleClose = () => {
		dispatch (closeModalAction())
	}

	const handleCreateFolder = () => {
		dispatch(openCreateFolderAction())
	}

	const handleClick = async (folderId) => {
		setItemsLoading((prevState) => {
			return {
				...prevState,
				[folderId]: true
			}
		})
		await savePinInFolderAction(dispatch, state.activePinId, folderId)
		setItemsLoading((prevState) => {
			return {
				...prevState,
				[folderId]: false
			}
		})
	}

	const foldersNormalized = state.folders.map((folder) => {
		return ({
			...folder,
			saved: folder.pins.includes(state.activePinId)
		})
	})

	useEffect(() => {
		fetchFoldersAction(dispatch)
	}, [])

	return (
		<ModalComponent
			title="Salvar Pin"
			open={open}
			onHide={handleClose}
			controls={[
				{
					label: "Criar Pasta",
					variant: "danger",
					loading: false,
					onClick: handleCreateFolder,
				},
			]}>
			<ListGroup variant="flush">
			{foldersNormalized.map((folder, index) => (
				<ListGroup.Item key={index}>
					<Row>
						<Col xs={8}>{folder.name}</Col>
						<Col xs={4} className="text-end">
							<ButtonComponent 
								label={folder.saved ? "Salvo" : "Salvar"} 
								loadingLabel="Salvando" 
								loading={itemsLoading[folder.id]}
								variant={folder.saved ? "secondary" : "dark"}
								disabled={folder.saved}
								onClick={() => handleClick(folder.id)}
							/>
						</Col>
					</Row>
				</ListGroup.Item>
			))}
			</ListGroup>
		</ModalComponent>
	);
};

export default SavePin;
