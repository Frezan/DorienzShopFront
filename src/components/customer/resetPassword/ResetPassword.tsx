import React, { useState } from 'react'

const ResetPassword = () => {
    const [email, setEmail] = useState<string>('');
    const handleClick= () =>{
        
    }

  return (
    <div>
        <h1>Mot de passe oublié</h1>
        <p>Entrer votre addresses email : </p>
        <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
        <button className='btn btn-danger' onClick={()=>{handleClick()}}>Envoyer un email pour changer de mot de passe </button>
    </div>
  )
}

export default ResetPassword