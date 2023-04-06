import React from 'react';
import { portfolioInfo } from '../../shared/interfaces';
import './ContactInfo.scss'

export const ContactInfo = (props: portfolioInfo) => {
    return(
        <div className="contactCard">
            <h1>Contact Me</h1><br />
            {props.name} <br/>
            {
                props.emails?.map(email => {
                    return(<><a href={`mailto: ${email}`}>{email}</a> <br /> </>)
                })
            }
        </div>
    )
}

export default ContactInfo
