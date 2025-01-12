import '../style/Card.scss'

function Card(props) {
    return(
        <div className="card">
            <img src={props.src}></img>
            <div className="card-content">
                <h3>{props.title}</h3>
                <p>découvrir</p>
            </div>
            
        </div>
    );
};

export default Card;