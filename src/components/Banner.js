import '../style/Banner.scss'

function Banner({ backgroundImage, title, content }) {
    return(
        <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }} loading='lazy' >
            <div className="banner-content">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Banner;
