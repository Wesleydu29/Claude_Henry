import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import '../style/ListAvis.scss';
import { FaStar, FaRegStar } from "react-icons/fa";

function ListeAvis() {
    const [avisList, setAvisList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const storedAvis = JSON.parse(localStorage.getItem('avis')) || [];
        

        // Trier les avis par date (du plus récent au plus ancien)
        const sortedAvis = storedAvis.sort((a, b) => new Date(b.date) - new Date(a.date));

        setAvisList(sortedAvis);
    }, []);

    // Calculer les avis à afficher pour la page actuelle
    const paginatedAvis = avisList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // Auto-slide timer
    useEffect(() => {
        if (avisList.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % avisList.length);
            }, 5000); // Slide every 5 seconds

            return () => clearInterval(interval);
        }
    }, [avisList]);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        return (
            <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                    index < fullStars ? <FaStar key={index} className="star-filled" /> : <FaRegStar key={index} className="star-empty" />
                ))}
            </div>
        );
    };

    return (
        <div className="liste-avis">
            <h2>Avis de mes clients ({avisList.length} avis)</h2>
            
            {avisList.length === 0 ? (
                <p>Aucun avis pour le moment.</p>
            ) : (
                <div>
                    <ul>
                        {paginatedAvis.map((avis, index) => (
                            <li key={index} className="avis-item">
                                <h3>{avis.nom} {avis.prenom}</h3>
                                <p>Note : {avis.note} étoiles</p>
                                <p>{avis.avis}</p>
                                <p><small>Publié le {avis.date}</small></p>

                                {/* <button 
                                    onClick={() => handleDelete(index)} 
                                    className="delete-btn"
                                >
                                    Supprimer
                                </button> */}
                            </li>
                        ))}
                    </ul>

                    {/* Affichage des flèches de navigation si il y a plus de 2 avis */}
                    {avisList.length > itemsPerPage && (
                        <div className="pagination-controls">
                            <button 
                                onClick={handlePrev} 
                                disabled={currentPage === 0}
                                className="pagination-btn"
                            >
                                &#8592; Précédent
                            </button>
                            <button 
                                onClick={handleNext} 
                                disabled={(currentPage + 1) * itemsPerPage >= avisList.length}
                                className="pagination-btn"
                            >
                                Suivant &#8594;
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ListeAvis;
