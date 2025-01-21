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
                <p>L’hypnothérapie est une approche thérapeutique qui utilise l’état d’hypnose pour aider une personne à accéder à son inconscient dans le but de résoudre des problèmes psychologiques, 
                    émotionnels ou physiques. L’hypnose est un état modifié de conscience, 
                    souvent décrit comme un état de relaxation profonde et de concentration accrue, dans lequel l’individu devient plus réceptif aux suggestions.</p>
                <p> Découvrez sur quoi l'hypnose peut vous aider</p>
            </div>
            <div className="gallery">
                <Card src={cigarette} title="Stoppez le tabac"
                content="Pour l'arrêt du tabac, cela se déroulera en 2 séances, à domicile ou en cabinet. " color="#F5C5FF"/>
                <Card src={stress} title="Gérez vos émotions" content="L'hypnose permet d'apprendre à apprendre à lâcher prise et à lâcher le besoin de contrôler, tout cela de façon simple et naturelle. " color="#EC976A"/>
                <Card src={sommeil} title="Apprenez à mieux dormir" content="Des difficultés à s'endormir ? Sommeil décalé ? L'hypnose vous aidera à travailler sur ce qui vous empêche de dormir." color="#AED7FF"/>
                <Card src={phobie} title="Combattez vos phobies" content="Lors d'une peur ou d'une crise d'angoisse, le corps réagit avec des symptômes physiques (palpitations, sueurs, tremblements). Sous hypnose, on peut apprendre à contrôler ces réactions par des techniques de relaxation profonde, réduisant ainsi l'intensité des crises." color="#5BBAAD"/>
                <Card src={bonbon} title="Comportement alimentaire" content="Je vous accompagne dans votre combat contre les troubles du comportement alimentaire (TCA)." color="#CB7FA5"/>
                <Card src={douleur} title="Gestion de la douleur"  content="Grâce à l'hypnose, je soigne la douleur chronique, musculaire ainsi que les migraines." color="#E5E9A0"/>
                <Card src={femme_souriante} title="Reprennez confiance en vous" content="Retrouvez confiance en vous grâce à l'hypnose, car elle agit directement sur l'inconscient, là où se logent de nombreuses croyances limitantes et peurs irrationnelles " color="#DAA49A"/>
            </div>
        </div>
    );
};

export default Gallery;