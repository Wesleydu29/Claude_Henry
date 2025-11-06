import Link from "next/link";
import '@/styles/Card.scss'
import Image from 'next/image';

function Card({ src, title, alt, content, color }) {
    return(
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <Image src={src} alt={alt}/>
                    <div className="card-content">
                        <h3>{title}</h3>
                        <p>découvrir</p>
                    </div>
                </div>
                <div className="card-back" style={{backgroundColor: color}}>
                    <h3>Plus d'informations</h3>
                    <div className="cardback-content">
                        <p>{content}</p>
                    </div>
                    <div>
                        <Link href="/contact">Contactez moi</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;