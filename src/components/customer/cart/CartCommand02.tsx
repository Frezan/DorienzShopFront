import React, { useContext } from 'react';
import './CartCommand02.scss';
import cardImg from '/assets/img/card.png'
//@ts-ignore
import { firstLetterInUpperCase } from '../../../services/utility/function.js';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartCommand02 = () => {
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
                    <h1 className='cartCommandTitle'> Indiquez vos informations de paiements</h1>

                    <form className='cardForm' action='/'>

                        <div className='cardDisplay'>
                            <div className='cardTitle'>
                                <p>Votre carte bancaire</p>
                                <img src={cardImg} width={40} height={40} />
                            </div>
                            <div className="form-group">

                                <input type="text" className="form-control" id="cardNumber" placeholder="Numéro de carte*" />
                            </div>
                            <div className="form-row">
                                <div className='col-md-6'>
                                    <input type="text" className="form-control" id="expireDate" placeholder="Date d'expiration" />
                                </div>
                                <div className='col-md-6'>
                                    <input type="text" className="form-control" id="cryptogramme" placeholder='Cryptogramme*' />
                                </div>

                            </div>
                            <div className='cardFormSpacer' ></div>

                            <div className="form-group ">
                                <div>

                                    <input type="text" className="form-control" id="titulaire" placeholder='Titulaire*' />
                                </div>

                            </div>
                        </div>

                        <div className="formAddressBtn">
                            <button className="btn btn-outline-danger" ><Link to='/'>Annuler</Link></button>
                            <button className="btn btn-outline-danger" ><Link to='/'>Suivant</Link></button>
                        </div>
                    </form>
                </div>

                <div className='col-sm-3'>
                    <div className='cartItemsSummary'>
                        <h2>Panier</h2>
                        <ul className='cartItemsList'>
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


    );
}

export default CartCommand02