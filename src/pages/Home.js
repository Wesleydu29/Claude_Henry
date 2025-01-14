import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import banner from '../assets/banner.jpg'


function Home(){
    return(
        <div>
            <Banner src={banner}/>
            
            <Gallery/>
        </div>
    );
};

export default Home;