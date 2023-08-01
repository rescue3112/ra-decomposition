/**
 * Information block of the most visited resources
 * 
 * @param {title} // Visit block title
 * @param {listLink} // list item object
 * @param {text} // normal link text
 * @param {bold} // highlighted link text
 * @param {href} // link to resource
 * 
 * @public
 */

export default function Visit(props) {
    const { listLink, title } = props
    return(
        <>
            <h5 className='info-title'>{title}</h5>
            <ul className="visit-list-links">
                {listLink.map(item => 
                    <li className="visit-list-item" key={item.text}>
                        <a className="visit-link" href={item.href}>
                            <span className="text-bold">{item.bold}</span>
                            -
                            <span className="text">{item.text}</span>
                        </a>
                    </li>
                )}
            </ul>
        </>
        
    )
}