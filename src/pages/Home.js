import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import plage from "../assets/photo_plage.jpg"
import ScrollToTop from "../components/ScrollBtn";
import ListeAvis from "../components/ListAvis";


function Home(){
    return(
        <div>
            <Banner  title="Claude Henry" content="Hypnopraticien" backgroundImage={plage} alt="image de gallets"/>
            <Gallery/>
            <ListeAvis/>
            <ScrollToTop/>
        </div>
    );
};

export default Home;