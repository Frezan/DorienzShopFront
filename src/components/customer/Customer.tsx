import React, { useContext } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from '../../pages/Home';
import NosProduits from '../../pages/NosProduits';
import Inscription from '../../pages/Inscription';
import Connection from '../../pages/Connection';
import MentionsLegales from '../../pages/MentionsLegale';
import Contact from '../../pages/Contact';
import Profil from '../../pages/Profil';
import Cart from './cart/Cart';
import CartCommand from './cart/CartCommand';
import CartCommand02 from './cart/CartCommand02';
import ProductDetail from './products/ProductDetail';
import DonnePerso from '../../pages/DonnePerso';
import ConditionsVentes from '../../pages/ConditionsVentes';
import './Customer.scss';
import PageNotFound from '../../pages/PageNotFound';
import NavBarPage from '../../pages/NavBarPage';
import CartContextProvider from '../context/CartContext';
import AuthContext from '../context/AuthContext';
import PrivateRoutes from '../utils/PrivatesRoutes';

const Customer = () => {
    const {user}:any = useContext(AuthContext)

    return (
        <div className='cstPage'>

            <React.Fragment >

                <CartContextProvider>
                    <NavBarPage />
                    <Routes>
                        <Route index path='/' element={<Home />} />
                        <Route path='/produitsListe' element={<NosProduits />} />
                        <Route path='/produitDetails/:productId' element={<ProductDetail />} />
                        <Route path='/inscription' element={<Inscription />} />
                        <Route path='/connection' element={<Connection />} />
                        <Route path='/mentionsLegales' element={<MentionsLegales />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/panier' element={<Cart />} />
                        <Route path='/panier/addresse' element={<CartCommand />} />
                        <Route path='/panier/paiement' element={<CartCommand02 />} />
                        <Route path='/conditionsVentes' element={<ConditionsVentes />} />
                        <Route path='/politique/confidentialite' element={<DonnePerso />} />
                        
                        <Route element={<PrivateRoutes />}>
                            <Route path='/profil/:userId' element={<Profil />} />
                        </Route>

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </CartContextProvider>
            </React.Fragment>
        </div>

    )
}

export default Customer