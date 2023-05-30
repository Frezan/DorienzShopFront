import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../../services/service/auth/authService.service';
import './InscriptionForm.scss'
import { Store } from 'react-notifications-component';

const InscriptionForm = () => {
    const navigate = useNavigate()

    const [nom, setNom] = useState<string>('');
    const [prenom, setPrenom] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [motdepasse, setMotdepasse] = useState<string>('');
    const [confirmMotdepasse, setConfirmMotdepasse] = useState<string>('');
    const [gender, setGender] = useState<string>('')

    const [errors, setErrors] = useState<string>('')



    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const checkEmail = /^[\w-+\.]+@([\w-+]+\.)+[\w-]{2,4}$/g;
        const checkpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g

        if (!email.match(checkEmail)) {
            return setErrors("Email not valid")
        }

        if (nom != "" && prenom != "" && email != "" && motdepasse != "" && confirmMotdepasse != "" && gender != "") {
            if (motdepasse === confirmMotdepasse) {
                if (!motdepasse.match(checkpassword)) {
                    setErrors("Pasword must have at least eight characters, at least one uppercase letter, one lowercase letter and one number")
                }
                else {

                    let payload = {
                        title: gender,
                        lastName: nom,
                        firstName: prenom,
                        email: email,
                        password: motdepasse
                    }
                    let newUser = await createUser(payload).then(result => {
                        if (result.status != 'failure') {
                            return result.data
                        }
                        else {
                            return result
                        }

                    })
                    if (newUser.userId) {

                        Store.addNotification({
                            message: "Votre compte a bien était créer.",
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

                        navigate('/connection')
                    }
                    else {
                        setErrors(newUser.errors)
                    }
                }
            }
            else {
                setErrors('Vous deux mot de passe ne correspondent pas.')
            }
        }
        else {
            setErrors('Vous devez remplir tous les champs')
        }
    }


    return (
        <form onSubmit={(e) => { handleSubmit(e) }} >


            <label htmlFor='title'>Titre* : </label>
            <div className="radio-inlineInfoConnection">
                <label >
                    <input type="radio" name="title" value="mr" onChange={(e) => { setGender(e.target.value) }} />Mr
                </label>
                <label>
                    <input type="radio" name="title" value="mme" onChange={(e) => { setGender(e.target.value) }} />Mme
                </label>
            </div>

            <div className='inputFormInscriptDiv'>
                <label htmlFor="prenom">Prénom* :</label>
                <input className="inputForm" id="prenom" type="text" onChange={(e) => { setPrenom(e.target.value) }} />
            </div>
            <div className='inputFormInscriptDiv'>
                <label htmlFor="nom">Nom* :</label>
                <input className="inputForm" id="nom" type="text" onChange={(e) => { setNom(e.target.value) }} />
            </div>
            <div className='inputFormInscriptDiv'>
                <label htmlFor="email">Email* :</label>
                <input className="inputForm" id="email" type="text" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className='inputFormInscriptDiv'>
                <label htmlFor="motdepasse">Mot de Passe* :</label>
                <input className="inputForm" id="motdepasse" type="password" onChange={(e) => { setMotdepasse(e.target.value) }} />
            </div>
            <div className='inputFormInscriptDiv'>
                <label htmlFor="confirmmotdepasse">Confirmez Mot de Passe* :</label>
                <input className="inputForm" id="confirmmotdepasse" type="password" onChange={(e) => { setConfirmMotdepasse(e.target.value) }} />

            </div>
            <input className="connectionLink btn btn-outline-danger" type="submit" value='Inscription' />
            <span className="errorsInscription">{errors}</span>
        </form>
    )
}

export default InscriptionForm