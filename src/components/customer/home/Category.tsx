import React from 'react'

import CpsPC from '/assets/img/CpsPC.png'
import peripheriquePc from '/assets/img/peripheriquePc.jpg';
import pcOrdinateur from '/assets/img/pcOrdinateur.png';
import imgAudio from '/assets/img/imgAudio.jpg';
import gaming from '/assets/img/gaming.jpg';

import './Category.scss'
import { Link } from 'react-router-dom';

const Category = () => {


    return (
        <div className='category'>
            <ul className='categoryList'>
                <li className='categoryItem'>
                    <Link to="/produit/liste">
                        <img src={gaming} alt="gaming Categorie" />
                        <p>Gaming</p>
                    </Link>
                </li>

                <li className='categoryItem'>
                    <Link to="/produit/liste">
                        <img src={pcOrdinateur} alt="gaming Categorie" />
                        <p>PC et Ordinateurs</p>
                    </Link>
                </li>

                <li className='categoryItem'>
                    <Link to="/produit/liste">
                        <img src={imgAudio} alt="gaming Categorie" />
                        <p>Audio et Visuels</p>
                    </Link>
                </li>

                <li className='categoryItem'>
                    <Link to="/produit/liste">
                        <img src={CpsPC} alt="gaming Categorie" />
                        <p>Composants</p>
                    </Link>
                </li>

                <li className='categoryItem'>
                    <Link to="/produit/liste">
                        <img src={peripheriquePc} alt="gaming Categorie" />
                        <p>Accessoires PC</p>
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default Category