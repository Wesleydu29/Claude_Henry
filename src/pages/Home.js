import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import colline from '../assets/colline.jpg'
import Summary from "../components/Summary";


function Home(){
    return(
        <div>
            <Banner src={colline}/>
            <Gallery/>
            <Summary/>
        </div>
    );
};

export default Home;