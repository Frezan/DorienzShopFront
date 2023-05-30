import React from 'react'
import MentionsLegaleDisplay from '../components/customer/legales/MentionsLegaleDisplay'
import {Helmet} from "react-helmet-async";

const MentionsLegales = () => {
  return (
    <div className='container'>
      <Helmet>
                <title>Dorienz Shop - Mentions Légales</title>
                <meta name="description" content="Consultez la page mentions légales de Dorienz Shop pour apprendre plus sur le sujet."/>
            </Helmet>
        <h1 style={{'color':"#dc3545"}}>Mentions Légales : </h1>
        <MentionsLegaleDisplay /> 
    </div>
  )
}

export default MentionsLegales