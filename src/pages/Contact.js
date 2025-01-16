import Infos from "../components/Infos";
import Banner from "../components/Banner";
import bannerImage from "../assets/banner.jpg"

function Contact() {
    return(
        <div>
            <Infos/>
            <Banner backgroundImage={bannerImage}/>

        </div>
    );
};

export default Contact;