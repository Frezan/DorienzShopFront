import React, { useContext } from 'react'
import './Cart.scss';
import trashImg from '/assets/img/trash.png'
//@ts-ignore
import { firstLetterInUpperCase } from '../../../services/utility/function.js'
import { Link } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../../context/CartContext';
import { modifyCart, removeCart, removeFromCart } from '../../../services/cart/cart';

const Cart = () => {
    const { cart, setCart }: any = useContext(CartContext);

    let totalPrice = 0
    let totalArticle = 0
    if (cart && cart.length > 0) {
        cart.map((element: any) => {
            totalPrice = totalPrice + (element.price * element.quantity)
            totalArticle = totalArticle + element.quantity
        })
        console.log("total price ===>", totalPrice)
    }


    const deleteCart = () => {
        if (confirm("Cette action de suppression videra votre panier. Voulez-vous continuer ?")) {
            removeCart();
            setCart([])
        }
    }

    const changeCart = (element: any, action: string) => {
        let oldState = [...cart];
        if (action === 'add') {
            oldState.map((item, index) => {
                if (element.productId === item.productId) {
                    oldState[index].quantity = oldState[index].quantity + 1
                }
            })
            modifyCart(element, 'add');
        }
        else {
            oldState.map((item, index) => {
                if (element.productId === item.productId) {
                    oldState[index].quantity = oldState[index].quantity - 1

                    if (oldState[index].quantity < 1) {
                        oldState.splice(index, 1);
                    }
                }
            })
            modifyCart(element, 'remove');
        }
        setCart(oldState)
    }

    const removeItemFromCart = (element: any) => {
        removeFromCart(element)
        let oldState = [...cart];
        oldState.map((item, index) => {
            if (element.productId === item.productId) {
                oldState.splice(index, 1);
            }
        })
        setCart(oldState)
    }

    return (
        <div className='container'>
            {cart && cart.length > 0 ?
                <div className='row'>

                    <div className='col-lg-8'>
                        <div className='cartTitle'>
                            <h1>Votre Panier : {cart.length}</h1>
                        </div>
                        <div className='cartContent'>

                            <table className='cartTab' cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nom</th>
                                        <th>Quantité </th>
                                        <th>Sous-total </th>
                                        <th className='cartDelete'><FontAwesomeIcon onClick={() => { deleteCart() }} icon={faTrash} /></th>
                                    </tr>

                                </thead>
                                <tbody>



                                    {cart.map((element: any, index: any) => {

                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <img src={"/assets/img/" + "computer.png" /*element.img1*/} className='cartImg' />
                                                </td>
                                                <td className='cartProductName'>
                                                    {firstLetterInUpperCase(element.name)}
                                                </td>
                                                <td>
                                                    <span className='cartAction' onClick={() => { changeCart(element, 'remove') }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                                                        </svg>
                                                    </span>

                                                    <span> {element.quantity} </span>
                                                    <span className='cartAction' onClick={() => { changeCart(element, 'add') }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                                        </svg>
                                                    </span>

                                                </td>
                                                <td>
                                                    {element.price * element.quantity} €
                                                </td>
                                                <td>
                                                    <span onClick={() => { removeItemFromCart(element) }} className='cartAction'>X</span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <button className="productBtn btn btn-danger" > <Link to='/produitsListe'>Continuer vos achats</Link></button>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className='totalCart'>
                            <h2>Commande </h2>
                            <p> Montant Total de votre Panier  : {totalPrice}</p>
                            <p>{totalArticle} articles en tout.</p>
                            <small></small>
                            <button className="cartBtn btn btn-danger"> <Link to='/panier/addresse'>Passer Commande</Link></button>
                        </div>

                    </div>
                </div>
                :
                <h2 className='cartEmpty'>
                    Il semblerait que votre panier soit vide.
                </h2>
            }
        </div>
    )
}

export default Cart 