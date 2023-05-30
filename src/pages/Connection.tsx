import React, { useEffect } from 'react'
import ConnectionDisplay from '../components/customer/connection/ConnectionDisplay'
import {Helmet} from "react-helmet-async";


const Inscription = () => {
 
  
  return (
    <div className='container' >
      <Helmet>
                <title>Dorienz Shop - Connection</title>
                <meta name="description" content="Connectez vous sur Dorienz Shop pour profiter de ses produits."/>
            </Helmet>
       <ConnectionDisplay /> 

    </div>
  )
}

export default Inscription