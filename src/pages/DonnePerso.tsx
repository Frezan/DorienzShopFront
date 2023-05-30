import React from 'react'
import DonnePersoDisplay from '../components/customer/personnel/DonnePersoDisplay'
import {Helmet} from "react-helmet-async";
function DonnePerso() {
  return (
    <div className='container'>
      <Helmet>
                <title>Dorienz Shop - Politiques de Confidentialités</title>
                <meta name="description" content="Consultez la page de confidentialités de Dorienz Shop pour apprendre plus sur le sujet."/>
            </Helmet>
      <h1 style={{'color':"#dc3545"}}>Politiques de Confidentialités : </h1>
      <DonnePersoDisplay />
    </div>
  )
}

export default DonnePerso