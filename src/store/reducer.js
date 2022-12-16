import * as types from "./types";

export const reducer = (state, action) => {
	switch (action.type) {
		case types.openSavePinType:
			return {
				...state,
				type: types.openSavePinType,
				mode: "savePin",
				activePinId: action.payload,
			};

		case types.openCreateFolderType:
			return {
				...state,
				type: types.openCreateFolderType,
				mode: "createFolder",
			};

		case types.closeModalType:
			return {
				...state,
				type: types.closeModalType,
				mode: null,
			};

		case types.fetchFoldersSuccessType:
			return {
				...state,
				type: types.fetchFoldersSuccessType,
				folders: action.payload,
			};

		case types.saveFolderSuccessType:
			return {
				...state,
				type: types.saveFolderSuccessType,
				folders: [...state.folders, action.payload],
			};

		case types.savePinInFolderSuccessType:
			return {
				...state,
				type: types.savePinInFolderSuccessType,
				folders: action.payload,
			};

		case types.fetchPinsSuccessType:
			return {
				...state,
				type: types.fetchPinsSuccessType,
				pins: action.payload,
			};

		default:
			return {
				...state,
				type: action.type,
			};
	}
};
