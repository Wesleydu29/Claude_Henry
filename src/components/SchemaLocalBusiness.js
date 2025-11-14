
"use client";

import Script from "next/script";

export default function SchemaLocalBusiness() {
  return (
    <Script
      id="schema-localbusiness"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Claude Henry - Hypnopraticien",
          image: "https://www.claude-henry-hypnopraticien.fr/assets/profil.webp",
          url: "https://www.claude-henry-hypnopraticien.fr",
          telephone: "+33 7 56 81 41 72",
          address: {
            "@type": "PostalAddress",
            streetAddress: "",
            addressLocality: "Saint-Yvi",
            postalCode: "29140",
            addressCountry: "FR",
          },
          areaServed: [
            {
              "@type": "City",
              name: "Saint-Yvi",
            },
            {
              "@type": "City",
              name: "Quimper",
            },
            {
              "@type": "City",
              name: "Elliant",
            },
            {
              "@type": "City",
              name: "Concarneau",
            },
            {
              "@type": "City",
              name: "Fouesnant",
            },
          ],
          openingHours: "Mo-Fr 09:00-18:00",
          priceRange: "50€ - 60€",
          description:
            "Claude Henry, hypnopraticien à Saint-Yvi, Quimper et Elliant, spécialiste en hypnose médicale et clinique et également évaluation et traitement de la douleur.",
        }),
      }}
    />
  );
}
