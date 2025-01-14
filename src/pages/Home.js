import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import colline from '../assets/colline.jpg'


function Home(){
    return(
        <div>
            <Banner src={colline}/>
            
            <Gallery/>
        </div>
    );
};

export default Home;