import React from 'react'

import './Navbar02.scss'
import { Link } from 'react-router-dom'

const Navbar02 = () => {
    return (
        <div className='navbar02'>
            <ul className="navbarInfoMenu">
                <li>
                    <Link to='/produitsListe'>Nos Produits</Link>
                </li>
                <li>
                    <Link to='/contact'>Nous Contactez</Link>
                </li>
            </ul>

        </div>
    )
}

export default Navbar02