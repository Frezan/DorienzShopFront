import React, { useEffect } from 'react'
import InscriptionDisplay from '../components/customer/inscription/InscriptionDisplay'
import {Helmet} from "react-helmet-async";

const Inscription = () => {

  return (
    <div className='container'>
      <Helmet>
                <title>Dorienz Shop - Inscription</title>
                <meta name="description" content="Dorienz Shop propose des produits de qualités à des prix attractifs, inscrivez-vous pour pouvoir en profiter."/>
            </Helmet>
       <InscriptionDisplay /> 

    </div>
  )
}

export default Inscription