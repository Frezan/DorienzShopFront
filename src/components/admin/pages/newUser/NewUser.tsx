import React from 'react'
import './NewUser.scss';


const NewUser = () => {

    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
        {/*
                <div className="newUserItem">
                    <label>Titre</label>
                    <div className='newUserRadio'>
                        <label htmlFor="Mr" >Mr</label>
                        <input type="radio" name="Mr" id="Mr" value="Mr" />

                        <label htmlFor="Mme" >Mme</label>
                        <input type="radio" name="Mme" id="Mme" value="Mme" />

                        <label htmlFor="Dr" >Dr</label>
                        <input type="radio" name="Dr" id="Dr" value="Dr" />

                        <label htmlFor="Autre" >Autre</label>
                        <input type="radio" name="Autre" id="Autre" value="Autre" />
                    </div>


                </div>
    */}
               
                <div className="newUserItem">
                    <label >Prénom:</label>
                    <input type="text" placeholder='firstName' />
                </div>
                <div className="newUserItem">
                    <label >Nom:</label>
                    <input type="text" placeholder='lastName' />
                </div>
                <div className="newUserItem">
                    <label >Email:</label>
                    <input type="text" placeholder='email' />
                </div>
                <div className="newUserItem">
                    <label >Téléphone:</label>
                    <input type="text" placeholder='phone' />
                </div>
                <div className="newUserItem">
                    <label >Password:</label>
                    <input type="text" placeholder='password' />
                </div>
                <div className="newUserItem">
                    <label >Rue:</label>
                    <input type="text" placeholder='street' />
                </div>
                <div className="newUserItem">
                    <label >Zip Code:</label>
                    <input type="text" placeholder='zip code' />
                </div>
                <div className="newUserItem">
                    <label >Ville:</label>
                    <input type="text" placeholder='city' />
                </div>
                <div className="newUserItem">
                    <label >Region:</label>
                    <input type="text" placeholder='region' />
                </div>
                <div className="newUserItem">
                    <label >Pays:</label>
                    <input type="text" placeholder='country' />
                </div>
                <div className="newUserItem">
                    <label >Sexe:</label>
                    <div className='newUserRadio'>
                        <label htmlFor='Male' >Male</label>
                        <input type="radio" name="Male" id="Male" value="Male" />
                        <label htmlFor='Female' >Female</label>
                        <input type="radio" name="Female" id="Female" value="Female" />
                    </div>

                </div>
                <div className="newUserItem">
                    <label htmlFor="role">Role:</label>

                    <select name="role" id="role" className='newUserSelect'>
                        <option value="ROLE_USER">Utilisateur</option>
                        <option value="ROLE_ADMIN">Administrateur</option>
                    </select>
                </div>

                <button className="newUserBtn">Create</button>
            </form>
        </div>
    )
}

export default NewUser
