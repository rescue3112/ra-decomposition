import WetherForecast from "./WetherForecastBlockFunc";
import Visit from "./VisitBlockFunc";
import LocationMap from "./LocationMapBlockFunc";
import TVprogram from "./TVprogramBlockFunc";
import Broadcast from "./BroadcastBlockFunc";

/**
 * Information blocks of different types
 * 
 * @param {infoBlocks} // contains several objects of different types
 * 
 * @public
 */

export default function InfoBloks(props) {
    const {infoBlocks} = props

    return (
        infoBlocks.map(item => {
            return <div className={'info-block ' + item.type} key={item.type}>
                {
                    item.type === 'wether' ? <WetherForecast {...item}/> :
                    item.type === 'visit' ? <Visit {...item}/> :
                    item.type === 'map' ? <LocationMap {...item}/> :
                    item.type === 'TVprogram' ? <TVprogram {...item}/> :
                    item.type === 'broadcast' ? <Broadcast {...item}/> :
                    null
                }
            </div>
        })
    )
}