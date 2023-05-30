import React, { useEffect, useState } from 'react'

import userImg from '../../../../public/assets/img/Jaffar04.jpg';
import { Publish } from '@material-ui/icons';

import './Informations.scss'
import { userProfil } from '../../../services/service/user/user.service';
import { Store } from 'react-notifications-component';
import { useParams } from 'react-router-dom';


const Informations = () => {

    const [userData, setUserData]: any = useState({});
    let newUserData: any = {}

    const { userId } = useParams()
    console.log("USER ID ===>", userId)

    useEffect(() => {

        const profil = async () => {
            let data = await userProfil(userId).then(
                result => {
                    if (result.status != 'failure' && result.status != false) {
                        return result.data
                    }
                    else {
                        Store.addNotification({
                            message: result.errors,
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
            )

            if (data && data.userId) {
                newUserData = { ...userData };
                console.log("DATA ===>", data)

                newUserData = {
                    lastName: data.lastName,
                    firstName: data.firstName,
                    title: data.title,
                    birthday: data.birthday,
                    phone: data.phone,
                    addresses: [
                        {
                            zip: data.addresses && data.addresses[0].zip ? data.addresses[0].zip : '',
                            country: data.addresses && data.addresses[0].country ? data.addresses[0].country : '',
                            street: data.addresses && data.addresses[0].street ? data.addresses[0].street : '',
                            city: data.addresses && data.addresses[0].city ? data.addresses[0].city : '',
                            others: data.addresses && data.addresses[0].others ? data.addresses[0].others : '',

                        }
                    ]
                }
                console.log("newData ===>",newUserData)

                setUserData({...userData, data })

            }

        }

        profil()
            .catch(console.error);

    }, [])

    return (

        <div className='col-sm-10'>
            <div className='container'>


                <h1 style={{ color: '#dc3545' }}>Informations Personnelles</h1>
                <form className='addressForm' action=''>

                    <div className='row'>
                        <div className='row col-md-9'>
                            <div className=' formTop form-group col-md-4'>
                                <label htmlFor='title'>Titre : </label>
                                <div className="radio-inlineInfo">
                                    <label >
                                        <input type="radio" name="title" value="mr"
                                            checked={newUserData && newUserData.title && newUserData.title.toLowerCase() === 'mr'}
                                            onChange={(e) => { newUserData.title = e.target.value }}
                                        />Mr
                                    </label>
                                    <label>
                                        <input type="radio" name="title" value="mme"
                                            checked={newUserData &&  newUserData.title && newUserData.title.toLowerCase() === 'mme'}
                                            onChange={(e) => { newUserData.title = e.target.value }}
                                        />Mme
                                    </label>
                                </div>
                            </div>
                            <div className=' formTop form-group col-md-3'>
                                <label htmlFor='birthday' >Date de naissance : </label>
                                <input type="date"
                                    value={userData && userData.data && userData.data.birthday ? userData.data.birthday : ''}
                                    onChange={(e) => { setUserData({...userData}, { birthday: e.target.value }) }}
                                />
                            </div>
                        </div>

                        <div className='form-group col-md-2'>

                            {/* 
                            <img src={userImg} alt="updatedImg" className="userUpdateImg" />
                            <label htmlFor='file'><Publish className='userUpdateIcon' /></label>
                            <input type="file" id="file" style={{ display: "none" }} />
                            */}
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className="form-group col-md-4">
                            <label htmlFor='inputName'>Nom : </label>
                            <input type="text" className="form-control" id="inputName" placeholder="Nom"
                                value={userData && userData.data && userData.data.lastName ? userData.data.lastName : ''}
                                onChange={(e) => { setUserData({...userData}, { lastName: e.target.value }) }}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor='inputFirstName'>Prénom : </label>
                            <input type="text" className="form-control" id="inputFirstName" placeholder="Prénom"
                                value={userData && userData.data && userData.data.firstName ? userData.data.firstName : ''}
                                onChange={(e) => { setUserData({...userData}, { firstName: e.target.value }) }}
                            />
                        </div>

                        <div className="form-group col-md-2">
                            <label htmlFor='inputPhone'>Telephone : </label>
                            <input type="text" className="form-control" id="inputPhone" placeholder="Telephone"
                                value={userData && userData.data && userData.data.phone ? userData.data.phone : ''}
                                onChange={(e) => { setUserData({...userData}, { phone: e.target.value }) }}
                            />
                        </div>
                    </div>
                    <div className="form-row">

                        <div className="form-group col-md-4">
                            <label htmlFor='inputZip'>Code Postal : </label>
                            <input type="text" className="form-control" id="inputZip" placeholder='Code Postal'
                                value={userData && userData.data && userData.data.addresses[0].zipCode ?
                                    userData.data.addresses[0].zipCode : ''}
                                onChange={(e) => {
                                    setUserData({...userData}, {
                                        addresses: [
                                            {
                                                country: userData.data.country, others: userData.data.others, city: userData.data.city,
                                                zipCode: e.target.value, street: userData.data.street
                                            }]
                                    }
                                    )
                                }}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor='inputCity'>Ville : </label>
                            <input type="text" className="form-control" id="inputCity" placeholder='Ville'
                                value={userData && userData.data && userData.data.addresses ? userData.data.addresses[0].city : ''}
                                onChange={(e) => {
                                    setUserData({...userData}, {
                                        addresses: [
                                            {
                                                country: userData.data.country, others: userData.data.others, city: e.target.value,
                                                zipCode: userData.data.zipCode, street: userData.data.street
                                            }]
                                    }
                                    )
                                }
                                }
                            />
                        </div>

                        <div className="form-group col-md-2">
                            <label htmlFor='inputCountry'>Pays : </label>
                            <input type="text" className="form-control" id="inputCountry" placeholder='Pays'
                                value={userData && userData.data && userData.data.addresses ? userData.data.addresses[0].country : ''}
                                onChange={(e) => {
                                    setUserData({...userData}, {
                                        addresses: [
                                            {
                                                country: e.target.value, others: userData.data.others, city: userData.data.city,
                                                zipCode: userData.data.zipCode, street: userData.data.street
                                            }]
                                    }
                                    )
                                }}
                            />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className="form-group col-md-5">
                            <label htmlFor='inputAddress'>Addresse : </label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Addresse"
                                value={userData && userData.data && userData.data.addresses ? userData.data.addresses[0].street : ''}
                                onChange={(e) => {
                                    setUserData({...userData}, {
                                        addresses: [
                                            {
                                                country: userData.data.country, others: userData.data.others, city: userData.data.city,
                                                zipCode: userData.data.zipCode, street: e.target.value
                                            }]
                                    }
                                    )
                                }
                                }
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor='inputComplement'>Complément Addresse : </label>
                            <input type="text" className="form-control" id="inputComplement" placeholder="Others address informations"
                                value={userData && userData.data && userData.data.addresses ? userData.data.addresses[0].others : ''}
                                onChange={(e) => {
                                    setUserData({...userData}, {
                                        addresses: [
                                            {
                                                country: userData.data.country, others: e.target.value, city: userData.data.city,
                                                zipCode: userData.data.zipCode, street: userData.data.street
                                            }]
                                    }
                                    )
                                }}
                            />
                        </div>

                    </div>
                    <div className="formInfosBtn">
                        <button className="btn btn-outline-danger" >Annuler</button>
                        <button type="submit" className="btn btn-outline-danger" >Modifier</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Informations