/**
 * Page advertising module
 * 
 * @param {text} // advertising text
 * @param {src} // link to image
 * @param {title} // advertising title
 * 
 * @public
 */

export default function YandexAdvertising(props) {
    const { text, src, title } = props.advertising;
    return(
        <div className="advertising">
            <img className="advertising-image" src={src} alt={title}></img>
            <h5 className="advertising-title">{title}</h5>
            <p className="advertising-text">{text}</p>
        </div>
    )
}