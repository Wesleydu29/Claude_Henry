import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import '../style/ListAvis.scss';
import { FaStar, FaRegStar } from "react-icons/fa";

function ListeAvis() {
    const [avisList, setAvisList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAvis = async () => {
            try {
                const response = await axios.get("/api/avis");
                const sortedAvis = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setAvisList(sortedAvis);
                setError(null); // Clear any previous errors
            } catch (error) {
                console.error("Erreur lors du chargement des avis", error);
                setError("Erreur lors du chargement des avis. Veuillez réessayer plus tard.");
            }
        };

        fetchAvis();
    }, []);

    const averageRating = avisList.length > 0 ? parseFloat((avisList.reduce((sum, avis) => sum + avis.note, 0) / avisList.length).toFixed(1)) : 0;

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

            {error && <p className="error-message">{error}</p>}

            {avisList.length > 0 && (
                <p className="average-rating">
                    Note moyenne : ({averageRating}/5) {renderStars(averageRating)} 
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
                            disabled={avisList.length <= 1 || currentIndex === 0}
                        >
                            &#8592; Précédent
                        </button>
                        <button 
                            onClick={() => setCurrentIndex((currentIndex + 1) % avisList.length)}
                            className="pagination-btn"
                            disabled={avisList.length <= 1 || currentIndex === avisList.length - 1}
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