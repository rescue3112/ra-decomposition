/**
 * Weather Forecast Information block
 * 
 * @param {text} // clarifying information
 * @param {href} // link to weather forecast website
 * @param {url} // link to image current status (exampl: cloudy, sunny, etc.)
 * @param {title} // Weather Forecast title
 * @param {temp} // current Weather Forecast
 * 
 * @public
 */

export default function WetherForecast(props) {
    const { href, url, temp, text, title} = props
    return(
        <>
            <h5 className='info-title'>{title}</h5>
            <a className="wether-forecast" href={href}>
                <span className="wether-image" style={ {backgroundImage: 'url(' + url + ')'} }></span>
                {temp}
                <p className="wether-text">{text}</p>
            </a>
        </>
    )
}