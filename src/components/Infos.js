import '../style/Infos.scss'

function Infos() {
    return(
        <div>
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
                        <h3>heures d'ouverture</h3>
                        <p>Du lundi au samedi, de 9h à 18h</p>
                    </div>
                    <div>
                        <p>Consultation au cabinet et à domicile</p>
                    </div>
                    

                </div>
                
            </div>
        </div>
    );
};

export default Infos;