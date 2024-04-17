const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRSTWalter",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			], 
			count : 12,
			message: 'hola navbar desde flux'
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},
			loadContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/")
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.error("Error loading contacts:", error));
			},
			addContact: newContact => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newContact)
				})
					.then(response => response.json())
					.then(() => getActions().loadContacts())
					.catch(error => console.error("Error adding contact:", error));
			},
			updateContact: (id, updatedContact) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(updatedContact)
				})
					.then(response => response.json())
					.then(() => getActions().loadContacts())
					.catch(error => console.error("Error updating contact:", error));
			},
			deleteContact: id => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(() => getActions().loadContacts())
					.catch(error => console.error("Error deleting contact:", error));
			}
		}
	};
};

export default getState;
