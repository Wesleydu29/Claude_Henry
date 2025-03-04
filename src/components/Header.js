import '../style/Header.scss';
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from "lucide-react";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dialogRef = useRef(null);

    useEffect(() => {
        const disableScroll = (e) => e.preventDefault(); // Bloque l'événement de scroll
    
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'; // Empêche le scroll classique
            document.body.style.position = 'fixed';  // Évite que la page saute
            document.body.style.width = '100%'; // Évite des bugs sur certains mobiles
            document.body.addEventListener('touchmove', disableScroll, { passive: false }); // Bloque le scroll tactile
        } else {
            document.body.style.overflow = ''; // Réactive le scroll
            document.body.style.position = ''; 
            document.body.style.width = ''; 
            document.body.removeEventListener('touchmove', disableScroll); // Retire le blocage tactile
        }
    
        return () => {
            document.body.style.overflow = ''; // Nettoyage
            document.body.style.position = ''; 
            document.body.style.width = ''; 
            document.body.removeEventListener('touchmove', disableScroll); // Nettoyage du listener
        };
    }, [isMobileMenuOpen]);

    const openDialog = () => {
        dialogRef.current?.showModal();
    };

    const closeDialog = () => {
        dialogRef.current?.close();
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav>
                <h1>Claude Henry - Hypnopraticien</h1>

                {/* Burger Menu Icon */}
                <button className="burger-menu" title="menu" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigation Links */}
                <div className={`navbar-link ${isMobileMenuOpen ? 'active' : ''}`}>
                    <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Accueil</NavLink>
                    <NavLink to="/Contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
                    <NavLink to="/APropos" onClick={() => setIsMobileMenuOpen(false)}>À propos de moi</NavLink>
                    <p className="tarifs-link" onClick={openDialog}>Tarifs</p>
                    <NavLink to="/Avis" onClick={() => setIsMobileMenuOpen(false)}>Laisser un avis</NavLink>
                </div>
            </nav>

            {/* Tarifs Dialog */}
            <dialog ref={dialogRef}>
                <div className='dialog-content'>
                    <h2>Tarifs adulte/enfant</h2>
                    <p>Consultation au cabinet, 50€ la séance d'une durée, pouvant varier de 45 minutes à 1h30</p>
                    <p>Consultation à domicile, 60€ la séance d'une durée, pouvant varier de 45 minutes à 1h30</p>
                    <button onClick={closeDialog}>Fermer</button>
                </div>
            </dialog>
        </>
    );
}

export default Header;

