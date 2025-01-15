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
            <div className="gallery-title">
                <h2>Qu'est-ce que l'hypnose ?</h2>
                <p> Découvrez sur quoi l'hypnose peut vous aider</p>
            </div>
            <div className="gallery">
                <Card src={cigarette} title="Stoppez le tabac"
                content="Vous souhaitez arrêter votre consommation de tabac ? L'hypnose est un outil très puissant qui va vous y aider. 
                ALors n'hésitez plus et prenez rendez-vous " color="#F5C5FF"/>
                <Card src={stress} title="Gérez vos émotions" color="#EC976A"/>
                <Card src={sommeil} title="Apprenez à mieux dormir" color="#AED7FF"/>
                <Card src={phobie} title="Combattez vos phobies" color="#5BBAAD"/>
                <Card src={bonbon} title="Comportements addictifs" color="#CB7FA5"/>
            </div>
        </div>
    );
};

export default Gallery;