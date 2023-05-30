import React from 'react'
import './ProductDetail.scss'

//@ts-ignore
import { products } from '../../../services/products/products.js';
import cartImg from '/assets/img/cart.png'
import { useParams } from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProductDetail = () => {
    let productId = useParams()
    const oneProduct = products[0];
  
    return (
        <div className="container">
            <div className=' productDetail row'>
                <div className='col-md-5 col-sm-12'>
                    <div className='productImg'>
                    <img src={"/assets/img/" +"computer.png" /*oneProduct.img1*/} />
                    </div>
                </div>


                <div className='col-md-6 col-md-offset-1 col-sm-12 col-xs-12'>
                    <h2 className='productTitle'>{oneProduct.name}
                        <p><small className='brand'>Product by {oneProduct.brand}</small></p>
                    </h2>
                    <p>
                            {oneProduct.summarize}
                    </p>
                    <hr></hr>
                    <h3 className='productPrice'>{oneProduct.price} € </h3>
                    

                    <div className="certified">
                        <ul>
                            <li>
                                <p>Livraisons<span>7 jours sur 7</span></p>
                            </li>
                            <li>
                                <p>Certifié<span>Qualités Assuré</span></p>
                            </li>
                        </ul>
                    </div>
                    <hr></hr>
                    <div>
                        <button type="button" className="btn btn-danger bg-btn-danger"> <FontAwesomeIcon className='imgFooter' icon={faCartShopping} />  Ajouter au panier</button>
                    </div>

                </div>
                <div className='infodivDetail col-12 col-sm-12 col-lg-12'>
                    <h1 className='infoTitle'>Description</h1>
                    {oneProduct.description}
                </div>
                
                <div className='infodivDetail col-12 col-sm-12 col-lg-12'>
                    <h1 className='techTitle'>Caractéristique techniques</h1>
                    {oneProduct.descriptionTech}
                </div>

            </div>

        <br/>
        <br/>

        </div>
    )
}

export default ProductDetail