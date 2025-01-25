import profil from '../assets/profil.jpg'
import '../style/Summary.scss'

function Summary() {
    return(
        <div className="presenting">
            <img src={profil}></img>
            <p>Bonjour,
                je m'appelle Claude HENRY. Je possède une<strong> solide expérience de soignant depuis 28 ans</strong>. 
                Je suis titulaire d'un diplôme inter universitaire d'hypnose médicale et clinique ainsi qu'un diplôme universitaire
                d'évaluation et traitement de la douleur. J'interviens également dans les structures de santé en tant que formateur en communication positive
                thérapeutique et en hypnose médicale.
                Certifié QUALIOPI.
            </p>
        </div>
    );
};

export default Summary;