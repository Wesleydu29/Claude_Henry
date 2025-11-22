
import Link from "next/link";
import Summary from "@/components/Summary";
const profil = '/assets/profil.webp'

import '@/styles/Apropos.scss'

export const metadata = {
  title: "À propos | Claude Henry - Hypnopraticien",
  description: "Découvrez en davantage concernant votre hypnothérapeute Claude Henry, ses domaines d'intervention, son parcours, ses diplômes et autres certifications.",
  keywords: "Claude, Henry, hypnopraticien, à propos",
  robots: "index, follow",
};

export default function APropos() {
    return(
        <div>
             
                <title> À propos | Claude Henry - hypnopraticien</title>
                <meta name="description" content="Découvrez le parcours et les compétences de Claude Henry hypnothérapeute"/>
                <meta name="robots" content="index, follow"/>
                <meta property="og:title" content="À propos | Claude Henry - Hypnopraticien" />
                <meta property="og:description" content="Découvrez mon approche et mon expertise en hypnose thérapeutique" />
                <meta property="og:image" content="https://www.monsite.com/assets/profil.webp" />
                <meta property="og:url" content="https://www.claude-henry-hypnopraticien.fr/APropos" />
            
            <h2> En savoir plus</h2>
            <Summary src={profil} alt="portrait de Claude Henry"/>
            <div className="summary-content">
                <h3>Comment puis-je vous aider avec l'hypnose médicale ?</h3>
                <p>Je pratique l'hypnose Ericksonnienne du nom de son créateur Milton Ericksonne. Elle consite à développer les ressources
                    inconscientes que nous avons tous en nous-même. Pendant une séance, vous êtes ici et en même temps ailleurs. Vous gardez votre libre arbitre.
                </p>
                <p>
                    L'hypnose est un outil. Il permet, avec votre collaboration, de vous aider afin d'obtenir un changement, un mieux-être...<br></br>
                    Mes connaissances sont validées par des diplômes. Ma profession de soignant vous assure un suivi éthique sérieux, de la déontologie.
                </p>
                <p>
                    Comme décrit sur la <Link href="/"> page d'accueil</Link>, je peux vous aider dans différents domaines <br/>
                </p>
                <p>
                    - La prise en charge de la douleur, de l'anxiété.<br/>
                    - L'amélioration de l'estime de soi, de la confiance en soi.<br/>
                    - La réduction des phobies.<br/>
                    - L'aide à la prise en charge des addictions "tabac, alcool". <br/>
                    - La gestion du stress, le burn out<br/>
                    - Le sommeil<br/>
                </p>
            </div>

            
        </div>
    );
};
