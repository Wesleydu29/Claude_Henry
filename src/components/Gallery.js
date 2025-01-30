import Card from "./card"
import '../style/Gallery.scss'
import cigarette from '../assets/cigarette.jpg'
import stress from '../assets/stress.jpg'
import sommeil from '../assets/sommeil.jpg'
import phobie from '../assets/phobie.png'
import bonbon from '../assets/bonbon.jpg'
import douleur from '../assets/douleur.jpg'
import femme_souriante from '../assets/femme_souriante.jpg'

function Gallery() {
    return(
        <div className="gallery-container">
            <div className="gallery-title">
                <h2>Qu'est-ce que l'hypnose ?</h2>
                <p>Il s'agit d'un phénomène naturel, un état particulier de conscience, que chacun d'entre nous pratique à un moment
                    ou à un autre de manière inconsciente : c'est un état de conscience modifié.
                </p>
                <p>- Selon Jean GODIN psychiatre : "L'hypnose est un mode de fonctionnement psychologique, dans lequel le sujet, grâce
                    à l'intervention d'une autre personne, parvient à faire abstraction de la réalité environnante, tout en restant en relation avec
                    l'accompagnateur. "
                </p>
                <p>
                    - D'après Antoine BIOY, psychologue : " 1. Un état de conscience modifié : une activation cortical particulière
                    et un phénomène de dissociation psychique. <br></br> 2. Une relation intersubjective particulière : Une modalité relationnelle, une
                    communication particulière et un lien intersubjectif singulier."
                </p>

                <h2> Découvrez sur quoi l'hypnose peut vous aider</h2>
            </div>
            <div className="gallery">
                <Card src={cigarette} title="Contrôlez vos addictions"
                content="Pour l'arrêt de vos addictions (tabac, alcool etc..), cela se déroulera en plusieurs séances, à domicile ou en cabinet. " color="#F5C5FF"/>
                <Card src={stress} title="Gérez vos émotions" 
                content="L'hypnose vous permet de gérer vos émotions comme l'anxiété, l'angoisse et le stress. " color="#EC976A"/>
                <Card src={sommeil} title="Apprenez à mieux dormir" 
                content="Des difficultés à s'endormir ? Sommeil décalé ? Apprenez à retrouver un sommeil de meilleure qualité avec l'hypnose et l'autohypnose." color="#AED7FF"/>
                <Card src={phobie} title="Traitez vos phobies" 
                content="Une phobie va créer une peur ou une crise d'angoisse, le corps réagit avec des symptômes physiques (palpitations, sueurs, tremblements).
                sous hypnose, je peux vous apprendre à contrôler ces réactions par des techniques adaptées et personnalisées réduisant ainsi l'intensité des crises." color="#5BBAAD"/>
                <Card src={bonbon} title="Comportement alimentaire" 
                content="L'hypnose permet de vous aider à réguler vos émotions, votre appétit." color="#CB7FA5"/>
                <Card src={douleur} title="Gestion de la douleur"  
                content="La douleur est une sensation et une émotion. Grâce à la pratique de l'hypnose et de l'autohypnose je peux vous aider à réduire celle-ci." color="#E5E9A0"/>
                <Card src={femme_souriante} title="Reprise de la confiance en soi" 
                content="L'hypnose ericksonienne permet l'utilisation de vos ressources inconscientes pour vous aider à aller de l'avant, à prendre conscience de ses forces pour avoir une meilleure estime de soi.
                " color="#DAA49A"/>
            </div>
        </div>
    );
};

export default Gallery;