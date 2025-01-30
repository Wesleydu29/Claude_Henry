import '../style/Banner.scss'

function Banner({ backgroundImage, title, content }) {
    return(
        <div className="parallax-container" style={{ backgroundImage: `url(${backgroundImage})` }} >
            <div className="parallax-content">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Banner;
