"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import '@/styles/ListAvis.scss';
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ListeAvis() {
    const [avisList, setAvisList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAvis = async () => {
            try {
                const response = await axios.get("https://claude-henry-backend.onrender.com/api/avis");
                const sortedAvis = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setAvisList(sortedAvis);
                setError(null); // efface les erreurs précédentes
            } catch (error) {
                console.error("Erreur lors du chargement des avis", error);
                setError("Erreur lors du chargement des avis. Veuillez réessayer plus tard.");
            }
        };

        fetchAvis();
    }, []);


    const averageRating = avisList.length > 0 ? parseFloat((avisList.reduce((sum, avis) => sum + avis.note, 0) / avisList.length).toFixed(1)) : 0;


    useEffect(() => {
        if (avisList.length > 0 && !isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % avisList.length);
            }, 5000); // défile toutes les 5 secondes

            return () => clearInterval(interval);
        }
    }, [avisList, isPaused, setCurrentIndex]);

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
            <h2>Avis de mes patients ({avisList.length} avis)</h2>

            {error && <p className="error-message">{error}</p>}

            {avisList.length > 0 && (
                <div className="average-rating">
                    Note moyenne : ({averageRating}/5) {renderStars(averageRating)} 
                </div>
            )}

            {avisList.length === 0 ? (
                <p>Aucun avis pour le moment.</p>
            ) : (
                <div className="carousel-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="avis-card"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            onMouseEnter={()=> setIsPaused(true)} // met en pause le carousel
                            onMouseLeave={()=> setIsPaused(false)} // reprends le défilement
                        >
                            <h3>{avisList[currentIndex].nom} {avisList[currentIndex].prenom}</h3>
                            <p>Note : {avisList[currentIndex].note} étoiles</p>
                            <p>{avisList[currentIndex].avis}</p>
                            <p><small>Publié le {new Date(avisList[currentIndex].date).toLocaleString()}</small></p>
                        </motion.div>
                    </AnimatePresence>

                    {/* contrôle du defilement */}
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
