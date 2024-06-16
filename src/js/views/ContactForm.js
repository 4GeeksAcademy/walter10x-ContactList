import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/contactform.css";

export const ContactForm = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.getContact();
    }, []);

    const handleEdit = (contactId) => {
        navigate(`/update/${contactId}`);
    };

    const confirmDelete = (contactId) => {
        // Aquí puedes implementar la lógica para mostrar un modal de confirmación
    };

    return (
        <div className="container">
            <h1 className="title text-center mt-4 mb-4">Lista de contactos de {store.agendaSlug}</h1>
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

            <br />
        </div>
    );
};

export default ContactForm;
