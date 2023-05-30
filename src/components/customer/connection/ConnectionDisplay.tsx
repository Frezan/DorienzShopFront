import React, { useEffect } from 'react'
import informatiqueLogin from '/assets/img/informatiqueLogin.jpg'
import './ConnectionDisplay.scss';
import ConnectionForm from './ConnectionForm';



const ConnectionDisplay = () => {
  return (
    <div className="connectForm">
    <div className="connectionDiv">
        <div className='connectionForm'>
            <h1>Connexion</h1>
            <ConnectionForm />
          
            
        </div>
    </div>
</div>
  )
}

export default ConnectionDisplay