import React from 'react'
import './Informations.scss'
import { faTruck, faCreditCard, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Informations = () => {
    return (
        <div className='informationHomeDiv'>
            <span className='informationsText'><FontAwesomeIcon icon={faTruck} className="informationImg" /> </span>
            <span className='informationsText'>Livraisons à domicile</span>
            <span className='informationsText'><FontAwesomeIcon icon={faCommentDots} className="informationImg" /></span>
            <span className='informationsText'>Une équipe à votre écoute</span>
            <span className='informationsText'><FontAwesomeIcon icon={faCreditCard} className="informationImg" /></span>
            <span className='informationsText'>Paiement en plusieurs fois.</span>
        </div>
    )
}

export default Informations