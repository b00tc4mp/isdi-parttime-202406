/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import createEmergencyContact from "../../logic/createEmergencyContact";
import "../../styles/main.css";
import { useAuth } from "../../context/AuthContext";

const RegisterEmergencyContact = ({ onContactAdded }) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const { userId } = useAuth();

    useEffect(() => {
        if (!userId) {
            navigate("/login");
        }
    }, [userId, navigate]);

    const createEmergencyContactFunc = async (name, phone, relationship, userId) => {
        try {
            await createEmergencyContact(name, phone, relationship, userId);
            setShowModal(false); // Cerrar modal al crear exitosamente
            if (typeof onContactAdded === "function"){
                onContactAdded();
            }
        } catch (err) {
            console.error("Error al crear contacto:", err);
            setError(err.message || "Error al crear el contacto.");
        }
    };

    const categories = ["Amigo", "Familiar", "Personal Médico", "Otro"];

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const relationship = event.target.relationship.value;

        setError("");
        if (userId) {
            createEmergencyContactFunc(name, phone, relationship, userId);
        } else {
            setError("Inicia sesión para continuar");
        }
    };
    
    return (
        <div className="mb-4">
            <button 
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
            >
                Agregar Contacto
            </button>

            <div className={`modal ${showModal ? 'modal-open' : ''}`}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Agregar nuevo contacto de emergencia</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nombre completo" 
                            className="input input-bordered w-full"
                            required 
                        />
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Teléfono" 
                            className="input input-bordered w-full"
                            required 
                        />
                        <select 
                            name="relationship" 
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="" disabled>Selecciona la relación</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        
                        <div className="modal-action">
                            <button 
                                type="button" 
                                className="btn"
                                onClick={() => setShowModal(false)}
                            >
                                Cancelar
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                            >
                                Guardar
                            </button>
                        </div>
                    </form>

                    {error && <div className="text-error mt-4">{error}</div>}
                </div>
            </div>
        </div>
    );
};

export default RegisterEmergencyContact;