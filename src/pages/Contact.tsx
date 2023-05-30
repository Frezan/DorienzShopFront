import React from 'react'
import ContactDisplay from '../components/customer/contact/ContactDisplay'
import {Helmet} from "react-helmet-async";

const Contact = () => {
  return (
    <div className='container'>
      <Helmet>
                <title>Dorienz Shop - Contact</title>
                <meta name="description" content="Contactez le support de Dorienz Shop au 07 69 00 10 41."/>
            </Helmet>
        <h1 style={{'color':"#dc3545"}}>Nous Contacter</h1>
        <p></p>
        <ContactDisplay />
    </div>
  )
}

export default Contact