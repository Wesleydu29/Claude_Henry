import '../style/Header.scss'
import { NavLink } from "react-router-dom";
import { useState } from 'react';



function Header() {
    const [showDropDown, setShowDropDown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropDown(true);
    }
    
    const handleMouseLeave = () => {
        setShowDropDown(false);
    };
    return(
        <nav>
            <h1>Claude Henry - Hypnopraticien</h1>
            <div className="navbar-link">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
                <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <p>En savoir plus</p>
                    {showDropDown && (
                        <div className="dropdown-menu">
                            <NavLink to="/AboutMe"> À propos de moi</NavLink>
                            <a href='#'>Tarifs</a>
                        </div>
                    )}

                </div>
                
            </div>
        </nav>
    );
};

export default Header;