import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/updateform.css"; // Importa tu archivo de estilos CSS

export const UpdateForm = () => {
    const { store, actions } = useContext(Context);
    const { contactId } = useParams();
    const navigate = useNavigate();
    const [selectedContact, setSelectedContact] = useState({
        name: "",
        address: "",
        phone: "",
        email: ""
    });

    useEffect(() => {
        const storedContact = localStorage.getItem("selectedContact");
        if (storedContact) {
            setSelectedContact(JSON.parse(storedContact));
        } else {
            const contact = store.contacts.find(contact => contact.id == contactId);
            if (contact) {
                setSelectedContact(contact);
                localStorage.setItem("selectedContact", JSON.stringify(contact));
            } else {
                console.log(`Contact with ID ${contactId} not found`);
            }
        }
    }, [contactId, store.contacts]);

    const handleChange = (e) => {
        const updatedContact = {
            ...selectedContact,
            [e.target.name]: e.target.value
        };
        setSelectedContact(updatedContact);
        localStorage.setItem("selectedContact", JSON.stringify(updatedContact));
    };

    const handleUpdate = () => {
        actions.updateContact(selectedContact);
        localStorage.removeItem("selectedContact");
        navigate("/contact");
    };

    const handleCancel = () => {
        localStorage.removeItem("selectedContact");
        navigate("/contact");
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 update-form-container">
                <h1 className="mb-4">Actualizar Contacto</h1>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={selectedContact.name}
                            onChange={handleChange}
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address">Dirección</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            value={selectedContact.address}
                            onChange={handleChange}
                            placeholder="Dirección"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="phone">Teléfono</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={selectedContact.phone}
                            onChange={handleChange}
                            placeholder="Teléfono"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={selectedContact.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </div>
                    <div className="buttons">
                        <button type="button" className="btn update-button" onClick={handleUpdate}>
                            Actualizar
                        </button>
                        <button type="button" className="btn cancel-button" onClick={handleCancel}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
