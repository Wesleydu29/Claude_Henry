import Infos from "../components/Infos";
import Banner from "../components/Banner";
import montagnes from "../assets/montagne.webp"
import géolocalisation from '../assets/géolocalisation.webp'
import rivière from '../assets/rivière.jpg'

function Contact() {
    return(
        <div>
            <Banner backgroundImage={rivière} alt="image d'un paysage avec des montagnes"/>
            <Infos src={géolocalisation} alt="géolocalisation du lieu du cabinet"/>
            

        </div>
    );
};

export default Contact;