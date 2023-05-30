import React, { useEffect, useState } from 'react'
import './ProfilDisplay.scss'
import Commandes from './Commandes'
import Informations from './Informations'
import ProfilMenu from './ProfilMenu'

const ProfilDisplay = () => {
    const [menu, setMenu] = useState<string>('informations');


    const handleClick = (valeur: string) => {
        setMenu(valeur);
    }
    useEffect(() => {
        console.log(menu)
    }, [menu]);
    return (
        <div className='profilMain'>
            <ProfilMenu handleClick={handleClick} />

            {
                menu === 'informations' &&
                <Informations />

            }

            {
                menu === 'commandes' &&
                <Commandes />
            }
        </div>
    )
}

export default ProfilDisplay