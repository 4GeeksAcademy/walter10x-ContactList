import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
//import "../../styles/formulario.css";

export const Formulario = (props) => {
  const { actions } = useContext(Context);
  const [contact, setContact] = useState({
    agenda_slug: "walter",
    name: "",
    email: "",
    address: "",
    phone: ""
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.saveContact(contact);
    props.history.push("/demo");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Nuevo Contacto</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <strong>Nombre:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={contact.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <strong>Email:</strong>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  <strong>Dirección:</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={contact.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  <strong>Teléfono:</strong>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={contact.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn-warning me-2">
                  Guardar Contacto
                </button>
                <button type="button" className="btn-secondary" onClick={() => props.history.push("/demo")}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
