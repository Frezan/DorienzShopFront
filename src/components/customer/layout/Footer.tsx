import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Qui somme nous ?</h4>
                        <span>

                            DorienzShop
                            est un site de ventes de mtériel informatique en ligne. </span>
                    </div>
                    {/* Column2 */}
                    <div className="col">

                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Informations : </h4>
                        <ul className="list-unstyled">

                            <li><Link className='footerlink' to='/mentionsLegales'>Mentions Légales</Link></li>
                            <li><Link className='footerlink' to="/politique/confidentialite">Politiques de confidentialités</Link></li>
                            <li><Link className='footerlink' to="/conditionsVentes">Conditions générales de ventes</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm footerRigth">
                        &copy;{new Date().getFullYear()} DorienzShop | All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer