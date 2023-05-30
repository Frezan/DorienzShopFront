import React from 'react'
import './ContactDisplay.scss'

const ContactDisplay = () => {
    return (
        <div className="contactDisplay">
            <div>
                Voici comment nous contacter :
            </div>

            <div>
                Par Email :
                        <p> admohamme@gmail.com</p>
            </div>
            <div>

                Par Telephone:
                        <p> +07 58 58 58 58 58</p>
            </div>
        </div>
    )
}

export default ContactDisplay