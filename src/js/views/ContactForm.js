import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/contactform.css";

export const ContactForm = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);

    useEffect(() => {
        actions.getContact();
    }, []);

    const handleEdit = (contactId) => {
        navigate(`/update/${contactId}`);
    };

    const confirmDelete = (contactId) => {
        setContactToDelete(contactId);
        setShowModal(true);
    };

    const handleDelete = () => {
        actions.deleteContact(contactToDelete);
        setShowModal(false); // Cierra el modal después de la eliminación
    };

    return (
        <div className="container">
            <h1 className="title text-center my-4 p-3" style={{ backgroundColor: "#343a40", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    Lista de contactos de {store.agendaSlug}
</h1>
            <Link to="/formulario">
                <button className="btn btn-primary">Crear Contacto</button>
            </Link>

            <ul className="list-group">
                {store.contacts.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-start">
                        <img
                            src="https://img.freepik.com/vector-gratis/ilustracion-telefono_53876-5568.jpg?size=626&ext=jpg"
                            alt="Contact"
                            style={{ width: '100px', height: '100px', borderRadius: '100%', backgroundColor: "black" }}
                        />
                        <div className="ml-3">
                            <div><strong>{item.name}</strong></div>
                            <div>
                                <i className="bi bi-geo-alt" style={{ marginRight: '5px' }}></i>
                                {item.address}
                            </div>
                            <div>
                                <i className="bi bi-telephone-forward" style={{ marginRight: '5px' }}></i>
                                {item.phone}
                            </div>
                            <div>
                                <i className="bi bi-envelope" style={{ marginRight: '5px' }}></i>
                                {item.email}
                            </div>
                        </div>
                        <i
                            className="bi bi-pencil ml-auto"
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleEdit(item.id)}
                        ></i>
                        <i
                            className="bi bi-trash ml-2"
                            style={{ cursor: 'pointer' }}
                            onClick={() => confirmDelete(item.id)}
                        ></i>
                    </li>
                ))}
            </ul>

            {/* Modal de confirmación para eliminar */}
            {showModal &&
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmación de Eliminación</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ¿Estás seguro de que deseas eliminar este contacto?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                                <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
            <br />
        </div>
    );
};
