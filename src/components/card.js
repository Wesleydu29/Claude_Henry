import { NavLink } from 'react-router-dom';
import '../style/Card.scss'

function Card(props) {
    return(
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={props.src}></img>
                    <div className="card-content">
                        <h3>{props.title}</h3>
                        <p>découvrir</p>
                    </div>
                </div>
                <div className="card-back" style={{backgroundColor: props.color}}>
                    <h3>Plus d'informations</h3>
                    <div className="cardback-content">
                        <p>{props.content}</p>
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