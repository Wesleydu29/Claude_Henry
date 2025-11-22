import '@/styles/Maps.scss'

export default function Map() {
  return (
    <div className="map-container">
      <div className="map-wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.4802519708765!2d-3.9079933232729953!3d47.96577386310582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4810d924bcbbeed1%3A0x9e37494c74ba3662!2sLinguennec%2C%2029140%20Saint-Yvi!5e0!3m2!1sfr!2sfr!4v1763836363175!5m2!1sfr!2sfr" 
         style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

        </iframe>
      </div>
    </div>
  );
}