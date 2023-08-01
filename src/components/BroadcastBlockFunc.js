/**
 * information block with a broadcast list
 * 
 * @param {title} // broadcast block title
 * @param {listLink} // list item object
 * @param {icon} // broadcast icon (Symbol - &#00000;)
 * @param {name} // broadcast name
 * @param {category} // broadcast category
 * @param {href} // link to resource
 * 
 * @public
 */

export default function Broadcast(props) {
    const { listLink, title } = props
    return(
        <>
            <h5 className='info-title'>{title}</h5>
            <ul className="broadcast-list-links">
                {listLink.map(item => 
                    <li className="broadcast-item" key={item.name}>
                        <a className="broadcast-link" href={item.href}>
                            <span className="broadcast-time">{item.icon}</span>
                            <span className="broadcast-program">{item.name}</span>
                            <span className="broadcast-chanel">{item.category}</span>
                        </a>
                    </li>
                )}
            </ul>
        </>
    )
}