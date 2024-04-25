import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Formulario } from "./Formulario";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	return (
		 
		<div className="container">
			<ul className="list-group">
				
    {store.contacts.map((item, index) => {
    return (
		
        <li key={index} className="list-group-item d-flex justify-content-start">
            <img src="https://img.freepik.com/vector-gratis/ilustracion-telefono_53876-5568.jpg?size=626&ext=jpg" 
			alt="Contact" style={{ width: '100px', height: '100px', borderRadius: '100%', backgroundColor:"black"}} /> 
            <div>
                <div><strong>{item.name}</strong></div>

                <div>
				<i className="bi bi-geo-alt" style={{ marginRight: '5px' }}> </i>
					{item.address}
					
					</div>
                <div>
				<i className="bi-telephone-forward" style={{ marginRight: '5px' }}> </i>
					{item.phone}
					</div>
                <div>
				<i className="bi bi-envelope" style={{ marginRight: '5px' }}> </i>
				{item.email}
					</div>
                
            </div>
			
            <i className="bi bi-pencil" style={{ marginLeft: '840px', cursor: 'pointer' }} onClick={() => actions.deleteContact(item.id)}></i>
			<i className="bi bi-trash" style={{ marginLeft: 'auto', marginRight:'50px', cursor: 'pointer'  }} onClick={() => actions.deleteContact(item.id)}></i>
        </li>
    );
})}  

			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>

	);
	
};

