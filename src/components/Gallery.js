import Card from "./card"
import '../style/Gallery.scss'
import cigarette from '../assets/cigarette.jpg'
import stress from '../assets/stress.jpg'
import sommeil from '../assets/sommeil.jpg'
import phobie from '../assets/phobie.png'
import bonbon from '../assets/bonbon.jpg'

function Gallery() {
    return(
        <div className="gallery-container">
            <div>
                <h2>En quoi l'hypnose peut elle m'aider ?</h2>
            </div>
            <div className="gallery">
                <Card src={cigarette} title="Stoppez le tabac"/>
                <Card src={stress} title="Gérez vos émotions"/>
                <Card src={sommeil} title="Apprenez à mieux dormir"/>
                <Card src={phobie} title="Combattez vos phobies"/>
                <Card src={bonbon} title="Comportements addictifs"/>
            </div>
        </div>
    );
};

export default Gallery;