import React, { useContext, useEffect, useState } from 'react'
import './ProductList.scss'
//@ts-ignore
import { categories } from '../../../services/category/categories.js';
//@ts-ignore
import { products } from '../../../services/products/products.js';
// @ts-ignore
import { firstLetterInUpperCase } from '../../../services/utility/function.js'

import SousCatFilter from './SousCatFilter';
import { Link } from 'react-router-dom';
import ProductListTags from './ProductListTags';
import { faCartShopping, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { modifyCart } from '../../../services/cart/cart';
import { CartContext } from '../../context/CartContext';
import { Store } from 'react-notifications-component';



const ProductList = () => {
    const postPerPage = 9;

    const [showNavbar, setShowNavbar] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
    const mountedStyle = { animation: "inAnimation 250ms ease-in" };
    const unmountedStyle = {
        animation: "outAnimation 270ms ease-out",
        animationFillMode: "forwards"
    };

    const totalPage = Math.ceil(products.length / postPerPage);
    const { cart, setCart }: any = useContext(CartContext);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1000);
    };

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);

    }
    const addTag = (tags: any) => {
    }

    const changePage = (number: number) => {
        setCurrentPage(number)
    }

    const setPage = (value: string) => {
        if (value === 'last') {
            setCurrentPage(totalPage);
        }
        else {
            setCurrentPage(1);
        }
    }


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

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    return (
        <div className='mainList'>
            {isDesktop ? (
                <div className='filterDiv'>
                    <h5>Affiner vos recherches</h5>

                    <div className="separator"></div>

                    <div className='filterOptions'>
                        <div className="checkbox">
                            <label className='filterLabel'>   <input type="checkbox" value="nouveautés" /> Nouveautés</label>
                        </div>
                        <div className="checkbox">
                            <label className='filterLabel'>  <input type="checkbox" value="promotions" /> Promotions</label>
                        </div>
                    </div>
                    {
                        categories.map((category: any, key: any) => {

                            return (
                                <>
                                    <p key={key}><em>{category.name}</em></p>
                                    <div className="separator"></div>
                                    <SousCatFilter key={category.id} idCat={category.id} />
                                    <div className='filterOptions'>

                                    </div>

                                </>

                            )


                        })
                    }



                </div>
            ) : (
                <div>
                    <button className='btnShowFilter btn btn-danger btn-outline-btn' onClick={() => { handleShowNavbar() }} >
                        {showNavbar ? "Fermer les filtres" : "Montrer les filtres"}
                    </button>
                    <div style={showNavbar ? mountedStyle : unmountedStyle}>
                        {
                            showNavbar &&
                            <div
                                className='filterShow filterDiv'>
                                <h5>Affiner vos recherches</h5>

                                <div className="separator"></div>

                                <div className='filterOptions'>
                                    <div className="checkbox">
                                        <label className='filterLabel'>   <input type="checkbox" value="nouveautés" /> Nouveautés</label>
                                    </div>
                                    <div className="checkbox">
                                        <label className='filterLabel'>  <input type="checkbox" value="promotions" /> Promotions</label>
                                    </div>
                                </div>
                                {
                                    categories.map((category: any, key: any) => {
                                        return (
                                            <>
                                                <p key={key}><em>{category.name}</em></p>
                                                <div className="separator"></div>
                                                <SousCatFilter key={category.id} idCat={category.id} />
                                                <div className='filterOptions'>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            )}
            <div className='content'>
                <div className='filter'>
                    <div className='filterNumberOfArticle'>
                        <span>{products.length} articles trouvés</span>
                    </div>
                    <div className='filterSort'>
                        <span className='filterSortTitle'>Trier par :</span>
                        <select className='filterSortSelect'>
                            <option value="Lprice">Prix les moins chers</option>
                            <option value="Hprice">Prix les plus chers</option>
                            <option value="sales">Meilleures ventes</option>
                        </select>
                    </div>

                </div>

                <div className='productList'>
                    <ul className=" filteredProduct">
                        {products.map((element: any) => {
                            let euro = element.price.toString().split('.');
                            if (euro[1] == undefined) {
                                euro[1] = "00";
                            }
                            // 
                            //    
                            return (
                                <li key={element.id} className='product'>

                                    <div className='productListInfoDiv'>
                                        <Link to={'/produitDetails/' + element._id}>
                                            <div className='producListImgDiv'>

                                                <img src={"/assets/img/computer.png" /*element.img1*/} className="productMainImg" />
                                            </div>
                                            <p className='productListTitle'>
                                                {firstLetterInUpperCase(element.name)}
                                            </p>
                                        </Link>
                                        <div>
                                            {element.tags &&
                                                element.tags.map((tag: any, index: any) => {
                                                    return (
                                                        <span className='productListTags' onClick={() => { addTag(tag.value) }}>
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
                                            <p className='productListSummarize'>
                                                {element.description.length > 100 ? element.description.substring(0, 100) + '...' : element.description}
                                            </p>
                                        </div>
                                        <div className='productListFooter'>
                                            <div className='porductListPrice'>
                                                <p >{euro[0]}€ <sup>{euro[1]}</sup></p>
                                            </div>
                                            <div className='productListBtn'>
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
                <div className='pagination'>
                    <span className={currentPage != 1 ? 'paginationShortCutActive' : 'paginationShortCutInactive'}
                        onClick={() => { if (currentPage != 1) { setPage('first') } }}
                    >
                        Début
                    </span>
                    {
                        (() => {
                            let container = []
                            for (let i = 1; i <= totalPage; i++) {
                                container.push(
                                    <span className={i === currentPage ? 'currentPage' : ''} onClick={() => { changePage(i) }}>{i}</span>)

                            }

                            return container
                        })()
                    }

                    <span className={currentPage != totalPage ? 'paginationShortCutActive' : 'paginationShortCutInactive'}
                        onClick={() => { if (currentPage != totalPage) { setPage('last') } }}>
                        Fin
                    </span>
                </div>
            </div>

        </div >
    )
}

export default ProductList