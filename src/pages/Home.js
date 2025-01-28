import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import banner1 from "../assets/banner1.jpg"
import ScrollToTop from "../components/ScrollBtn";
import ListeAvis from "../components/ListAvis";


function Home(){
    return(
        <div>
            <Banner  title="Claude Henry" content="Hypnopraticien" backgroundImage={banner1}/>
            <Gallery/>
            <ListeAvis/>
            <ScrollToTop/>
        </div>
    );
};

export default Home;