import React from 'react'
import { Link } from 'react-router-dom'
import './MentionsLegaleDisplay.scss'

const MentionsLegaleDisplay = () => {
    return (
        <div className="mentionsLegales">
            <div>
                <h3>Le site DorienzShop.fr : </h3>
                <hr></hr>
                <p><strong>Forme de la société :</strong> Entreprise Individuel</p>
                <p><strong>Capital social :</strong> 0€</p>
                <p><strong>Identifiant TVA :</strong> 0000 00000</p>
                <p><strong>Siege social  : </strong>Aubervilliers</p>
                <p><strong>Responsable du site web : </strong>Adil Mohammed</p>
                <p><strong>Directeur de la publication :</strong> Adil Mohammed</p>
                <p><strong>Hébergeur du site : </strong>....</p>
            </div>
            <div>
                <h3>Contacts : </h3>
                <hr></hr>
                <p>Email  : admohamme@gmail.com</p>
                <p>Téléphone : 07 00 00 00 00</p>
            </div>
            <div>
                <h3>Propriété intellectuelle :</h3>
                <hr></hr>
                <p>Nous vous informons que toute reproduction ou représentation totale ou partielle, par quelque procédé que ce soit, de ce site, des logos, des images pouvant y figurer est interdite sans l’autorisation expresse du Groupe LDLC et constituerait
                    une contrefaçon sanctionnée par les articles L335-2 et suivants du code de la propriété intellectuelle.</p>
            </div>
            <div>
                <h3>Protection des données personnelles :</h3>
                <hr></hr>
                <p>Vous pouvez retrouver notre politique de protection des données personnelles <Link to="/politique/confidentialite">ici</Link>.</p>
            </div>
        </div>
    )
}

export default MentionsLegaleDisplay