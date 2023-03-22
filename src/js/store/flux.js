const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			contact: []
		},
		actions: {
			loadSomeData: (persons) => {
				setStore({ people: persons })
			},
			editData: (contact) => {
				const store = getStore();
				setStore({ contact: contact })
			}
		}
	};
};

export default getState;
