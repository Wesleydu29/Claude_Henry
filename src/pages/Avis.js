import AvisForm from "../components/AvisForm";
import { Helmet } from "react-helmet";

function Avis() {
    return(
        <>
         <Helmet>
                <title> Avis | Claude Henry - hypnopraticien</title>
                <meta name="description" content="Satisfait de votre séance ? Laissez moi un avis."/>
                <meta name="robots" content="index, follow"/>
                <meta property="og:title" content="Avis | Claude Henry - Hypnopraticien" />
                <meta property="og:description" content="Contactez moi pour un rendez-vous" />
                <meta property="og:image" content="https://www.monsite.com/assets/profil.webp" />
                <meta property="og:url" content="https://www.claude-henry-hypnopraticien.fr/Avis" />
            </Helmet>
        <h2>Satisfait(e) de votre séance ? Laissez un avis</h2>
        <p>Une fois votre avis posté, celui ci sera visible sur la page d'accueil</p>
        <AvisForm/>
        
        </>
    );
}

export default Avis;