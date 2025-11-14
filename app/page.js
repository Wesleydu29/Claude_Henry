import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
const plage = "/assets/plage.webp";
import ScrollToTop from "@/components/ScrollBtn";
import ListeAvis from "@/components/ListAvis";
import { Metadata } from "next";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";

export const metadata = {
  title: "Page d'accueil | Claude Henry - Hypnopraticien",
  description:
    "Claude Henry - Hypnopraticien à Saint-Yvi, Quimper et Elliant, spécialiste en hypnose médicale et clinique, ainsi qu’en évaluation et traitement de la douleur.",
  keywords:
    "Claude, Henry, hypnopraticien, hypnothérapeute, hypnothérapie, hypnose, Saint-Yvi, Quimper, Elliant, Fouesnant, tabac, addictions, troubles, émotions, sommeil, phobies, douleur, alimentation, confiance en soi",
  robots: "index, follow",
  metadataBase: new URL("https://www.claude-henry-hypnopraticien.fr"),
  openGraph: {
    title: "Page d'Accueil | Claude Henry - Hypnopraticien",
    description:
      "Spécialiste en hypnose médicale et clinique, évaluation et traitement de la douleur.",
    images: [
      {
        url: "https://www.claude-henry-hypnopraticien.fr/assets/profil.webp",
        alt: "Claude Henry - Hypnopraticien",
      },
    ],
    url: "https://www.claude-henry-hypnopraticien.fr",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div>
      <SchemaLocalBusiness/>
      <Banner
        title="Claude Henry"
        content="Hypnopraticien"
        backgroundImage={plage}
        alt="image de galets"
      />
      <Gallery />
      <ListeAvis />
      <ScrollToTop />
    </div>
  );
}

