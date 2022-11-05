import React from 'react'
import IContactItem from '../interfaces/IContactItem'
import ContactItem from './ContactItem'

const contactItems: Array<IContactItem> = [
    {
        href: "https://vk.com/artem09521",
        className: "vkontakte",
        icon: "fab fa-vk"
    },
    {
        href: "https://instagram.com/artem_09521",
        className: "instagram",
        icon: "fab fa-instagram"
    },
    {
        href: "https://github.com/artemchiruhin",
        className: "github",
        icon: "fab fa-github"
    }
]

function Contacts() {
    return (
        <div className="contacts">
            { contactItems.map((contact, i) => <ContactItem href={contact.href} className={contact.className} icon={contact.icon} key={i} />) }
        </div>
    )
}

export default Contacts