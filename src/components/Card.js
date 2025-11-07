import Link from "next/link";
import '@/styles/Card.scss'
import Image from 'next/image';

export default function Card({ src, title, alt, content, color }) {
    return(
        <div className="card">
            <div className="card-inner">
                <div className="card-front" >
                    <div style={{ position: "relative", width: "100%", height: "250px" }}>
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                    </div>
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
