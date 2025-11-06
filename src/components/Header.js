"use client";

import '@/styles/Header.scss';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dialogRef = useRef(null);
    const pathname = usePathname();

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
                <button 
                    className={`burger-menu ${isMobileMenuOpen ? 'open' : ''}`} 
                    title="menu" 
                    onClick={toggleMobileMenu}
                >
                    <Menu size={28} style={{ display: isMobileMenuOpen ? 'none' : 'block' }} />
                    <X size={28} style={{ display: isMobileMenuOpen ? 'block' : 'none' }} />
                </button>

                <div className={`navbar-link ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
                    <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    <Link href="/apropos" className={pathname === "/apropos" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>À propos de moi</Link>
                    <p className="tarifs-link" onClick={openDialog}>Tarifs</p>
                    <Link href="/avis" className={pathname === "/avis" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Laisser un avis</Link>
                </div>
            </nav>

            <dialog ref={dialogRef}>
                <div className='dialog-content'>
                    <h2>Tarifs adulte/enfant</h2>
                    <p>Consultation au cabinet, 50€ la séance d'une durée d'environ 1h</p>
                    <p>Consultation à domicile, 60€ la séance d'une durée d'environ 1h</p>
                    <button onClick={closeDialog}>Fermer</button>
                </div>
            </dialog>
        </>
    );
}


