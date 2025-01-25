
import { NavLink } from "react-router-dom";
import Summary from "../components/Summary";
import '../style/Apropos.scss'

function APropos() {
    return(
        <div>
            <h2> En savoir plus</h2>
            <Summary/>
            <div className="summary-content">
                <h3>Comment puis-je vous aider avec l'hypnose médicale ?</h3>
                <p>Je pratique l'hypnose Ericksonnienne du nom de son créateur Milton Ericksonne. Elle consite à développer les ressources
                    inconscientes que nous avons tous en nous-même. Pendant une séance, vous êtes ici et en même temps ailleurs. Vous gardez votre libre arbitre.
                </p>
                <p>
                    L'hypnose est un outil. Il permet, avec votre collaboration, de vous aider afin d'obtenir un changement, un mieux-être...<br></br>
                    Mes connaissances sont validées par des diplômes. Ma profession de soignant vous assure un suivi éthique sérieux, de la déontologie.
                </p>
                <p>
                    Comme décrit sur la page <NavLink to="/">d'accueil</NavLink>, je peux vous aider dans différents domaines <br/>
                    - La prise en charge de la douleur, de l'anxiété.<br/>
                    - L'amélioration de l'estime de soi, de la confiance en soi.<br/>
                    - La réduction des phobies.<br/>
                    - L'aide à la prise en charge des addictions "tabac, alcool". <br/>
                    - La gestion du stress, le burn out<br/>
                    - Le sommeil<br/>
                </p>
            </div>

            
        </div>
    );
};

export default APropos;