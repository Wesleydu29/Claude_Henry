import '../style/Header.scss'
import { NavLink } from "react-router-dom";



function Header() {
    return(
        <nav>
            <h1>Claude Henry - Hypnopraticien</h1>
            <div className="navbar-link">
                <NavLink to="/">Acceuil</NavLink>
                <NavLink>En savoir plus</NavLink>
            </div>
        </nav>
    );
};

export default Header;