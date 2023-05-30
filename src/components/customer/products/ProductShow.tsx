import React, { useContext } from 'react'
//@ts-ignore
import { products } from '../../../services/products/products.js';
// @ts-ignore
import { firstLetterInUpperCase } from '../../../services/utility/function.js'

import { modifyCart } from '../../../services/cart/cart';
import { CartContext } from '../../context/CartContext';

import { Link } from 'react-router-dom';
import ProductListTags from './ProductListTags';
import { faCartShopping, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import './ProductShow.scss'

const ProductShow = ({ filter, title }: any) => {

    const { cart, setCart }: any = useContext(CartContext);
    const addToCart = (element: any) => {
        modifyCart(element, 'add');

        let inCart = false;

        let oldState = [...cart];
        oldState.map((item, index) => {
            if (element.productId === item.productId) {
                oldState[index].quantity = oldState[index].quantity + 1
                inCart = true
            }
        })
        if (inCart === false) {
            setCart([...cart, element])
        }
        else {
            setCart(oldState)
        }

        Store.addNotification({
            title: "Sucess!",
            message: "Le produit a bien était ajouté au panier",
            type: "success",
            insert: "top",
            container: "bottom-center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }

    const addTag = (tags: any) => {
    }

    return (
        <div className='productShowMain container'>
            <div className='productShowText'>
                <h2>{title}</h2>
            </div>
            <div className='productListShow'>
                <ul className="filteredProductShow">
                    {products.map((element: any) => {
                        let euro = element.price.toString().split('.');
                        if (euro[1] == undefined) {
                            euro[1] = "00";
                        }
                        // 
                        //    
                        return (
                            <li key={element.id} className='productShow'>

                                <div className='productListShowInfoDiv'>
                                    <Link to={'/produitDetails/' + element._id}>
                                        <div className='producListImgDiv'>

                                            <img src={"/assets/img/computer.png" /*element.img1*/} className="productMainImg" />
                                        </div>
                                        <p className='productListShowTitle'>
                                            {firstLetterInUpperCase(element.name)}
                                        </p>
                                    </Link>
                                    <div>
                                        {element.tags &&
                                            element.tags.map((tag: any, index: any) => {
                                                return (
                                                    <span className='productListShowTags' onClick={() => { addTag(tag.value) }}>
                                                        <ProductListTags tags={tag} key={index} />

                                                        {
                                                            element.tags.length - 1 != index && <small> - </small>
                                                        }
                                                    </span>

                                                )
                                            })
                                        }
                                    </div>
                                    <div>
                                        <p className='productListShowSummarize'>
                                            {element.description.length > 100 ? element.description.substring(0, 100) + '...' : element.description}
                                        </p>
                                    </div>
                                    <div className='productListShowFooter'>
                                        <div className='porductListPrice'>
                                            <p >{euro[0]}€ <sup>{euro[1]}</sup></p>
                                        </div>
                                        <div className='productListShowBtn'>
                                            <button onClick={() => { addToCart(element) }} type="button" className="btnCart btn-danger"> <FontAwesomeIcon icon={faCartShopping} /></button>
                                            {/*<button type="button" className="btn-danger"> <FontAwesomeIcon icon={faCircleInfo} /> </button>*/}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProductShow