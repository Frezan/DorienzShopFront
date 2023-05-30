import React from 'react'
import ConditionsVentesDisplay from '../components/customer/legales/ConditionsVentesDisplay'
import {Helmet} from "react-helmet-async";

const ConditionsVentes = () => {
    return (
        <div className='container'>
            <Helmet>
                <title>Dorienz Shop - Conditions de Ventes</title>
                <meta name="description" content="Consultez la page de conditions de ventes de Dorienz Shop pour apprendre plus sur le sujet."/>
            </Helmet>

            <h1 style={{'color':"#dc3545"}}> Nos conditions générales de ventes : </h1>
            <p></p>
            <ConditionsVentesDisplay />
        </div>
    )
}

export default ConditionsVentes