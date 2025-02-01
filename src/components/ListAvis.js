import React, { useState, useEffect } from 'react';
import '../style/ListAvis.scss';

function ListeAvis() {
    const [avisList, setAvisList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;

    // Charger les avis du localStorage à chaque chargement de la page
    useEffect(() => {
        const storedAvis = JSON.parse(localStorage.getItem('avis')) || [];
        

        // Trier les avis par date (du plus récent au plus ancien)
        const sortedAvis = storedAvis.sort((a, b) => new Date(b.date) - new Date(a.date));

        setAvisList(sortedAvis);
    }, []);

    // Calculer les avis à afficher pour la page actuelle
    const paginatedAvis = avisList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // Fonction pour naviguer entre les pages
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

    /* // Fonction pour supprimer un avis
    const handleDelete = (index) => {
        // Crée une nouvelle liste d'avis sans celui supprimé
        const updatedAvisList = avisList.filter((_, i) => i !== index);

        // Met à jour le state avec la nouvelle liste
        setAvisList(updatedAvisList);

        // Enregistre la nouvelle liste dans le localStorage
        localStorage.setItem('avis', JSON.stringify(updatedAvisList));
    }; */

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

