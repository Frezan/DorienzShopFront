import React from 'react'
import './Commandes.scss';

const Commandes = () => {
    return (
        <div className='col-sm-10'>
            <div className='container'>


                <h1>Vos Commandes</h1>

                <ul className='commandeDisplay'>
                    <li className='oneCommande' >
                        <div className="commandHeader">
                            <div className='commandHeaderMain'>
                                <div className='commandHeader-left'>
                                    <div className='commandHeader-left-title'>
                                        <div>
                                            <span>
                                                commande effectué le
                                            </span>
                                        </div>
                                        <div >
                                            <span>total</span>
                                        </div>
                                        <div>
                                            <span>livraison à</span>
                                        </div>
                                    </div>
                                    <div className='commandHeader-left-value'>
                                        <div >
                                            <span>
                                                02 Mai 2022
                                            </span>
                                        </div>
                                        <div>
                                            <span>EUR 10.07</span>
                                        </div>
                                        <div>
                                            <span>John Doe</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='commandHeader-rigth'>
                                    <div className='commandHeader-rigth-title'>
                                        <div >
                                            <span>N* de commande</span>
                                        </div>
                                    </div>
                                    <div className='commandHeader-rigth-value'>
                                        <div>
                                            <span>545d5-q45q4d5d-q45qd5qd4</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='commandHeader-actions'>
                                <ul >
                                    <li>
                                        Afficher les détails de la commande
                                    </li>
                                    <li>
                                        Facture
                                    </li>
                                </ul>
                            </div>


                        </div>
                        <div className='commandBody'>
                            
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Commandes