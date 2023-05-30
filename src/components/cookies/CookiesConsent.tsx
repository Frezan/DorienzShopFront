import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import "./CookiesConsent.scss"

const CookieConsent = () => {
    const [cookies, setCookie] = useCookies(["cookiesConsent"]);
    let now = new Date();
    let time = now.getTime();
    let expiretime = time + 24 * 60 * 60 * 1000
    now.setTime(expiretime);
    console.log(now)
    const giveCookieConsent = (consent: boolean) => {
        setCookie("cookiesConsent", consent, { path: "/", secure: true, sameSite: 'lax', expires: now });
    };

    return (
        <div className="cookie-consent fixed-bottom p-4">
            <div className="cookies-text" role="alert" data-autohide="false">
                <div className='cookies-text2'>
                    <h4>Cookies</h4>
                    <div>
                    Afin d'améliorer votre expérience sur notre site, nous utilisons des cookies. En poursuivant votre navigation sur notre site, vous acceptez notre utilisation des cookies. 
                    Pour obtenir davantage d'informations sur notre politique en matière de cookies et le traitement des données, veuillez consulter notre    
                        <Link to='/politique/confidentialite' className='cookies-link' > Politique de confidentialité.</Link>
                        <p>
                            <button className='cookies-btn btn-info' onClick={() => { giveCookieConsent(true) }}>
                                Acceptez
                            </button>
                            <button className='cookies-btn btn-danger' onClick={() => { giveCookieConsent(false) }}>
                                Refusez
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;