import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const url = process.env.REACT_APP_URl;
import './ConnectionForm.scss';
import AuthContext from '../../context/AuthContext';
import { login } from '../../../services/service/auth/authService.service';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import { Store } from 'react-notifications-component';


const ConnectionForm = () => {

    const [email, setEmail] = useState<string>('');

    const [motdepasse, setMotdepasse] = useState<string>('');

    const [errors, setErrors] = useState<string>('');

    const [cookies, setCookies] = useCookies(['token']);

    const { setUser }: any = useContext(AuthContext)

    const navigate = useNavigate()


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const checkEmail = /^[\w-+\.]+@([\w-+]+\.)+[\w-]{2,4}$/g

        if (!email.match(checkEmail)) {
            return setErrors("Email not valid")
        }
        if (email != " " && motdepasse != " ") {

            try {
                let payload = {
                    "email": email,
                    "password": motdepasse
                }

                let connection = await login(payload).then(
                    result => {
                        return result
                    }
                )
                if (connection.data && connection.data && connection.data.token) {
                    let token = connection.data.token
                    let decoded: any = jwt_decode(token);
                    setCookies('token', token, { path: "/", secure: false, sameSite: 'lax', maxAge: 30 * 60});
                    setUser(decoded);

                    Store.addNotification({
                        message: "Vous vous êtes bien connecté.",
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
                else {
                    setErrors(connection.message)
                }
            }
            catch (err: any) {
                console.log("errr ===>", err)
            }

        }
        else {
            setErrors('Aucun compte avec cet email');
        }
    }

    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }} >
                <div className='inputFormDiv'>
                    <label htmlFor="email">Email*</label>
                    <input className="inputForm" id="email" type="text" onChange={(e) => { setEmail(e.target.value.toString()) }} required />
                </div>

                <div className='inputFormDiv'>
                    <label htmlFor="motdepasse">Mot de Passe*</label>
                    <input className="inputForm" id="motdepasse" type="password" onChange={(e) => { setMotdepasse(e.target.value.toString()) }} required />

                </div>

                <div className='btnDiv'>
                    <input className="btn btn-outline-danger" type="submit" value='Connexion' />
                    <span className="errors">{errors}</span>
                </div>
            </form>
            <p><Link className="resetPassword" to="/resetPassword">Mot de passe oublié ?</Link> </p>
            <p className='informationDiv'>
                Pas encore inscris ?<Link className='inscriptionLink' to="/inscription">Inscrivez-vous</Link>
            </p>
        </div>
    )
}

export default ConnectionForm
