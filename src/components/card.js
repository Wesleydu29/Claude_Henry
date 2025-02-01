import { NavLink } from 'react-router-dom';
import '../style/Card.scss'

function Card({ src, title, alt, content, color }) {
    return(
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={src} alt={alt}></img>
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
                        <NavLink to="/Contact">Contactez moi</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;