import React, { useState, useEffect } from "react";
import axios from "axios";
import '../style/ListAvis.scss';

function ListeAvis() {
    const [avisList, setAvisList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;

    // Fetch avis from the backend
    useEffect(() => {
        const fetchAvis = async () => {
            try {
                const response = await axios.get("http://localhost:5001/api/avis");
                // Sort avis by date (newest first)
                const sortedAvis = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setAvisList(sortedAvis);
            } catch (error) {
                console.error("Erreur lors du chargement des avis", error);
            }
        };

        fetchAvis();
    }, []);

    /* // Fonction pour supprimer un avis
    const handleDelete = (index) => {
        // Crée une nouvelle liste d'avis sans celui supprimé
        const updatedAvisList = avisList.filter((_, i) => i !== index);

        // Met à jour le state avec la nouvelle liste
        setAvisList(updatedAvisList);

        // Enregistre la nouvelle liste dans le localStorage
        localStorage.setItem('avis', JSON.stringify(updatedAvisList));
    }; */

    const averageRating = avisList.length > 0 ? (avisList.reduce((sum, avis) => sum + avis.note, 0) /avisList.length).toFixed(1) : 0;

    // Paginated avis
    const paginatedAvis = avisList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // Pagination handlers
    const handleNext = () => {
        if ((currentPage + 1) * itemsPerPage < avisList.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

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
                <div>
                    <ul>
                        {paginatedAvis.map((avis, index) => (
                            <li key={index} className="avis-item">
                                <h3>{avis.nom} {avis.prenom}</h3>
                                <p>Note : {avis.note} étoiles</p>
                                <p>{avis.avis}</p>
                                <p><small>Publié le {new Date(avis.date).toLocaleString()}</small></p>

                                {/* <button 
                                    onClick={() => handleDelete(index)} 
                                    className="delete-btn"
                                >
                                    Supprimer
                                </button> */}
                            </li>
                        ))}
                    </ul>

                    {/* Pagination controls */}
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