import Infos from "@/components/Infos";
import Banner from "@/components/Banner";
const island = '/assets/island.webp'


export const metadata = {
  title: "Contact | Claude Henry - Hypnopraticien",
  description: "Prenez rendez-vous avec Claude Henry, hypnopraticien à Saint-Yvi près de Quimper. Consultations en hypnose médicale et clinique pour le traitement de la douleur et l'accompagnement thérapeutique.",
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
            <Banner backgroundImage={island} alt="image d'un paysage avec des montagnes"/>
            <Infos/>
        </div>
    );
};
