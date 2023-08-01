/**
 * information block with location information
 * 
 * @param {title} // location block title
 * @param {listLink} // list item object
 * @param {text} // link text 
 * @param {href} // link to resource
 * 
 * @public
 */

export default function LocationMap(props) {
    const { listLink, title } = props
    return(
        <>
            <h5 className='info-title'>{title}</h5>
            <ul className="loacation-map-list-links">
                {listLink.map(item => 
                    <li className="loacation-map-list-item" key={item.text}>
                        <a className="loacation-map-link" href={item.href}>
                            {item.text}
                        </a>
                    </li>
                )}
            </ul>
        </>
    )
}