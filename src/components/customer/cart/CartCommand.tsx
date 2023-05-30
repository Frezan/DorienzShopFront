import React, { useContext } from 'react'
import './CartCommand.scss'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
//@ts-ignore
import { firstLetterInUpperCase } from '../../../services/utility/function.js'


const CartCommand = () => {

    const { cart }: any = useContext(CartContext);
    let totalPrice = 0
    if (cart && cart.length > 0) {
        cart.map((element: any) => {
            totalPrice = totalPrice + (element.price * element.quantity)
        })
        console.log("total price ===>", totalPrice)
    }

    return (
        <div className='container'>
            <div className='row'>

                <div className='col-lg-8'>

                    <h1 className='cartCommandTitle'>Indiquez une adresse de livraison</h1>
                    <form className='addressForm' action='/panier/paiement'>

                        <div className="form-group">
                            <label htmlFor="inputAddress">Adresse*</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Complément d'Addresse</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            <small id="emailHelp" className="form-text text-muted">ex : Numéro d'apartement , code d'accès, etc...</small>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputZip">Code Postal*</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">Ville*</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>

                            <div className="form-group col-md-2">
                                <label htmlFor="inputCountry">Pays*</label>
                                <input type="text" className="form-control" id="inputCountry" />
                            </div>

                            <p className='conditions'>J'accepte les conditions générales de ventes, indiquée <Link to="/conditionsVentes">ici</Link>.</p>
                        </div>
                        <div className="formAddressBtn">
                            <button className="btn btn-outline-danger" ><Link to='/'>Annuler</Link></button>
                            <button className="btn btn-outline-danger" > <Link to='/panier/paiement'>Suivant</Link></button>
                        </div>

                    </form>


                </div>
                <div className='col-sm-3'>
                    <div className='cartItemsSummary'>
                        <h2>Panier</h2>
                        <ul>
                            {cart.map((element: any, index: number) => {

                                return (
                                    <li className='cartItems' key={index}>
                                        <small>{firstLetterInUpperCase(element.name)}</small>
                                        <small>{element.price}</small>
                                        <small>x<span>{element.quantity}</span></small>
                                    </li>
                                );
                            })
                            }
                        </ul>
                        <div className='liner'></div>
                        <p className='cartTotal'><strong>TOTAL</strong> {totalPrice} €</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartCommand