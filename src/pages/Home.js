import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import plage from "../assets/plage.webp"
import ScrollToTop from "../components/ScrollBtn";
import ListeAvis from "../components/ListAvis";
import { Helmet } from "react-helmet";


function Home(){
    return(
        <div>
            <Helmet>
                <title> page d'accueil | Claude Henry - Hypnopraticien</title>
                <meta name="description" content="Claude Henry - Hypnopraticien à Saint-Yvi, spécialiste en hypnose médicale et clinique et également évaluation et traitement de la douleur."/>
                <meta name="keywords" content="Claude, Henry, hypnopraticien, hypnose, Saint-Yvi, Quimper, Elliant, Fouesnant, tabac, addictions, troubles, 
                émotions, sommeil, phobies, douleur, alimentation, confiance en soi" />
                <meta property="og:title" content="Page d'Accueil | Claude Henry - Hypnopraticien" />
                <meta property="og:description" content="spécialiste en hypnose médicale et clinique, évaluation et traintement de la douleur" />
                <meta property="og:image" content="https://www.monsite.com/assets/profil.webp" />
                <meta property="og:url" content="https://www.claude-henry-hypnopraticien.fr" />
            </Helmet>
            <Banner  title="Claude Henry" content="Hypnopraticien" backgroundImage={plage} alt="image de gallets"/>
            <Gallery/>
            <ListeAvis/>
            <ScrollToTop/>
        </div>
    );
};

export default Home;