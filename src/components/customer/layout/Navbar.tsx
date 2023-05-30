import { useContext } from 'react'

import './Navbar.scss'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser, } from '@fortawesome/free-solid-svg-icons'
import AuthContext from '../../context/AuthContext';


const Navbar = () => {
    const { cart }: any = useContext(CartContext);
    const {user}:any = useContext(AuthContext)
    let cartLength: number = 0;
    cartLength = cart ? cart.length : 0;

    return (
        <nav className="navbarInfo navbar navbar-expand-lg" >
            <h1><Link to='/'> <img className='navbarLogo' src={"/assets/img/logo.png"} ></img>orienz Shop</Link></h1>

            <div className='navbarInfoSearch'>
                <input type="text" />
                <button className='btn btn-danger ml-0'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>


            <div className="navbarInfoOptions">

                <div className="navbarInfoOptions">
                    <Link to='/panier'><button className='navbarCart btn btn-danger'><FontAwesomeIcon className='cartImg' icon={faCartShopping} />
                        </button><span className='badge badge-warning' id='lblCartCount'>{cartLength}</span>
                    </Link>
                    {
                        user && user.userId ? 
                        <Link className="endOfmenu" to={`/profil/${user.userId}`}><button className='btn btn-danger'><FontAwesomeIcon icon={faUser} /></button></Link>
                        :
                        <Link className="endOfmenu" to='/connection'><button className='btn btn-danger'>Connexion</button></Link>
                    }
                   
                </div>
            </div>

        </nav>
    )
}

export default Navbar