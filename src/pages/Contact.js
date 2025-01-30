import Infos from "../components/Infos";
import Banner from "../components/Banner";
import montagne from "../assets/montagne.webp"
import géolocalisation from '../assets/géolocalisation.webp'

function Contact() {
    return(
        <div>
            <Banner backgroundImage={montagne} alt="image d'un paysage avec des montagnes"/>
            <Infos src={géolocalisation} alt="géolocalisation du lieu du cabinet"/>
            

        </div>
    );
};

export default Contact;