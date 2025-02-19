import Infos from "../components/Infos";
import Banner from "../components/Banner";
import géolocalisation from '../assets/geolocalisation.webp'
import rivière from '../assets/rivière.webp'
import { Helmet } from "react-helmet";

function Contact() {
    return(
        <div>
            <Helmet>
                <title> Contact | Claude Henry - hypnopraticien</title>
                <meta name="description" content="Contactez Claude Henry, afin de prendre rendez-vous."/>
                <meta name="robots" content="index, follow"/>
                <meta property="og:title" content="Contact | Claude Henry - Hypnopraticien" />
                <meta property="og:description" content="Contactez moi pour un rendez-vous" />
                <meta property="og:image" content="https://www.monsite.com/assets/profil.webp" />
                <meta property="og:url" content="https://www.claude-henry-hypnopraticien.fr/Contact" />
            </Helmet>
            <Banner backgroundImage={rivière} alt="image d'un paysage avec des montagnes"/>
            <Infos src={géolocalisation} alt="géolocalisation du lieu du cabinet"/>
            

        </div>
    );
};

export default Contact;