/**
 * Baner marketing module
 * 
 * @param {href} // link to resours
 * @param {src} // link to image
 * @param {alt} // image caption
 * 
 * @public
 */

export default function BanerMarketing(props) {
    const {baner} = props
    return(
        <a className="baner-marketing-link" href={baner.href}>
            <img className="baner-image" src={baner.src} alt={baner.alt}></img>
        </a>
    )
}