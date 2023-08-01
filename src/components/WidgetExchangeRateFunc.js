/**
 * Widget for the value of stocks and currencies at the bottom of the news block
 * 
 * @param {name} // name of the asset
 * @param {cost} // cost of the asset
 * @param {difference} // difference from the previous indicator
 * 
 * @public
 */

export default function ExchangeRate(props) {
    const { assets } = props

    return (
        <>
            {assets.map(item => 
                <div className="assets-conteiner" key={item.name}>
                    <span className="asset-name">{item.name}</span>
                    <span className="asset-cost">{item.cost}</span>
                    <span className="asset-difference">{item.difference}</span>
                </div>)}
        </>
    )
}