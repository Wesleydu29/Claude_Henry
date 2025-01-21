import Infos from "../components/Infos";
import Banner from "../components/Banner";
import montagne from "../assets/montagne.jpg"

function Contact() {
    return(
        <div>
            <Banner backgroundImage={montagne}/>
            <Infos/>
            

        </div>
    );
};

export default Contact;