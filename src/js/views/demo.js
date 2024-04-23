import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);




	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
                        {store.contacts.map((item, index) => {
    return (
        <li key={index} className="list-group-item d-flex justify-content-start">
            <img src="https://img.freepik.com/vector-gratis/ilustracion-telefono_53876-5568.jpg?size=626&ext=jpg" 
			alt="Contact" style={{ width: '70px', height: '70px', borderRadius: '50%'}} /> {/* Ajusta el tamaño y margen según tus necesidades */}
            <div>
                <div><strong>{item.name}</strong></div>

                <div>
				<i className="bi bi-envelope" style={{ marginRight: '5px' }}> </i>
					{item.address}
					{item.email}
					</div>
                <div>
				<i className="bi-telephone-forward" style={{ marginRight: '5px' }}> </i>
					{item.phone}
					</div>
                <div>
				<i className="bi bi-geo-alt" style={{ marginRight: '5px' }}> </i>
					{item.address}
					</div>
                
            </div>
            <button style={{marginLeft:"auto"}} onClick={() => actions.deleteContact(item.id)}>Eliminar</button>
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
