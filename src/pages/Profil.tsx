import React, { useEffect, useState } from 'react'
import Commandes from '../components/customer/profil/Commandes';
import Informations from '../components/customer/profil/Informations';
import ProfilMenu from '../components/customer/profil/ProfilMenu'
import ProfilDisplay from '../components/customer/profil/ProfilDisplay';
import {Helmet} from "react-helmet-async";


const Profil = () => {
    return (

        <>
        <Helmet>
                <title>Dorienz Shop - Profil</title>
                <meta name="description" content="Consulez votre profil sur Dorienz Shop."/>
            </Helmet>
            <ProfilDisplay />
        </>
    )
}

export default Profil