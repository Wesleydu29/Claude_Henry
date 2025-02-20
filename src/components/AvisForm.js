import React, { useState } from "react";
import axios from "axios";
import '../style/AvisForm.scss';

function FormulaireAvis() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [note, setNote] = useState(0); // Note de 1 à 5
    const [avis, setAvis] = useState('');
    const [date, setDate] = useState('')
    const [message, setMessage] = useState('');

    // Gérer le changement des champs
    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    // Gérer la sélection des étoiles
    const handleStarClick = (rating) => {
        setNote(rating);
    };

    // Enregistrer un avis
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envoyer les données au backend
            const response = await axios.post("https://claude-henry-backend.onrender.com/api/avis", {
                nom,
                prenom,
                note,
                avis,
                date
            });

            // Afficher un message de succès
            setMessage("Avis ajouté avec succès !");

            // Réinitialiser le formulaire
            setNom('');
            setPrenom('');
            setNote(0);
            setAvis('');
            setDate('')
        } catch (error) {
            // Afficher un message d'erreur
            setMessage("Erreur lors de l'ajout de l'avis : " + error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="formulaire-avis">
                <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input
                        type="text"
                        id="nom"
                        value={nom}
                        onChange={handleChange(setNom)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="prenom">Prénom</label>
                    <input
                        type="text"
                        id="prenom"
                        value={prenom}
                        onChange={handleChange(setPrenom)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Note</label>
                    <div className="stars">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <span
                                key={rating}
                                className={`star ${rating <= note ? 'selected' : ''}`}
                                onClick={() => handleStarClick(rating)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="avis">Votre avis</label>
                    <textarea
                        id="avis"
                        value={avis}
                        onChange={handleChange(setAvis)}
                        rows="4"
                        required
                    />
                </div>

                <div className="form-group">
                    <button type="submit">Envoyer</button>
                </div>

                {message && <p>{message}</p>}
            </form>
        </>
    );
}

export default FormulaireAvis;