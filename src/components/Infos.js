import '../style/Infos.scss'

function Infos() {
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
                        <h3>Consultation uniquement sur rendez-vous</h3>
                        
                    </div>
                    <div className='map'>
                       <iframe width="720" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Linguennec%2029140%20Saint%20Yvy+(cabinet%20Claude%20Henry)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Infos;