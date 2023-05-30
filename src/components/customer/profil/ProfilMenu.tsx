import React, { useContext } from 'react'
import './ProfilMenu.scss'
import profilMenuImg from '/assets/img/profilMenu.png'
import commandMenuImg from '/assets/img/command.png'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import { logout } from '../../../services/service/auth/authService.service'
import { Store } from 'react-notifications-component'
import { useCookies } from 'react-cookie'


const ProfilMenu = ({handleClick}:any) => {

    const {setUser}:any = useContext(AuthContext);
    const navigate = useNavigate()

    const logoutUser = async ()=>{

        let logoutSucess = await logout().then(
            res =>{
                return res;
            }
        )

        if(logoutSucess){
            document.cookie = 'token' + '=; Max-Age=0'
            setUser({});
            Store.addNotification({
                message: "Vous avez bien été déconnecté",
                type: "info",
                insert: "top",
                container: "bottom-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });

            navigate('/')
        }
        else{
            Store.addNotification({
                title:'Failed',
                message: "Une erreur s'est produite!",
                type: "danger",
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
        
    }


    return (
        <div className=' profilMenu'>
            <p> <img src={profilMenuImg} alt="profil Menu" width={30} height={25}  />  <span  onClick={(e)=>{handleClick('informations')}}>Informations</span></p>
            <p> <img src={commandMenuImg} alt="commande Menu" width={30} height={25} />  <span  onClick={ (e)=>{handleClick('commandes')}}>Commandes</span></p>
            <p className='deconnection'>   <span onClick={()=>{logoutUser()}}>Déconnexion</span></p>
            <Link to="/admin"><button className="btn btn-outline-danger rounded-pill" >Connexion Administrateur</button></Link>
        </div>
    )
}

export default ProfilMenu