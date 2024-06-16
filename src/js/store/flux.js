const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"
				}
			],
			count: 12,
			message: 'hola navbar desde flux'
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				console.log('este es el loaddata');
			},

			getContact: () => {
				fetch('https://playground.4geeks.com/contact/agendas/walter/')
					.then(response => response.json())
					.then(data => {
						setStore({ contacts: data.contacts, agendaSlug: data.slug });
						console.log("Complete Response:", data);
					})
					.catch(error => console.error('Error fetching contacts:', error));
			},
			
			

			deleteContact: (itemToDelete) => {
				const store = getStore();
				console.log(store.contacts);

				const requestOptions = {
					method: "DELETE",
					redirect: "follow"
				};

				fetch("https://playground.4geeks.com/contact/agendas/walter/contacts/" + itemToDelete, requestOptions)
					.then((response) => response.text())
					.then((result) => {
						console.log(result);
						fetch('https://playground.4geeks.com/contact/agendas/walter/contacts')
							.then(response => response.json())
							.then(data => {
								console.log(data);
								setStore({ contacts: data.contacts });
							});
					});
			},
			
			saveContact: (newContact) => {
				console.log("Guardando contacto esto es lo que esperaba:", newContact);

				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newContact)
				};

				fetch("https://playground.4geeks.com/contact/agendas/walter/contacts", requestOptions)
					.then(response => response.json())
					.then(data => {
						console.log("Respuesta de la API al guardar contacto:", data);
						// Actualizar la lista de contactos después de agregar uno nuevo
						getActions().getContact();
					})
					.catch(error => console.error("Error al guardar el contacto:", error));
			},

			updateContact: (updatedContact) => {
				const requestOptions = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(updatedContact)
				};
			
				fetch(`https://playground.4geeks.com/contact/agendas/walter/contacts/${updatedContact.id}`, requestOptions)
					.then(response => {
						if (!response.ok) {
							return response.text().then(text => { throw new Error(text) });
						}
						return response.json();
					})
					.then(data => {
						console.log("Respuesta de la API al actualizar contacto:", data);
						getActions().getContact(); // Actualizar la lista de contactos
					})
					.catch(error => console.error("Error al actualizar el contacto:", error));
			},
			
				
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
