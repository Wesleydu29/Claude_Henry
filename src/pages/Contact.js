import Infos from "../components/Infos";
import Banner from "../components/Banner";
import montagne from "../assets/montagne.jpg"

function Contact() {
    return(
        <div>
            <Infos/>
            <Banner backgroundImage={montagne}/>

        </div>
    );
};

export default Contact;