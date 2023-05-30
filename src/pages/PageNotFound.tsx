import React from 'react'
import PageNotFoundDisplay from '../components/customer/errors/PageNotFoundDisplay'
import {Helmet} from "react-helmet-async";

const PageNotFound = () => {
  return (
    <div className='container'>
      <Helmet>
                <title>Dorienz Shop - Page not found</title>
                <meta name="description" content="Page non trouvé dans Dorienz Shop."/>
            </Helmet>
        <h1 style={{'color':"#dc3545"}} >Error 404 : PageNotFound </h1>
        <PageNotFoundDisplay />
    </div>
  )
}

export default PageNotFound