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
