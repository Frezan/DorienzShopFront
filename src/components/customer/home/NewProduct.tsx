import React from 'react'
//@ts-ignore
import { products } from '../../../services/products/products.js';
import computerImg from '/assets/img/computer.png'
import cartImg from '/assets/img/cart.png'

import "./NewProduct.scss"

const NewProduct = () => {
    return (
        <div className='newProductDiv'>
            <div >
                <h1 className='newProductTitle'>Les Nouveautés</h1>
                <ul className="newProductList">
                    {products.map((element: any) => {
                        return (
                        <li className='newProductItem'>
                            <img src={computerImg} width={145} height={70} />
                           <p>{element.name}</p>
                           <small>{element.description}</small> 
                           <p className="newProductItemFooter"><span >{element.price}€</span> <img src={cartImg} width={30} height={30} /></p> 
                        </li>
                    )
                    })}
                </ul>
            </div>


        </div>
    )
}

export default NewProduct