import '@/styles/Footer.scss'

export default function Footer() {

    const date = new Date().getFullYear()
    return(
        <div className="footer">
            <p> {date} Claude Henry. Tous droits reservés</p>
        </div>
    );
};

