import React from 'react'
//@ts-ignore
import { products } from '../../../services/products/products.js';
import computerImg from '/assets/img/computer.png'
import cartImg from '/assets/img/cart.png'

import "./Promotions.scss"
import { Link } from 'react-router-dom';

const Promotions = () => {
    return (
        <div className='promotionstDiv'>
            <div >
                <h1 className='promotionstTitle'>Les Promotions</h1>
                <ul className=" promotionstList row ">
                    {products.map((element: any) => {
                        let pricePromotion = 0;
                        if(element.promotionPercentage && element.promotionPercentage>0)
                        {
                            pricePromotion = (element.price * element.promotionPercentage) / 100
                        }
                       


                        let euro = pricePromotion.toString().split('.');
                        let promotion = element.promotion
                        if (euro[1] == undefined) {
                            euro[1] = "00";
                        }

                        if(promotion == true)
                        {
                             return (
                                <li key={element.id} className='promotionstItem col-lg-2'>
                                    <img src={"/assets/img/" + element.img1} className="promotionstImg" />
                                    <p>{element.name}</p>
                                    <small>{element.summarize}</small>
                                    <p className="promotionstItemFooter"><span><del  className='oldPrice' >{element.price}</del>{euro[0]}€<sup>{euro[1].substring(0,2)}</sup></span> <img src={cartImg} /></p>
                                </li>
                            )
                        }
                       
                    })}
                </ul>
                <Link to="/"><button className="homeBtn btnInfo">Voir plus</button></Link>
            </div>


        </div>
    )
}

export default Promotions