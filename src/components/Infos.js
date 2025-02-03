import '../style/Infos.scss'

function Infos({src, alt}) {
    return(
        <div className='infos'>
            <h2>Contactez moi ! </h2>
            <div className="infos-content">
                <div class="phone">
                    <i class="fa-solid fa-phone"></i>
                    <p>07-65-81-41-72</p>
                </div>
                <div class="mail">
                    <i class="fa-solid fa-envelope"></i>
                    <p>claudehenry29@proton.me</p>
                </div>
                <div class="localisation">
                    <i class="fa-solid fa-house"></i>
                    <p>Linguennec 29140 Saint Yvy</p>
                </div>
                <div className="opening">
                    <div>
                        <h3>Consultation uniquement sur rendez-vous !</h3>
                    </div>
                    <img src={src} alt={alt} loading='lazy'></img>
                </div>
                
            </div>
        </div>
    );
};

export default Infos;