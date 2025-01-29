import React, { useState, useEffect } from 'react';
import '../style/ListAvis.scss';

function ListeAvis() {
    const [avisList, setAvisList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;

    // Charger les avis du localStorage à chaque chargement de la page
    useEffect(() => {
        const storedAvis = JSON.parse(localStorage.getItem('avis')) || [];
        setAvisList(storedAvis);
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

