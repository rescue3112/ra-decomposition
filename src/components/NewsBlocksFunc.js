import ExchangeRate from "./WidgetExchangeRateFunc";

/**
 * News block
 * 
 * @param {assets} // the object to transfer to the asset widget
 * 
 * @public
 */

export default function NewsBlocks(props) {

    const { assets } = props;
    const { children } = props;
    const date = new Date();

    return(
        <div className="news-block">
            <div className="news-block-titles">
                {props.news.map(item => <a className="title" key={item.title} href="https://alexwebart.github.io/ra-decomposition/">{item.title}</a>)}
                <div className="date-now">{date.now}</div>
            </div>
            <ul className="news">
                {children}
            </ul>
            <ExchangeRate assets={assets}/>
        </div>
    )
}