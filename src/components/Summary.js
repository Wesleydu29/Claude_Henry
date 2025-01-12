import profil from '../assets/profil.jpg'
import '../style/Summary.scss'

function Summary() {
    return(
        <div className="presenting">
            <img src={profil}></img>
            <p>Bonjour,
                je m'appelle Claude HENRY. Fort d'une <strong>expérience de 28 ans en tant que soignant</strong>, 
                diplômé depuis 2022 d'un diplôme inter-universitaire, en hypnose médicale et clinique et d'un 
                diplôme universitaire d'évaluation et traitement de la douleur. 
                Je suis également formateur en communication positive thérapeutique et en hypnose médicale. Certifié QUALIOPI.
            </p>
        </div>
    );
};

export default Summary;