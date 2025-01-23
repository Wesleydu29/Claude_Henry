import '../style/Modal.scss'
import React from 'react';

function Modal({isOpen, onClose}) {
    
    if (!isOpen) return null;
    
    return(
        <div className="modal-background">
            <div className="modal-container">
                <button onClick={onClose}>X</button>
                <div className='title'>
                    <h2>Tarifs</h2>
                </div>
                <div className='body'>
                    <p>Consultation au cabinet, 50€ la séance d'une durée, pouvant varier de 45 minutes à 1h30</p>
                    <p>Consultation à domicile, 60€ la séance d'une durée, pouvant varier de 45 minutes à 1h30</p>
                </div>
            </div>

        </div>
    );
}

export default Modal;