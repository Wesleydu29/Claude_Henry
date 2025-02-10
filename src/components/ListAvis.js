
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import '../style/ListAvis.scss';

function ListeAvis() {
    const [avisList, setAvisList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchAvis = async () => {
            try {
                const response = await axios.get("http://localhost:5001/api/avis");
                const sortedAvis = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setAvisList(sortedAvis);
            } catch (error) {
                console.error("Erreur lors du chargement des avis", error);
            }
        };

        fetchAvis();
    }, []);

    const averageRating = avisList.length > 0 ? (avisList.reduce((sum, avis) => sum + avis.note, 0) / avisList.length).toFixed(1) : 0;

    // Auto-slide timer
    useEffect(() => {
        if (avisList.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % avisList.length);
            }, 5000); // Slide every 5 seconds

            return () => clearInterval(interval);
        }
    }, [avisList]);

    return (
        <div className="liste-avis">
            <h2>Avis de mes clients ({avisList.length} avis)</h2>

            {avisList.length > 0 && (
                <p className="average-rating">
                    Note moyenne : {averageRating} étoiles
                </p>
            )}

            {avisList.length === 0 ? (
                <p>Aucun avis pour le moment.</p>
            ) : (
                <div className="carousel-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="avis-card"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3>{avisList[currentIndex].nom} {avisList[currentIndex].prenom}</h3>
                            <p>Note : {avisList[currentIndex].note} étoiles</p>
                            <p>{avisList[currentIndex].avis}</p>
                            <p><small>Publié le {new Date(avisList[currentIndex].date).toLocaleString()}</small></p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination controls */}
                    <div className="pagination-controls">
                        <button 
                            onClick={() => setCurrentIndex((currentIndex - 1 + avisList.length) % avisList.length)}
                            className="pagination-btn"
                            disabled={avisList.length <= 1}
                        >
                            &#8592; Précédent
                        </button>
                        <button 
                            onClick={() => setCurrentIndex((currentIndex + 1) % avisList.length)}
                            className="pagination-btn"
                            disabled={currentIndex == avisList.length }
                        >
                            Suivant &#8594;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListeAvis;