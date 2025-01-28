import React, {useState} from "react";
import '../style/AvisForm.scss'

function FormulaireAvis() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [note, setNote] = useState(0); // Note de 1 à 5
    const [avis, setAvis] = useState('');

    // Récupérer les avis existants dans le localStorage
    const getAvis = () => {
        const storedAvis = JSON.parse(localStorage.getItem('avis')) || [];
        return storedAvis;
    };

    // Enregistrer un avis
    const handleSubmit = (e) => {
        e.preventDefault();

        // Créer un nouvel avis
        const newAvis = {
            nom,
            prenom,
            note,
            avis,
            date: new Date().toLocaleString(),
        };

        // Récupérer les anciens avis et ajouter le nouveau
        const avisList = getAvis();
        avisList.push(newAvis);

        // Sauvegarder les avis dans le localStorage
        localStorage.setItem('avis', JSON.stringify(avisList));

        // Réinitialiser le formulaire
        setNom('');
        setPrenom('');
        setNote(0);
        setAvis('');
    };

    // Gérer le changement des champs
    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    // Gérer la sélection des étoiles
    const handleStarClick = (rating) => {
        setNote(rating);
    };


    return(
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
            </form>
        </>
    );
}

export default FormulaireAvis;