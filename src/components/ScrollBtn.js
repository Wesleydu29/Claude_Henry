import React, {useState, useEffect} from "react";


function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        isVisible && (
            <button onClick={scrollToTop} style={{
                height: '50px',
                fontSize: '1rem',
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '10px 15px',
                borderRadius: '50px',
                backgroundColor: '#5BBAAD',
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                zIndex: 1000,
                transition: 'opacity 0.3s ease-in-out', 
                opacity: isVisible ? 1 : 0,
            }}> Revenir en haut 

            </button>
        )

    );
}

export default ScrollToTop;