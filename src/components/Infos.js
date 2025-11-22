import '@/styles/Infos.scss'
import Image from "next/image";
import Maps from '@components/Maps'

export default function Infos({src, alt}) {
    return(
        <div className='infos'>
            <h2>Contactez moi ! </h2>
            <div className="infos-content">
                <div className="phone">
                    <i className="fa-solid fa-phone"></i>
                    <p>07-56-81-41-72</p>
                </div>
                <div className="mail">
                    <i className="fa-solid fa-envelope"></i>
                    <p>claudehenry29@proton.me</p>
                </div>
                <div className="localisation">
                    <i className="fa-solid fa-house"></i>
                    <p>Linguennec 29140 Saint Yvy</p>
                </div>
                <div className="opening">
                    <h3>Consultation uniquement sur rendez-vous !</h3>
                    <Maps/>
                </div>
            </div>
        </div>
    );
};
