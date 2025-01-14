import '../style/Banner.scss'

function Banner(props) {
    return(
        <div className="banner">
            <img src={props.src}></img>

        </div>
    );
};

export default Banner;