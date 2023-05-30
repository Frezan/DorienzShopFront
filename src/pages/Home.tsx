import React, { useEffect } from 'react'
import Banner from '../components/customer/home/Banner'
import Informations from '../components/customer/home/Informations';
import ProductShow from '../components/customer/products/ProductShow';
import Category from '../components/customer/home/Category';

function Home() {
  return (
    <>
      <div>
        <Banner />
        <Informations />
      </div>

      <ProductShow filter={'new'} title={'Nouveaux produits'} />
      <Category />
      <ProductShow filter={'promotions'} title={'Produits en promotions'} />
      

    </>
  )
}

export default Home