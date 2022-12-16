const generateId = () => {
    return `${(Math.floor(Math.random() * 100_000)).toString(16)}`
}

const saveFolders = async (folders) => {
    localStorage.setItem("folders", JSON.stringify(folders));
}

export const getFolders = async () => {
	return JSON.parse(localStorage.getItem("folders")) || [];
};

export const saveFolder = async (folderName) => {
	const folders = await getFolders();
	const newFolder = {
		id: generateId(),
		name: folderName,
		pins: [],
	};
	folders.push(newFolder);
	await saveFolders (folders)
	return newFolder;
};

export const savePinInFolder = async (folderId, pinId) => {
    const folders = await getFolders()

    const folderIndex = folders.findIndex((folder) => {
        return folder.id === folderId
    })

    if (folderIndex !== -1) {
        folders[folderIndex].pins.push(pinId)
    }

    await saveFolders (folders)
	return {...folders[folderIndex]};
}

export const getPins = async () => {
	return [
		{
			title: "Música",
			label: "Rosalía",
			pinId: 111,
			total: 0,
			image: "https://rotacult.com.br/wp-content/uploads/2022/03/Main-Press-Photo-HIGHEST-RES-scaled.jpg"
		},
		{
			title: "Séries",
			label: "Stranger Things",
			pinId: 222,
			total: 0,
			image: "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/09/15/942247121-robin-e-steve-stranger-things.jpg"
		},
		{
			title: "Esportes",
			label: "FC Barcelona",
			pinId: 333,
			total: 0,
			image: "https://pbs.twimg.com/media/FG5H8CgXEAMnhI_?format=jpg&name=4096x4096"
		},
		{
			title: "Filmes",
			label: "Senhor dos Anéis",
			pinId: 444,
			total: 0,
			image: "http://images4.fanpop.com/image/photos/23600000/Aragorn-lord-of-the-rings-23648016-599-900.jpg"
		}
	]
}