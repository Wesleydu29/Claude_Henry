import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import banner1 from "../assets/banner1.jpg"


function Home(){
    return(
        <div>
            <Banner  title="Claude Henry" content="Hypnopraticien" backgroundImage={banner1}/>
            <Gallery/>
            <h2><a>Découvrez mes tarifs</a></h2>
        </div>
    );
};

export default Home;