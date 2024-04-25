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
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"
				}
				
			],
			contacts: [],
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
				console.log ('estopy usando useeffcts ')
				
				fetch('https://playground.4geeks.com/contact/agendas/Walter/contacts')
				.then(response => response.json())
				//.then(data => console.log(data.contacts))
				.then(data => setStore( {contacts: data.contacts}))
			},

			deleteContact: (itemToDelete) => { 
				const store = getStore();
				console.log(store.contacts);
			
				const requestOptions = {
					method: "DELETE",
					redirect: "follow"
				};
			
				fetch("https://playground.4geeks.com/contact/agendas/Walter/contacts/" + itemToDelete, requestOptions)
					.then((response) => response.text())
					.then((result) => {
						console.log(result);
						fetch('https://playground.4geeks.com/contact/agendas/Walter/contacts')
							.then(response => response.json())
							.then(data => {
								console.log(data);
								setStore({ contacts: data.contacts });
							});
					});
			},
			// Agregar una nueva acción para guardar un contacto
			saveContact: (newContact) => {
				console.log("Guardando contacto esto es lo que esperaba:", newContact);
				
				// Configurar la solicitud POST con los datos del nuevo contacto
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newContact)
				};
			
				// Realizar la solicitud POST a la API
				fetch("https://playground.4geeks.com/contact/agendas/Walter/contacts", requestOptions)
					.then(response => response.json())
					.then(data => {
						console.log("Respuesta de la API al guardar contacto:", data);
						// Puedes realizar más acciones según la respuesta de la API
					})
					.catch(error => console.error("Error al guardar el contacto:", error));
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
