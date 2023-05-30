import React from 'react'
import ProductList from '../components/customer/products/ProductList'
import CartContextProvider from '../components/context/CartContext'
import {Helmet} from "react-helmet-async";

const NosProduits = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>Dorienz Shop - Nos Produits</title>
        <meta name="description" content="Découvrez les produits sur Dorienz Shop, des produits de qualités à des prix attractifs, 
        ne manquez pas cette opportunité."/>
      </Helmet>
      <ProductList />

    </div>
  )
}

export default NosProduits