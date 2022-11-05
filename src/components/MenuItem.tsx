import IMenuItem from '../interfaces/IMenuItem'

function MenuItem({ href, title, onClick } : IMenuItem) {
    return (
        <li className="menu_item">
            <a href={href} className="menu_item__link" onClick={() => onClick}>{title}</a>
        </li>
    )
}

export default MenuItem