import React from 'react'
import './ConditionsVentesDisplay.scss'
import { Link } from 'react-router-dom'

const ConditionsVentesDisplay = () => {
  return (
    <div className="conditionsVentes">
      <p>
        DorienzShop vend du matériel informatique à des clients particuliers en France par la poste.
        Un produit peut être retourné sous 14 jours et un remboursement sera effectué au client en utilisant le droit de rétraction
        de l'article L221-18 et suivant du code de la consommation.
        Le paiement est effectué au moment de la commande par carte bancaire et en TTC.
      </p>
      <p>
        Le vendeur est responsable des produits livrés jusqu'à la destination de l'acheteur.
        Le vendeur n'est pas responsable en cas de disfonctionnement du site due à un évenement extérieur (ex:force majeure).
      </p>
      <p>Les produits en vente sur le site DorienzShop bénéficie de la garantie légale de conformité et de la garantie
        contre les vices cachés,
        permettant à l'acheteur de renvoyer les produits défecteux ou non conformes.
      </p>
      <p>
        La propriété intellectuelle : tous les éléments du site sont protégés par les droits d'auteur, il est interdit en tout ou
        partie de copier le contenu sauf autorisation express.
      </p>
      <p>
        La protection des données personnelles : nous vous invitions à consulter notre page <Link to="/politique/confidentialite">dédiée.</Link>
      </p>
      <p>
        En cas de litige et d'échec de médiation il est possible de saisir le tribunal compétent français qui est
        celui du domicile du défendeur.
      </p>
    </div>
  )
}

export default ConditionsVentesDisplay