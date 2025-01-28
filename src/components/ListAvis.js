import React, { useState, useEffect } from 'react';
import '../style/ListAvis.scss'

function ListeAvis() {
    const [avisList, setAvisList] = useState([]);

    // Charger les avis du localStorage à chaque chargement de la page
    useEffect(() => {
        const storedAvis = JSON.parse(localStorage.getItem('avis')) || [];
        setAvisList(storedAvis);
    }, []);

    return (
        <div className="liste-avis">
            <h2>Avis des utilisateurs</h2>
            {avisList.length === 0 ? (
                <p>Aucun avis pour le moment.</p>
            ) : (
                <ul>
                    {avisList.map((avis, index) => (
                        <li key={index} className="avis-item">
                            <h3>{avis.nom} {avis.prenom}</h3>
                            <p>Note : {avis.note} étoiles</p>
                            <p>{avis.avis}</p>
                            <p><small>Publié le {avis.date}</small></p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListeAvis;
