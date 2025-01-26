import '../style/Header.scss'
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useRef } from 'react';



function Header() {
    const [showDropDown, setShowDropDown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropDown(true);
    }
    
    const handleMouseLeave = () => {
        setShowDropDown(false);
    };

    const dialogRef = useRef(null);

    const openDialog = () => {
        if (dialogRef.current) {
          dialogRef.current.showModal(); // Affiche le dialog en mode modal
        }
    };

    const closeDialog = () => {
        if (dialogRef.current) {
          dialogRef.current.close(); // Ferme le dialog
        }
    };

    
    return(
        <>
            <nav>
                <h1>Claude Henry - Hypnopraticien</h1>
                <div className="navbar-link">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <p>En savoir plus</p>
                        {showDropDown && (
                            <div className="dropdown-menu">
                                <NavLink to="/APropos" className={({isActive}) => (isActive ? 'active' : '')}> À propos de moi</NavLink>
                                <p onClick={openDialog} className={({isActive}) => (isActive ? 'active' : '')} >Tarifs</p>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <dialog ref={dialogRef}>
                <div className='dialog-content'>
                    <h2> Tarifs adulte</h2>
                    <p>Consultation au cabinet, 50€ la séance d'une durée, pouvant varier de 45 minutes à 1h30</p>
                    <p>Consultation à domicile, 60€ la séance d'une durée, pouvant varier de 45 minutes à 1h30</p>
                    <div className='dialog-content'>
                        <h2> Tarifs enfant</h2>
                        <p>Consultation au cabinet, 40€ la séance d'une durée, pouvant varier de 45 minutes à 1h30</p>
                        <p>Consultation à domicile, 50€ la séance d'une durée, pouvant varier de 45 minutes à 1h30</p>
                    </div>
                    <button onClick={closeDialog}>Fermer</button>
                </div>
            </dialog>
        </>
    );
};

export default Header;