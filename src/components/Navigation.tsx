import React from 'react'

import IMenuItem from '../interfaces/IMenuItem'
import MenuItem from './MenuItem'

const menuItems: Array<IMenuItem> = [
    {
        href: "#second_section",
        title: "До/после",
        onClick: function(e: MouseEvent) {
            console.log(321);
            
        }
    },
    {
        href: "#third_section",
        title: "Drag'n'drop",
        onClick: clickHandler
    },
    {
        href: "#fourth_section",
        title: "Hover доска",
        onClick: clickHandler
    },
    {
        href: "#fifth_section",
        title: "Многоэтапная форма",
        onClick: clickHandler
    },
    {
        href: "#sixth_section",
        title: "Форма входа",
        onClick: clickHandler
    }
]

function clickHandler(e: MouseEvent) {
    e.preventDefault();
    console.log(e.target);
    console.log(587);
    
    
	/*const href = e.target.getAttribute('href').slice(1);

	document.getElementById(href).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});*/
}

function Navigation() {
    return (
        <nav>
            <ul className="menu">
                { menuItems.map((item, i) => <MenuItem href={item.href} title={item.title} key={i} onClick={() => console.log(321)
                } />) }
            </ul>
        </nav>
    )
}

export default Navigation