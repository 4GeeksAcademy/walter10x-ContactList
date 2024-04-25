import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Formulario = () => {
    const { actions } = useContext(Context);
    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleInputChange = e => {
        setNewContact({
            ...newContact,
            [e.target.id]: e.target.value
        });
    };

    const handleClick = () => {
        actions.saveContact(newContact);
    };

    return (
        <div className="container">
            <div className="border p-4">
                <form style={{marginBottom:'100px',marginTop:'100px'}}>
                    <div>
                        <h1 className="text-center m-2">Add new contact</h1>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="name" className="form-label text-start"><strong>Full Name:</strong></label>
                            <input type="text" className="form-control" id="name" placeholder="Full Name" onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label text-start"><strong>Email:</strong></label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="phone" className="form-label text-start"><strong>Phone:</strong></label>
                            <input type="tel" className="form-control" id="phone" placeholder="Phone" onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <label htmlFor="address" className="form-label text-start"><strong>Address:</strong></label>
                            <input type="text" className="form-control" id="address" placeholder="Address" onChange={handleInputChange}/>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="button" onClick={handleClick}>Guardar Contacto</button>
                </form>
            </div>
        </div>
    );
};
