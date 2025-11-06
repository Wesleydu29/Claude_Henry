import Infos from "@/components/Infos";
import Banner from "@/components/Banner";
import géolocalisation from '@/assets/geolocalisation.webp'
import rivière from '@/assets/rivière.webp'


export const metadata = {
  title: "Contact | Claude Henry - Hypnopraticien",
  description: "Contactez Claude Henry pour une consultation d'hypnose.",
  keywords: "Claude, Henry, hypnopraticien, contact",
  robots: "index, follow",
  metadataBase: new URL("https://www.claude-henry-hypnopraticien.fr"),
  openGraph: {
    title: "Contact | Claude Henry - Hypnopraticien",
    description: "Contactez Claude Henry pour une consultation d'hypnose.",
    images: [
      { url: "/assets/geolocalisation.webp", alt: "Localisation" }
    ],
    url: "https://www.claude-henry-hypnopraticien.fr/contact",
    type: "website",
  },
};

export default function Contact() {
    return(
        <div>
            
                <title> Contact | Claude Henry - hypnopraticien</title>
                <meta name="description" content="Contactez Claude Henry, afin de prendre rendez-vous."/>
                <meta name="robots" content="index, follow"/>
                <meta property="og:title" content="Contact | Claude Henry - Hypnopraticien" />
                <meta property="og:description" content="Contactez moi pour un rendez-vous" />
                <meta property="og:image" content="https://www.monsite.com/assets/profil.webp" />
                <meta property="og:url" content="https://www.claude-henry-hypnopraticien.fr/Contact" />
            
            <Banner backgroundImage={rivière} alt="image d'un paysage avec des montagnes"/>
            <Infos src={géolocalisation} alt="géolocalisation du lieu du cabinet"/>
            

        </div>
    );
};
