import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Summary from "../components/Summary";
import banner1 from "../assets/banner1.jpg"


function Home(){
    return(
        <div>
            <Banner  title="Claude Henry" content="Hypnopraticien" backgroundImage={banner1}/>
            <Gallery/>
        </div>
    );
};

export default Home;