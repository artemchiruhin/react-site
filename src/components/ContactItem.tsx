import React from 'react'
import IContactItem from '../interfaces/IContactItem'

function ContactItem({ href, className, icon }: IContactItem) {
    return (
        <a href={href} className={className}>
            <i className={icon}></i>
        </a>
    )
}

export default ContactItem