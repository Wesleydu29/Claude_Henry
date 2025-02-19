import { useEffect } from "react";

const PING_INTERVAL = 14 * 60 * 1000; // 14 minutes en millisecondes

function KeepAlive() {
  useEffect(() => {
    const pingServer = () => {
      fetch("https://claude-henry-backend.onrender.com/api/avis") // Remplace par ton URL de backend
        .then((res) => console.log("Ping réussi :", res.status))
        .catch((err) => console.error("Erreur lors du ping :", err));
    };

    // Envoyer un premier ping immédiatement
    pingServer();

    // Définir un intervalle pour envoyer un ping toutes les 14 minutes
    const interval = setInterval(pingServer, PING_INTERVAL);

    // Nettoyer l'intervalle quand le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return null; // Ce composant ne rend rien
}

export default KeepAlive;
