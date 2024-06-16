import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/formulario.css";
import { Footer } from "../component/footer";

export const Formulario = (props) => {
  const { actions } = useContext(Context);
  const [contact, setContact] = useState({
    agenda_slug: "walter",
    name: "",
    email: "",
    address: "",
    phone: ""
  });
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const navigate = useNavigate();

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar si todos los campos están completos antes de mostrar el modal
    const form = e.target;
    if (form.checkValidity()) {
      setShowModal(true); // Mostrar el modal si el formulario es válido
    } else {
      form.reportValidity(); // Mostrar mensajes de validación si el formulario no es válido
    }
  };

  const handleConfirm = () => {
    actions.saveContact(contact);
    setShowModal(false); // Ocultar el modal después de confirmar
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/"); // Redireccionar a la página principal
  };

  return (
    <div className="container mt-5 formulario-container">
      <h1 className="text-center mb-4">Nuevo Contacto</h1>
      <form onSubmit={handleSubmit} noValidate>
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
        <div className="button-row">
          <div className="d-flex justify-content-start">
            <button type="submit" className="btn save-button me-2">
              Guardar Contacto
            </button>
            <button type="button" className="btn cancel-button" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      </form>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmación</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">¿Está seguro de guardar la información del contacto?</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  No
                </button>
                <button type="button" className="btn btn-primary" onClick={handleConfirm}>
                  Sí
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};
